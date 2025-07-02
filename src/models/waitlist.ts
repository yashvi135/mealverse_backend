
import mongoose, { Schema, Document } from 'mongoose';

interface Waitlist extends Document {
  name: string;
  email: string;
  phoneno: string;
  city: string;
  address: string;
  pincode: string;
  userType: string;
  createdAt: Date;
}

const WaitlistSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phoneno:{
    type:String,
    required:true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(pincode: string) {
        return /^\d{6}$/.test(pincode);
      },
      message: 'Pincode must be exactly 6 digits'
    }
  },
  userType: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true // This automatically adds createdAt and updatedAt
});

export default mongoose.model<Waitlist>('Waitlist', WaitlistSchema);