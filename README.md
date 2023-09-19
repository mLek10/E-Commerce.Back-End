# E-Commerce.Back-End

An internet retail platform designed to help you manage your online store efficiently. This application is built using technologies including Express.js, Sequelize, and MySQL.

## Getting Started
To get started with the E-Commerce Website, follow these steps:

1. Clone the repository to your local machine.
git clone <repository-url>

2. Install the required dependencies.
npm install

3. Create a .env file in the project root and set the following environment variables:
DB_NAME=<your-database-name>
DB_USER=<your-mysql-username>
DB_PASSWORD=<your-mysql-password>

4. Initialize the database by running the SQL commands in the schema.sql file located in the db folder.

5. Seed the database with sample data using the following command:
npm run seed

6. Start the server.
npm start

The E-Commerce Website should now be up and running locally.

## Database Models
The application uses four main database models:

Category: Represents product categories with the following columns:
id (Integer, primary key)
category_name (String)

Product: Represents products with the following columns:
id (Integer, primary key)
product_name (String)
price (Decimal)
stock (Integer)
category_id (Integer, foreign key referencing Category)

Tag: Represents product tags with the following columns:
id (Integer, primary key)
tag_name (String)

ProductTag: Represents the many-to-many relationship between products and tags with the following columns:
id (Integer, primary key)
product_id (Integer, foreign key referencing Product)
tag_id (Integer, foreign key referencing Tag)

## API Routes
The application provides the following API routes for CRUD (Create, Read, Update, Delete) operations:

/api/categories: Manage product categories.
/api/products: Manage products, including their categories and tags.
/api/tags: Manage product tags.
For detailed information on how to use these routes, refer to the API documentation or the video submission guide.

## Seeding the Database
You can seed the database with sample data using the following command:
npm run seed

This command will populate the database with predefined categories, products, tags, and product-tag associations for testing purposes.

## Syncing Sequelize to the Database
The Sequelize models are synced to the MySQL database when you start the server. This ensures that your database schema matches the defined models.

## Video Submission
