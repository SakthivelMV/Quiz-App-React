import "./Quiz.css";
import { useEffect,useState } from "react";
import { CircularProgress } from "@mui/material";
import Questions from "../../Ques/Questions";

const Quiz = ({name,ques,score,setScore,setQues})=>{
    const [options,setOptions] = useState();
    const [curque,setCurque]=useState(0);
    
    
    useEffect(()=>{
        setOptions(ques && handleShuffle([ques[curque]?.correct_answer,
            ...ques[curque]?.incorrect_answers,
        ])
        );
    },[curque,ques]);
    console.log(ques)
    const handleShuffle = (optionss)=>{
        return optionss.sort(()=>Math.random()-0.5);
    };
    return(
    <div className="quiz">
        <span className="stitle">Welcome Dear,{name}</span>
        {ques?(
        <>
        <div className="info">
            <span>{ques[curque].category}</span>
              <span>
                score:{score}
              </span>
        </div>
        <Questions
        curque={curque}
        setCurque={setCurque}
        ques={ques}
        score={score}
        options={options}
        correct={ques[curque]?.correct_answer}
        setScore={setScore}
        setQues={setQues}
        />
        </>
        ):(
        <CircularProgress style={{margin:100}}
        color="inherit"
        size={150}
        thickness={1}
        />
        )}
    </div>
    )
}
export default Quiz