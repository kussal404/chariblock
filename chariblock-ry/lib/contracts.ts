import { ethers } from 'ethers';

// Contract ABI - Essential functions only for frontend
export const CHARITY_PLATFORM_ABI = [
  // Events
  "event CharityCreated(uint256 indexed charityId, address indexed creator, address indexed charityWallet, string name, uint256 targetAmount)",
  "event DonationMade(uint256 indexed donationId, uint256 indexed charityId, address indexed donor, uint256 amount, string message)",
  "event CharityVerified(uint256 indexed charityId, bool verified)",
  
  // Read functions
  "function getCharity(uint256 _charityId) view returns (tuple(uint256 id, address charityWallet, address creator, string name, string description, string category, uint256 targetAmount, uint256 raisedAmount, uint256 createdAt, bool isActive, bool isVerified, string ipfsHash))",
  "function getUserCharities(address _user) view returns (uint256[])",
  "function getUserDonations(address _user) view returns (uint256[])",
  "function getCharityDonations(uint256 _charityId) view returns (uint256[])",
  "function getDonation(uint256 _donationId) view returns (tuple(uint256 charityId, address donor, uint256 amount, uint256 timestamp, string message))",
  "function getTotalCharities() view returns (uint256)",
  "function getCharityProgress(uint256 _charityId) view returns (uint256 raised, uint256 target, uint256 percentage)",
  "function platformFeeRate() view returns (uint256)",
  
  // Write functions
  "function createCharity(address payable _charityWallet, string _name, string _description, string _category, uint256 _targetAmount, string _ipfsHash) returns (uint256)",
  "function donate(uint256 _charityId, string _message) payable",
  "function verifyCharity(uint256 _charityId, bool _verified)",
  "function updateCharityStatus(uint256 _charityId, bool _isActive)"
];

// Contract addresses for different networks
export const CONTRACT_ADDRESSES = {
  // Local development (Hardhat)
  localhost: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", // Default Hardhat deployment address
  
  // Sepolia testnet
  sepolia: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_SEPOLIA || "",
  
  // Mainnet (when ready)
  mainnet: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_MAINNET || ""
};

// Network configurations
export const NETWORKS = {
  localhost: {
    chainId: 31337,
    name: "Localhost",
    rpcUrl: "http://127.0.0.1:8545",
    blockExplorer: ""
  },
  sepolia: {
    chainId: 11155111,
    name: "Sepolia",
    rpcUrl: "https://sepolia.infura.io/v3/",
    blockExplorer: "https://sepolia.etherscan.io"
  }
};

export interface CharityStruct {
  id: bigint;
  charityWallet: string;
  creator: string;
  name: string;
  description: string;
  category: string;
  targetAmount: bigint;
  raisedAmount: bigint;
  createdAt: bigint;
  isActive: boolean;
  isVerified: boolean;
  ipfsHash: string;
}

export interface DonationStruct {
  charityId: bigint;
  donor: string;
  amount: bigint;
  timestamp: bigint;
  message: string;
}

export class ContractService {
  private provider: ethers.BrowserProvider | null = null;
  private contract: ethers.Contract | null = null;
  private signer: ethers.JsonRpcSigner | null = null;

  async initialize(): Promise<void> {
    if (!window.ethereum) {
      throw new Error('MetaMask not found');
    }

    this.provider = new ethers.BrowserProvider(window.ethereum);
    this.signer = await this.provider.getSigner();
    
    // Get current network
    const network = await this.provider.getNetwork();
    const chainId = Number(network.chainId);
    
    let contractAddress = "";
    
    // Determine contract address based on network
    if (chainId === 31337) {
      contractAddress = CONTRACT_ADDRESSES.localhost;
    } else if (chainId === 11155111) {
      contractAddress = CONTRACT_ADDRESSES.sepolia;
    } else {
      throw new Error(`Unsupported network. Please switch to Sepolia testnet or localhost.`);
    }

    if (!contractAddress) {
      throw new Error(`Contract not deployed on this network (chainId: ${chainId})`);
    }

    this.contract = new ethers.Contract(contractAddress, CHARITY_PLATFORM_ABI, this.signer);
  }

