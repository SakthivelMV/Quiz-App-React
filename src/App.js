import axios from "axios";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from './Components/Header/Footer/Footer';
import Home from './Components/Pages/Home/Home'
import Quiz from './Components/Pages/Quiz/Quiz';
import Result from "./Components/Pages/Result/Result";
import { useState } from 'react';

function App() {
  const [name,setName]=useState();
  const [ques,setQues]=useState()
  const [score,setScore]=useState(0)
  const fetchQues = async (category="") => { 
    const {data}=await axios.get(
      `https://opentdb.com/api.php?amount=5${
        category && `&category=${category}`
    }&type=multiple`);
    setQues(data.results)
  };
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./white2.jpg)"}}>
      <Header/>
      <Footer/>
      <Routes>
        <Route path='/' element = {<Home name={name} setName={setName} fetchQues={fetchQues}/>}/>
        <Route path='/quiz' element = {<Quiz name={name} ques={ques} score={score} setScore={setScore} setQues={setQues} />}/>
        <Route path='/result' element = {<Result name={name} score={score}/>}/>

      </Routes>
</div>
    </BrowserRouter>
  );
}

export default App;
