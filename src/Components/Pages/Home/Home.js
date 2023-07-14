import "./Home.css"
import { useState } from "react";
import {useNavigate} from "react-router";
import TextField from '@mui/material/TextField';
import { Button, MenuItem } from "@mui/material";
import Categories from "../../../Data/Categories";
import ErrorMessage from "../../Errormess";


function Home({name,setName,fetchQues}){
    const [category,setCategory]=useState("")
    const [error,setError]=useState("")
    const history = useNavigate();
    const handleSubmit = ()=>{
        if (!category||!name){
            setError(true);
            return;
        }else{
            setError(false);
            fetchQues(category);
            history("/quiz")
        }
    }
    return(
        <div className="content">
            <div className="settings">
                <span style={{fontSize:30}}>Let's Begin</span>
   <div className="settings_select">
    {error && <ErrorMessage>Fill all Fields</ErrorMessage>}
    <TextField label="Enter Name" Variant="outlined" style={{ marginBottom: 25 }}
    onChange={(e)=>setName(e.target.value)}/>
    <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
          >
            {
                Categories.map((cate)=>(
                    <MenuItem key={cate.category} value = {cate.value}>
                        {cate.category}

                    </MenuItem>
                ))
            }
          </TextField>
          <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
            Start
          </Button>
   </div>
            </div>
        </div>
    )
}
export default Home