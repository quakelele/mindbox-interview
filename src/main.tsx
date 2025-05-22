import { createRoot } from 'react-dom/client'
import './shared/styles/global.scss'
import { App } from 'app/index'

createRoot(document.getElementById('root')!).render(<App />)
