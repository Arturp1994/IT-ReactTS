import React from "react";

type AccordionProps = {
    titleValue: string
}

function  Accordion(props: AccordionProps) {
    return <div>
        <AccordionTitle title = {props.titleValue}/>
        <AccordionBody />
    </div>
}
type AccordionTitleProps = {
    title: string
}

function  AccordionTitle(props: AccordionTitleProps) {
    console.log("AccordionTitle вывести")
    return(
        <h3>{props.title}</h3>
    )
}

function  AccordionBody() {
    console.log("AccordionBody вывести")
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}
export default Accordion;