  private async ensureInitialized(): Promise<void> {
    if (!this.contract) {
      await this.initialize();
    }
  }

  // Charity functions
  async createCharity(
    charityWallet: string,
    name: string,
    description: string,
    category: string,
    targetAmount: string,
    ipfsHash: string
  ): Promise<string> {
    await this.ensureInitialized();
    
    const targetAmountWei = ethers.parseEther(targetAmount);
    const tx = await this.contract!.createCharity(
      charityWallet,
      name,
      description,
      category,
      targetAmountWei,
      ipfsHash
    );
    
    return tx.hash;
  }

  async getCharity(charityId: number): Promise<CharityStruct> {
    await this.ensureInitialized();
    return await this.contract!.getCharity(charityId);
  }

  async getAllCharities(): Promise<CharityStruct[]> {
    await this.ensureInitialized();
    
    const totalCharities = await this.contract!.getTotalCharities();
    const charities: CharityStruct[] = [];
    
    for (let i = 1; i <= Number(totalCharities); i++) {
      try {
        const charity = await this.getCharity(i);
        charities.push(charity);
      } catch (error) {
        console.warn(`Failed to fetch charity ${i}:`, error);
      }
    }
    
    return charities;
  }

  async getUserCharities(userAddress: string): Promise<number[]> {
    await this.ensureInitialized();
    const charityIds = await this.contract!.getUserCharities(userAddress);
    return charityIds.map((id: bigint) => Number(id));
  }

  // Donation functions
  async donate(charityId: number, amount: string, message: string = ""): Promise<string> {
    await this.ensureInitialized();
    
    const amountWei = ethers.parseEther(amount);
    const tx = await this.contract!.donate(charityId, message, { value: amountWei });
    
    return tx.hash;
  }

  async getUserDonations(userAddress: string): Promise<number[]> {
    await this.ensureInitialized();
    const donationIds = await this.contract!.getUserDonations(userAddress);
    return donationIds.map((id: bigint) => Number(id));
  }

  async getDonation(donationId: number): Promise<DonationStruct> {
    await this.ensureInitialized();
    return await this.contract!.getDonation(donationId);
  }

  async getCharityDonations(charityId: number): Promise<number[]> {
    await this.ensureInitialized();
    const donationIds = await this.contract!.getCharityDonations(charityId);
    return donationIds.map((id: bigint) => Number(id));
  }

  // Admin functions
  async verifyCharity(charityId: number, verified: boolean): Promise<string> {
    await this.ensureInitialized();
    const tx = await this.contract!.verifyCharity(charityId, verified);
    return tx.hash;
  }

  // Utility functions
  async getCharityProgress(charityId: number): Promise<{
    raised: bigint;
    target: bigint;
    percentage: bigint;
  }> {
    await this.ensureInitialized();
    const [raised, target, percentage] = await this.contract!.getCharityProgress(charityId);
    return { raised, target, percentage };
  }

  async getPlatformFeeRate(): Promise<number> {
    await this.ensureInitialized();
    const feeRate = await this.contract!.platformFeeRate();
    return Number(feeRate);
  }

  // Event listeners
  onCharityCreated(callback: (charityId: number, creator: string, name: string) => void): void {
    if (!this.contract) return;
    
    this.contract.on("CharityCreated", (charityId, creator, charityWallet, name, targetAmount) => {
      callback(Number(charityId), creator, name);
    });
  }

  onDonationMade(callback: (donationId: number, charityId: number, donor: string, amount: bigint) => void): void {
    if (!this.contract) return;
    
    this.contract.on("DonationMade", (donationId, charityId, donor, amount, message) => {
      callback(Number(donationId), Number(charityId), donor, amount);
    });
  }

  removeAllListeners(): void {
    if (this.contract) {
      this.contract.removeAllListeners();
    }
  }
}

export const contractService = new ContractService();