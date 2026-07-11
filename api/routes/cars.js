import { Router } from 'express'
import Car from '../lib/models/Car.js'

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const { filter, featured } = req.query
    const query = {}
    if (filter && filter !== 'all') query.tags = filter
    if (featured === 'true') query.featuredOnHome = true

    const cars = await Car.find(query).sort({ createdAt: 1 })
    res.json(cars)
  } catch (err) {
    next(err)
  }
})

export default router
