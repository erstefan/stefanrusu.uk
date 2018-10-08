const express = require('express')
const consola = require('consola')
const { json } = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const sendGrid = require('@sendgrid/mail')

require('dotenv').config()
app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}
start()

app.post('/api/contact', json(), (req, res) => {
  const { name, email, message } = req.body

  if (!name || name.length < 3) {
    return res.status(401).json({ OK: false, message: 'Name is too short.' })
  }

  if (!email || email.length < 5) {
    return res.status(401).json({
      OK: false,
      message: 'Please provide your best email.',
    })
  }

  if (!message || message.length < 10 || message.length > 500) {
    return res.status(401).json({
      OK: false,
      message: 'Keep it sweet & short.',
    })
  }

  sendGrid.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'erstefan13@gmail.com',
    from: email,
    subject: `[INQUIRY] from ${name} on STEFANRUSU.UK`,
    text: message,
  }

  sendGrid
    .send(msg, () => res.status(200).json({
      OK: true,
      message: 'Message sent successfully. I will get back to you asap.',
    }));
})