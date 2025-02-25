# Tranquill-Travel

Tranquill Travel is a web application designed to help people find peace and spend time in nature. It offers online and offline meditation classes, yoga sessions, travel packages for solo travelers and families, and nature visit packages.

## Features
- **Meditation Programs**: Online and offline meditation sessions.
- **Yoga Classes**: Different types of yoga programs for individuals.
- **Travel Packages**: Tailored packages for individuals, families, and nature visits.
- **User Registration & Authentication**: Secure login and registration.
- **Package Registration**: Users can register for different programs and packages.
- **Contact Form**: Users can reach out for queries or bookings.

## Folder Structure
```
tranquill/
│── php files/                # Backend PHP scripts for data handling
│   ├── fetchFamilyPackages.php
│   ├── fetchIndividualPackages.php
│   ├── fetchMedi2Program.php
│   ├── fetchYogaProgram.php
│   ├── loginCheck.php
│   ├── registerPackageT1.php
│   ├── registerPackageT2.php
│   ├── registerProgram.php
│   ├── contactInsert.php
│
│── public/                   # Static public files
│
│── src/                      # React Frontend
│   ├── About/                # About page components
│   ├── Contact/              # Contact page components
│   ├── Home/                 # Homepage components
│   ├── Live/                 # Nature visit package components
│   ├── Main/                 # Main components (Header, Footer, etc.)
│   ├── Meditation/           # Meditation programs
│   ├── Yoga/                 # Yoga programs
│   ├── MyPackage/            # User's booked packages
│   ├── assets/               # Images and other assets
│   ├── App.js                # Main React component
│   ├── index.js              # Entry point
│
│── .gitignore                # Git ignore file
│── package.json              # Project dependencies
│── README.md                 # Project documentation
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/tranquill-travel.git
   cd tranquill
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Set up the backend:
   - Import the `tranquill.sql` database.
   - Configure `php` files to match your database connection settings.

## Technologies Used
- **Frontend**: React.js, Html, Css, Bootstrap
- **Backend**: PHP, MySQL
- **Database**: MySQL
- **HTTP Requests**: Axios
- **Routing**: React Router

## Contributor
- Aditi Panchal
