# Contents of /netflix-clone/netflix-clone/database/README.md

# Database Setup for Netflix Clone

This document provides instructions for setting up and initializing the database for the Netflix clone project.

## Database Configuration

The project uses MongoDB as the database. Ensure you have MongoDB installed and running on your machine. You can also use a cloud-based MongoDB service like MongoDB Atlas.

### Connection String

Update the connection string in the `.env` file located in the `backend` directory to point to your MongoDB instance. The format should be:

```
MONGODB_URI=mongodb://<username>:<password>@localhost:27017/netflix-clone
```

Replace `<username>`, `<password>`, and `localhost:27017` with your MongoDB credentials and host information.

## Initialization Scripts

The `init.js` file contains scripts for initializing the database. This may include seeding the database with initial data or creating necessary collections.

### Running Initialization

To run the initialization script, execute the following command in your terminal:

```
node init.js
```

This will set up the database with the required collections and initial data.

## Important Notes

- Ensure that your MongoDB server is running before executing any scripts.
- Review the `init.js` file for any specific data that will be seeded into the database.
- For production environments, consider using environment variables to manage sensitive information securely.

## Troubleshooting

If you encounter any issues while setting up the database, check the following:

- Ensure MongoDB is installed and running.
- Verify your connection string in the `.env` file.
- Check for any errors in the terminal when running the initialization script.

For further assistance, refer to the MongoDB documentation or seek help from the community.