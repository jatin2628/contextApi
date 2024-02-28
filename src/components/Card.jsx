import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

function Card() {
  
    

    const {themeMode} = useTheme();

    const cardClass = themeMode === "dark" ? "text-5xl bg-red-600 m-20" : "text-5xl m-20";
  
  return (
    <div className={cardClass}>Card</div>
  )
}

export default Card