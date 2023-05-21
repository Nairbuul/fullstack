import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
  {                           //Notes contains an unique ID, a content, and a boolean value if it's important or not.
    id: 1,                    //Unique Identifier
    content: 'HTML is easy',  //Text
    important: true           //Every note element contains a boolean denoting if it is important or not.
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)