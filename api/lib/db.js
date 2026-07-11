import mongoose from 'mongoose'
import dns from 'node:dns'

// Some local networks (VPN adapters, certain routers) can't resolve the DNS
// SRV records mongodb+srv:// needs. Set DNS_SERVERS in .env (e.g. "8.8.8.8")
// to route lookups through a public resolver for local dev only.
if (process.env.DNS_SERVERS) {
  dns.setServers(process.env.DNS_SERVERS.split(',').map((s) => s.trim()))
}

let connectionPromise = null

export function connectDB() {
  if (connectionPromise) return connectionPromise

  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI is not set')

  connectionPromise = mongoose.connect(uri).catch((err) => {
    connectionPromise = null
    throw err
  })

  return connectionPromise
}
