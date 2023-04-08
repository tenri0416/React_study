import {memo} from "react"
const ChilArea= memo(({open,onCLick})=>{

    const date=[...Array(2000).keys()];
    console.log("ChildAreaがレンタリングされた!!");
    date.forEach(()=>{
        console.log("---");
    })
    console.log(date);
    return(
        <>
        {open ? (
        <div className="bg-yellow-200 h-48 w-100%">
            <p>子コンポーネント</p>
            <button onClick={onCLick}>閉じる</button>
        </div>

        ):null}
        </>
    );
});
export default ChilArea;
