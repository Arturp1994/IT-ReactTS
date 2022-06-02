import React from "react";

type RatingPopsType = {
    value: number
}

export function Rating(props: RatingPopsType) {
    console.log('Rating вызов')

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
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
