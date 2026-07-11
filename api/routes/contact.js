import { Router } from 'express'
import ContactSubmission from '../lib/models/ContactSubmission.js'

const router = Router()
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone, message, carInterest } = req.body ?? {}
    const errors = {}

    if (!name || !String(name).trim()) errors.name = 'Name is required'
    if (!message || !String(message).trim()) errors.message = 'Message is required'
    if (!email?.trim() && !phone?.trim()) {
      errors.contact = 'Provide at least an email or phone number'
    }
    if (email?.trim() && !EMAIL_RE.test(email.trim())) errors.email = 'Enter a valid email address'

    if (Object.keys(errors).length) {
      return res.status(400).json({ errors })
    }

    const submission = await ContactSubmission.create({
      name: name.trim(),
      email: email?.trim(),
      phone: phone?.trim(),
      message: message.trim(),
      carInterest: carInterest?.trim()
    })

    res.status(201).json({ id: submission._id })
  } catch (err) {
    next(err)
  }
})

export default router
