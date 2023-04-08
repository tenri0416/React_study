// const { useState } = require("react")
import ChilArea from "@/Components/ChildArea";
import { useState,memo,useCallback } from "react";


const App=memo(()=>{
    const[text,setText]=useState("");
    const[open,setOpen]=useState(false);
    console.log('App');

    const onChangeText=(e)=> setText(e.target.value);

    const onCLickClose=useCallback(()=>setOpen(false),[setOpen]);


    const onClickOpen=()=>setOpen(!open);

    return(
        <>
        <div className="text-center">
           <input className="border-2 border-blue-400" value={text} onChange={onChangeText} />
           <br/>
           <br/>
           <button className="border-2 border-gray-200 bg-sky-100 p-1 hover:bg-sky-300" onClick={onClickOpen}>表示</button>
           <ChilArea open={open} onCLick={onCLickClose}/>
        </div>
        </>
    )
});
export default App;
