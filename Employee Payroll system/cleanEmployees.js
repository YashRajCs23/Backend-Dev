// cleanEmployees.js
// Run: node cleanEmployees.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log('Connected to MongoDB');

// Delete employees where salary field is missing or NaN
const result = await mongoose.connection.db.collection('employees').deleteMany({
  $or: [
    { salary: { $exists: false } },
    { salary: null },
    { departments: { $exists: false } },
  ]
});

console.log(`✅ Deleted ${result.deletedCount} corrupt employee(s)`);
await mongoose.disconnect();
