import React from "react";
import myImage from "../../assest/zarebin_image.gif"
const Home= () => {
    return (
        <div>
            <div>I am home samane test1</div>
            <img src={myImage}/>
            <button onClick={()=>console.log("hello world")}>press me</button>
        </div>
    )
}
export default Home;