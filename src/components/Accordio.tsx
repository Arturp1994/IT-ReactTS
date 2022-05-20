import React from "react";

function  Accordion() {
    return <div>
        <AccordionTitle />
        <AccordionBody />
    </div>
}

function  AccordionTitle() {
    console.log("AccordionTitle вывести")
    return(
        <h3>Menu</h3>
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