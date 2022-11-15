import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Dashboard from "./pages/Dashboard/Dashboard"
import Ticket from './pages/Ticket/Ticket'
import Nav from './components/Nav/Nav';
import CategoriesContext from './Context/context';
import { useState } from 'react';

const App = () => {
  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }

  return (
    <div className="App">
      <CategoriesContext.Provider value={value}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/ticket/:id" element={<Ticket editMode={true} />} />
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App;
