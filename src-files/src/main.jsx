import React from 'react'
import { createRoot } from 'react-dom/client'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

import './reset.css'
import { counterReducer } from './pages/counter/reducer.js'
import CounterPage from './pages/counter/CounterPage.jsx'

import './api/mock-server.js'

const rootReducer = combineReducers({
	counter: counterReducer
});


const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));

 createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	{/* // redux обертка*/}
		<Provider store={store}>
			<CounterPage/>
		</Provider>
    
  </React.StrictMode>,
) 
