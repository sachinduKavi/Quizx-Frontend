import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import  {Provider} from 'react-redux'
import store from './redux/store.tsx'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor} from './redux/store.tsx'
import {Toaster} from 'react-hot-toast'
import Loading from './components/Loading.tsx'


import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

            <Toaster />
            <Loading/>
            <App />
  
      </PersistGate>
    
    </Provider>
   
  ,
)
