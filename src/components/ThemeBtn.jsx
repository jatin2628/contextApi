import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeBtn() {
    const {themeMode,darkTheme,lightTheme} = useTheme();
    const handleChecked = (e) => {
        const checkedvalue = e.currentTarget.checked
        // console.log(checkedvalue)
        if(checkedvalue){
            darkTheme()
        }
        else{
            lightTheme()
        }
    }
  return (
    <input type='checkbox'
    value={themeMode}
    onChange={handleChecked}
    checked={themeMode==="dark"}
     />
  )
}
