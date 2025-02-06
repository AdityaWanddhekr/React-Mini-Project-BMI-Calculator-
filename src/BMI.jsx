import { useState } from "react";
import styles from "./BMI.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function BMI(){

  let[bmi,setBMI]=useState(0);
  let[weight,setWeight]=useState(0);
  let[height,setHeight]=useState(0);

  let changeWeight=(e)=>{
    setWeight(e.target.value);
  }

  let changeHeight=(e)=>{
    setHeight(e.target.value);
  }

  let calculateBMI=()=>{
     setBMI(bmi=>Math.round((weight/height/height)*1000));
  }
  return(
    <>  
     <div className={`${styles["middle"]}`}>
     
     <div className={`${styles["box"]}`}>
         <h1>Calculate BMI</h1>
         <input type="text" className={`${styles["inp"]}`} placeholder="Enter Weight (kg)" onChange={changeWeight}></input>
         <input type="text" className={`${styles["inp1"]}`} placeholder="Enter Height (cm)" onChange={changeHeight}></input>
         <button type="button" className={`${styles["btn"]}`} onClick={calculateBMI}>Claculate</button>
         <div className={`${styles["msg"]}`}>
         <h1>BMI is : {bmi}</h1>
         </div>
         
     </div>
  </div>

    </>
    
  )
}
