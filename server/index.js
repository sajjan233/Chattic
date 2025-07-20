import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './src/routes/index.js';

// Enable __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env from server/.env
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
app.use(express.json());

// ✅ Access env vars
const { MONGODB_PROD, MONGODB_STAGING, PORT, NODE_ENV } = process.env;

// ✅ Choose DB URL based on environment
let mongodbUrl = NODE_ENV === 'Production' ? MONGODB_PROD : MONGODB_STAGING;

// ✅ Connect to MongoDB
mongoose.connect(mongodbUrl, {})
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// ✅ Routes
app.use('/', router);

// ✅ Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/build')));  // Adjust if needed

// ✅ Start server
app.listen(PORT || 3000, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
