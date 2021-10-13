import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Join from './component/Join/Join'
import Chat from './component/ChatB/Chatb'
const App = () => {
  return (
    <div>
     <Router>
         <Route path="/" exact component={Join}></Route>
         <Route path="/chat" exact component={Chat}></Route>
      </Router>
    </div>
  )
}

export default App
