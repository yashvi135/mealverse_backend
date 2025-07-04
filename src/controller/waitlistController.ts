// waitlistController.ts
import { RequestHandler } from 'express';
import Waitlist from '../models/waitlist';

export const addToWaitlist: RequestHandler = async (req, res) => {
  try {
    const { name, email,phoneno, city, address, pincode, userType } = req.body;
    
    // Validation
    if (!name || !email || !phoneno || !city || !address || !pincode || !userType) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    // Debug logs
    console.log("📦 Using collection:", Waitlist.collection.name);
    console.log('📝 New waitlist entry data:', req.body);

    // Create and save to MongoDB
    const newEntry = new Waitlist({ 
      name, 
      email, 
      phoneno,
      city, 
      address, 
      pincode, 
      userType 
    });
    
    const savedEntry = await newEntry.save();

    res.status(201).json({ 
      message: 'Successfully added to waitlist',
      data: savedEntry 
    });

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};