import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import useDebounce from "./components/Header/useDebounce";


function App() {
  const[input,setInput]=useState("");
  const debouncedTitle = useDebounce(input,500);
  return(
    <>
    <div className="bg-secondary-subtle">
    <Header userValue={setInput}/>
    <Hero title={debouncedTitle}/>
    </div>
    </>
  )
}

export default App;
