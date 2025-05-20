import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Meal from './components/meals'
import './components/styles.css'
import RecipeInfo from './components/RecipeInfo'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Meal/>}/>
      <Route path="/:Mealid" element={<RecipeInfo/>}/>
    </Routes>
    </>
  )
}

export default App;
