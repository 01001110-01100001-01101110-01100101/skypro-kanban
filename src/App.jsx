import { useEffect, useState } from 'react';
import './App.css'
import { Header } from "./components/Header"
import { Main } from "./components/Main";
import { tasks } from '../data';
import { GlobalStyle, WrapperStyle } from './globalStyle.styled';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './theme';


function App() {
  const [cards, setCards] = useState(tasks) 
  const [isLoading, setIsLoading] = useState(false)
  const [theme, setTheme] = useState("light")

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: "1.1.2023",
      topic: "Web Design",
      title: "Спеть",
      status: "Без статуса"
    }
    setCards([...cards, newCard])
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle/>
      <WrapperStyle>
        <Header addCard={addCard} setTheme={setTheme} theme={theme}/>
        {isLoading ? <p className='loader'>Loading...</p> : <Main cards={cards}/>}
      </WrapperStyle>
    </ThemeProvider>
  )
}

export default App
