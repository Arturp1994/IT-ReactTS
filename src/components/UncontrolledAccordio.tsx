import React, {useState} from "react";

type AccordionProps = {
    titleValue: string
    // collapsed: boolean
}


function UncontrolledAccordion(props: AccordionProps) {

    let [collapsed, setCollapsed] = useState(false);

        return <div>
            <AccordionTitle title={props.titleValue}/> <button onClick={()=> {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
            {/*краткое написание условий с true и false*/}
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
export default UncontrolledAccordion;