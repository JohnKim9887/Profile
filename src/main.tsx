import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'system-ui, sans-serif',
        headings: { fontFamily: 'system-ui, sans-serif' },
        primaryColor: 'blue',
      }}
    >
      <App />
    </MantineProvider>
  </StrictMode>,
)
