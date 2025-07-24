'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CharityCard } from '@/components/CharityCard';
import { ApiService, Charity } from '@/lib/api';
import { Search, Filter, Heart } from 'lucide-react';

export default function CharitiesPage() {
  const [charities, setCharities] = useState<Charity[]>([]);
  const [filteredCharities, setFilteredCharities] = useState<Charity[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('approved');

  const categories = [
    'all',
    'Education',
    'Healthcare',
    'Environment',
    'Poverty',
    'Disaster Relief',
    'Animal Welfare',
    'Human Rights',
    'Other'
  ];

  useEffect(() => {
    const loadCharities = async () => {
      try {
        const data = await ApiService.getCharities();
        console.log('Loaded charities:', data);
        setCharities(data);
        setFilteredCharities(data);
      } catch (error) {
        console.error('Failed to load charities:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCharities();
  }, []);

  useEffect(() => {
    let filtered = charities;

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(charity => charity.status === selectedStatus);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(charity => charity.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(charity =>
        charity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        charity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        charity.creator.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCharities(filtered);
  }, [charities, searchTerm, selectedCategory, selectedStatus]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-2 text-muted-foreground">Loading charities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          All Charities
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover verified charity campaigns and make a direct impact with your donations
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="px-3 py-1">
            <Heart className="w-3 h-3 mr-1" />
            {filteredCharities.length} Charities
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            Total Raised: {filteredCharities.reduce((sum, c) => sum + c.raisedAmount, 0).toFixed(2)} ETH
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search charities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedStatus('approved');
            }}
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Charities Grid */}
      {filteredCharities.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No charities found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharities.map((charity) => (
            <CharityCard key={charity.id} charity={charity} />
          ))}
        </div>
      )}
    </div>
  );
}