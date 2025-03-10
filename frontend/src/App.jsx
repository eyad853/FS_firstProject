import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ImportantPage from './pages/Important/ImportantPage'
import PlannedPage from './pages/Planned/PlannedPage'
import TasksPage from './pages/Tasks/TasksPage'
import Modal from "react-modal"
Modal.setAppElement("#root")


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/important' element={<ImportantPage />}/>
      <Route path='/planned' element={<PlannedPage />}/>
      <Route path='/tasks' element={<TasksPage />}/>
    </Routes>
   </Router>
  )
}

export default App