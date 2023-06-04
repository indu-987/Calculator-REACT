import { useState } from 'react';
import "../style/Main.css"

function Mainpage() {

  let [result,setresult] = useState("")

   const clickHandler=( event) => {
    setresult(result.concat(event.target.value))
   }


let cleardisplay=()=>{
    setresult("")
}

let calculate=()=>{

    setresult(eval(result))
}


  return (
    
    <div className="calc">
      <input id="answer" type="text" placeholder='0' value={result} />
    <div className="content"  onClick={clickHandler}>
      <input  type="button" value="9"   />
      <input type="button" value="8"/>
      <input type="button" value="7"/>
      <input type="button" value="/"/>
      <input type="button" value="6"/>
      <input type="button" value="5"/>
      <input type="button" value="4"/>
      <input type="button" value="*"/>
      <input type="button" value="3"/>
      <input type="button" value="2"/>
      <input type="button" value="1"/>
      <input type="button" value="-"/>

      <input type="button" value="0"/>
      <input type="button" value="."/>
      <input type="button" value="+"/>
      <input type="button" value="%"/>
      </div>
      <div>
      <input id="cal" type="button" value="clear" onClick={cleardisplay} />
      <input   id="cal" type="button" value="=" onClick={calculate}/>
      </div>

      







    </div>
  );
}

export default Mainpage;
