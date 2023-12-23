import { useState } from "react";
import "./Body.css";
import data from "./data.json";
export default function Body(){
    let [arr,setArray]=useState([]);
    let [val,setPara]=useState(0);
    function generateBtn(){
        setArray(
            data.filter((ele,index)=>{
                return index<val;
            })
        )
        if(val>58){
            alert("You have excced the limit"); 
        }
    }
    function paraChange(event){
        if(event.target.value<=0){ 
            setPara(0);
        }
        else{
            setPara(event.target.value);
        }
    }
    return(
        <main>
            <div className="container">
                <p>Paragraphs</p>
                <input type="number" value={val} onChange={paraChange} />
                <button onClick={generateBtn}>GENERATE</button>
            </div>
            <div className="displayInfo">
                {
                    arr.map((e)=>{
                        return(
                            <p>
                                {e.paragraph}
                            </p>
                        )
                    })
                }
            </div>
        </main>
    );
}