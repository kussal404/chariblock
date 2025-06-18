# chariblock-backend/README.md

# Chariblock Backend

This is the backend for the Chariblock project, a decentralized crowdfunding platform that supports login and signup functionality for both charity creators and donors.

## Project Structure

The project is structured as follows:

```
chariblock-backend/
├── chariblock_backend/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── accounts/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── tests.py
├── manage.py
├── requirements.txt
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd chariblock-backend
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the requirements:**
   ```
   pip install -r requirements.txt
   ```

4. **Run migrations:**
   ```
   python manage.py migrate
   ```

5. **Run the development server:**
   ```
   python manage.py runserver
   ```

## Features

- User authentication for charity creators and donors.
- RESTful API for handling login and signup requests.
- Admin interface for managing users and other models.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.