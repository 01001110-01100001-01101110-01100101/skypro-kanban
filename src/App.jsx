import { useEffect, useState } from 'react';
import './App.css'
import { Header } from "./components/Header"
import { Main } from "./components/Main";
import { tasks } from '../data';
import { GlobalStyle, Wrapper } from './globalStyle.styled';


function App() {
  const [cards, setCards] = useState(tasks) 
   const [isLoading, setIsLoading] = useState(false)

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
    <>
      <GlobalStyle/>
      <Wrapper>
        <Header addCard={addCard}/>
        {isLoading ? <p className='loader'>Loading...</p> : <Main cards={cards}/>}
      </Wrapper>
    </>
  )
}

export default App
