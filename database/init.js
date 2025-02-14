const mongoose = require('mongoose');
const Item = require('../backend/src/models/Item');

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Seed initial data
const seedData = async () => {
  const items = [
    { name: 'Item 1', price: 10, category: 'Category 1', quantity: 100 },
    { name: 'Item 2', price: 20, category: 'Category 2', quantity: 50 },
    { name: 'Item 3', price: 15, category: 'Category 1', quantity: 75 },
  ];

  await Item.deleteMany(); // Clear existing items
  await Item.insertMany(items); // Insert new items
  console.log('Database seeded with initial data...');
};

// Initialize the database
const initDB = async () => {
  await connectDB();
  await seedData();
  mongoose.connection.close();
};

// Run the initialization
initDB();