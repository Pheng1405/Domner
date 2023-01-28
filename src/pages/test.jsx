import { useState } from "react";
import SmallSlider from "../components/Small-Slider/SmallSlider";

const Test = () =>{
    const [isClick, setIsClick] = useState(false);
    const [status, setStatus] = useState("");

    const handleClick = () => {
        isClick 
            ? setStatus("Yooo, wass up why u clicked the button ?")
            : setStatus("click again btn change to false");
        
        
        console.log(isClick);
        console.log(status)

        setIsClick(!isClick);
    }

   return(
    <button onClick={()=>{handleClick()}}>Click </button>
   )
}


export default Test;