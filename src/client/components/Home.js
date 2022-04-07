import React from "react";
import myImage from "../../assest/zarebin_image.gif";
import myPng from "../../assest/flower.png"
const Home= () => {
    return (
        <div>
            <div>I am home samane</div>
            <img src={myPng}/>
            <img src={myImage}/>
            <button onClick={()=>console.log("hello world")}>press me</button>
        </div>
    )
}
export default Home;