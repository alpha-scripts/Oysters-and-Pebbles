import mongoose from 'mongoose'
import { connectDB } from '../api/lib/db.js'
import Car from '../api/lib/models/Car.js'
import { cars } from '../src/data/cars.js'

await connectDB()

const docs = cars.map(({ id, ...rest }) => ({ slug: id, ...rest }))

await Car.deleteMany({})
await Car.insertMany(docs)

console.log(`Seeded ${docs.length} cars.`)
await mongoose.disconnect()
