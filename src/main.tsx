
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(

 <main className='max-w-3xl mx-auto'>
    <BrowserRouter>
    <App  />
   </BrowserRouter>
 </main>

)
