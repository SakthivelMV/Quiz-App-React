import { useState } from "react"
import {useNavigate} from "react-router";
import ErrorMessage from "../Errormess";
import "./Questions.css"
import { Button } from "@mui/material";

const Questions=({
    curque,
        setCurque,
        ques,
        score,
        setScore,
        setQues,
        options,
        correct,
})=>{

    const [selected,setSelected]=useState();
    const [error,setError]=useState(false)
    const hanndleSelect = (i)=>{
        if(selected===i && selected===correct){
            return "select";
        }
        else if (selected===i && selected!==correct){
            return "wrong";
        }else if(i===correct){
            return "select";
        }
    };
    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };
const history = useNavigate();
const handleNext = ()=>{
        if(curque>3){
            history('/result')
        }
        else if(selected){
            setCurque(curque+1)
            setSelected()
        }else{
            setError("Select a option")
        }
      };

      const handleQuit = () =>{
        setCurque(0)
        setQues()
      };
    
    return(
        <div className="q">
           <h1>Question No: {curque+1}</h1>
           <div className="oneque">
            <h2>{ques[curque].question}</h2>
            <div className="opt">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {
                options &&
                options.map((i)=>(
                <button 
                onClick={()=>handleCheck(i)}
                className={`singleOption ${selected&& hanndleSelect(i)}`}
                key={i}
                disabled={selected}
                >
                    {i}
                    </button>
                    ))
            }

            </div>
            <div className="controls">
                <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{width:185}}
                href="/"
                onClick={handleQuit}
                >
                    Quit
                </Button>
                <Button
                variant="contained"
                color="primary"
                size="large"
                style={{width:185}}
                onClick={handleNext}
                >
                    Next
                </Button>
            </div>
           </div>
        </div>
    )
}
export default Questions