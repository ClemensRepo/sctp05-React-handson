import React from "react"
import mickey from "./assets/Mickey_Mouse.jpg"
import mini from "./assets/Mini_Mouse.jpg"


function sayGoodBye()  {
    return "Goodbye";
}

function displayHeader() {
    return (
        <h2>About Me</h2>
    );
}

function ImageFrame() {
    return(
        <img src={mickey} alt="Mickey_Mouse"/>
    );
}

function BorderedImageFrame(props) {
    return (
        <img src={props.img} alt="Mini_Mouse"/>
    );
}

function DisplayMessage(props) {
    return (
        <div>{props.whatever_message}</div>
    );
}

function Shout(props) {
    return(
        <div>{props.msg.toUpperCase()}</div>
    );
}

function SumOfTwo(props) {
    return (
        <div>{props.integer1 + props.integer2}</div>
    );
}

function App() {
    return (
        <>
        <h1>Hello World</h1>
        <p>{sayGoodBye()}</p>
        {displayHeader()}
        <ImageFrame/>
        <DisplayMessage whatever_message="Hello There"/>
        <Shout msg="good afternoon!"/>
        <SumOfTwo integer1={2} integer2={3}/>
        <SumOfTwo integer1={10} integer2={5}/>
        <BorderedImageFrame img={mini}/>
        </>
    );
}



export default App;