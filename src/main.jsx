import {StrictMode} from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.scss'

const app = ReactDOM.createRoot(document.getElementById('root'))

app.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
