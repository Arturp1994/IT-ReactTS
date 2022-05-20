import React from "react";

type RatingPopsType = {
    value: number
}

export function Rating(props: RatingPopsType) {
    console.log('Rating вызов')
    if (props.value === 1)
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>)
    if (props.value === 2)
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>)
    if (props.value === 3)
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>)
    if (props.value === 4)
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>)
    if (props.value === 5)
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>)
    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
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
