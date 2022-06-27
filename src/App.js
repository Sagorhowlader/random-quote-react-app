import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import QuoteBox from "./components/QuoteBox";
const quoteAPIURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
const setRandomValue = quotes => {
    let randomNum = Math.floor(Math.random() * quotes.length)
    console.log("randomNum", randomNum)
    return quotes[randomNum]
}
const useFetchData = url => {
    const [data, setData]= useState('')

    useEffect(()=>{
       axios.get(url).then(result=> setData(result.data))
    },[url])

    return data;
}


function App() {
  const quotesArray = useFetchData(quoteAPIURL)
  const [currentQuote, setCurrentQuote] = useState({quote:'', author:''})

  useEffect(()=>{
      if(quotesArray){
          let quotes = quotesArray.quotes
          setCurrentQuote(setRandomValue(quotes))
      }
  },[quotesArray])
    const handleNextButton  = () => {
        console.log("quotesArray",quotesArray)
        let quotes = quotesArray.quotes
        setCurrentQuote(setRandomValue(quotes))
    }
  return (
    <div className="App">
      <header className="App-header">
          <QuoteBox currentQuote={currentQuote} handleNextButton={handleNextButton}></QuoteBox>
      </header>
    </div>
  );
}

export default App;
