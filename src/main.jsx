import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store/index.js'

const el = document.getElementById('root')
const root = createRoot(el)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
