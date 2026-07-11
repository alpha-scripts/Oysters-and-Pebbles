import mongoose from 'mongoose'

const contactSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    message: { type: String, required: true },
    carInterest: { type: String },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' }
  },
  { timestamps: true }
)

export default mongoose.models.ContactSubmission ||
  mongoose.model('ContactSubmission', contactSubmissionSchema)
