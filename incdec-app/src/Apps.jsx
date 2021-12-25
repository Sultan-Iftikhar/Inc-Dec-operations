import React,{useState} from "react";
// import AddIcon from "@mui/icons-material/Add";
import './App.css';
const Apps = () =>{
    const [num,setNum] = useState(0);
    const incNum = ()=>{
        setNum(num+1);
    }
    const decNum =()=>{
        if(num>0){
            setNum(num-1);
        }
        else{
            alert("You Reach Last Limit");
        }
    }
    return(
        <>
            <div className="main_div">
                <div className="card_div">
                    <div className="h1_div">
                        <h1>{num}</h1>
                    </div>
                        <div className="btn_div">
                            <button onClick={incNum}>
                                INC
                            </button>
                            <button onClick={decNum}>
                                DEC
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Apps;