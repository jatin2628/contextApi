import { useEffect, useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import { ThemeContextProvider } from './contexts/ThemeContext'
import UserContextProvider from './contexts/userContextProvider.jsx'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

// function App() {
  

//   return (
//     <UserContextProvider>
//        <Login/>
//        <Profile/>
//     </UserContextProvider>
//   )
// }

// export default App


function App() {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(()=>{
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }
  return (
    <ThemeContextProvider value={{themeMode,darkTheme,lightTheme}}>
       <ThemeBtn />
       <Card />
    </ThemeContextProvider>
  )
}

export default App
