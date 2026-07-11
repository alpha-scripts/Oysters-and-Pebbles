import mongoose from 'mongoose'

const carSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    engineSpec: { type: String, required: true },
    transmission: { type: String, required: true },
    drivetrain: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String], required: true },
    badgeCategory: { type: String, required: true },
    badgeExtra: { type: String, enum: ['New', 'Featured', null], default: null },
    imageBase: { type: String, required: true },
    status: { type: String, enum: ['in_stock', 'sold', 'pending'], default: 'in_stock' },
    whatsappMessage: { type: String, required: true },
    featuredOnHome: { type: Boolean, default: false }
  },
  { timestamps: true }
)

export default mongoose.models.Car || mongoose.model('Car', carSchema)
