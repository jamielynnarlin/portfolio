import express from 'express'
import cors from 'cors'
import { SessionsClient } from '@google-cloud/dialogflow-cx'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
app.use(cors())
app.use(express.json())

const PROJECT_ID = process.env.DIALOGFLOW_PROJECT_ID || 'arlin-personal'
const LOCATION = process.env.DIALOGFLOW_LOCATION || 'us-central1'
const AGENT_ID = process.env.DIALOGFLOW_AGENT_ID || 'b7a475ad-6a04-4560-8f6e-0e1b33457e17'

const client = new SessionsClient({
  apiEndpoint: `${LOCATION}-dialogflow.googleapis.com`,
})

// Initialize a new session
app.post('/api/chat/init', (req, res) => {
  const sessionId = uuidv4()
  res.json({ sessionId })
})

// Send a message to Dialogflow CX
app.post('/api/chat', async (req, res) => {
  const { message, sessionId } = req.body

  if (!message || !sessionId) {
    return res.status(400).json({ error: 'message and sessionId are required' })
  }

  const sessionPath = client.projectLocationAgentSessionPath(
    PROJECT_ID,
    LOCATION,
    AGENT_ID,
    sessionId
  )

  const request = {
    session: sessionPath,
    queryInput: {
      text: { text: message },
      languageCode: 'en',
    },
  }

  try {
    const [response] = await client.detectIntent(request)
    const messages = (response.queryResult.responseMessages || [])
      .filter((m) => m.text)
      .map((m) => m.text.text.join('\n'))

    res.json({
      reply: messages.join('\n\n') || "I'm not sure how to respond to that.",
    })
  } catch (err) {
    console.error('Dialogflow error:', err.message)
    res.status(500).json({ error: 'Failed to get response from assistant' })
  }
})

// Trigger welcome event (initial greeting)
app.post('/api/chat/welcome', async (req, res) => {
  const { sessionId } = req.body

  if (!sessionId) {
    return res.status(400).json({ error: 'sessionId is required' })
  }

  const sessionPath = client.projectLocationAgentSessionPath(
    PROJECT_ID,
    LOCATION,
    AGENT_ID,
    sessionId
  )

  const request = {
    session: sessionPath,
    queryInput: {
      event: { event: 'sys.no-input-default' },
      languageCode: 'en',
    },
  }

  try {
    const [response] = await client.detectIntent(request)
    const messages = (response.queryResult.responseMessages || [])
      .filter((m) => m.text)
      .map((m) => m.text.text.join('\n'))

    res.json({
      reply:
        messages.join('\n\n') ||
        "Hi! I'm Jamie's portfolio assistant. Ask me about her skills, projects, or experience.",
    })
  } catch {
    res.json({
      reply: "Hi! I'm Jamie's portfolio assistant. Ask me about her skills, projects, or experience.",
    })
  }
})

// Serve static frontend in production
const distPath = path.join(__dirname, '..', 'dist')
app.use('/assets', express.static(path.join(distPath, 'assets'), {
  maxAge: '1y',
  immutable: true,
}))
app.use(express.static(distPath, { maxAge: 0 }))
app.get('/{*path}', (req, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.sendFile(path.join(distPath, 'index.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
