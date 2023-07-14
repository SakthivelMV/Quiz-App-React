import { Button } from "@mui/material";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "./Result.css";
const Result=({name,score})=>{
    const history = useNavigate;
    useEffect(()=>{
        if(!name){
            history('/');
        }
    },[name,history]);
    return(
        <div className="res">
            <span className="title">Final score = {score}</span>
            <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{alignSelf:"center", marginTop:20}}
            href="/"
            >Home Page</Button>
        </div>
    )
}
export default Result;