import React, {useState} from "react";

// type RatingPopsType = {
//     value: number
// }

export function UncontrolledRating() {
    let[value, setValue]=useState(2)

    return (
        <div>
            <Star selected={value > 0}/><button onClick={()=>{setValue(1)}}>x</button>
            <Star selected={value > 1}/><button onClick={()=>{setValue(2)}}>x</button>
            <Star selected={value > 2}/><button onClick={()=>{setValue(3)}}>x</button>
            <Star selected={value > 3}/><button onClick={()=>{setValue(4)}}>x</button>
            <Star selected={value > 4}/><button onClick={()=>{setValue(5)}}>x</button>
        </div>)
}

type StarProps = {
    selected: boolean
}

function Star(props: StarProps) {
    console.log("Star вызов")
    if (props.selected === true) {
        return <span><b>star </b></span>
    }
    else {
        return <span>star </span>
    }
    }
