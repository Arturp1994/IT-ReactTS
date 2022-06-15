import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordio";
import {Rating, RatingValueType} from "./components/Reting";
import OnOff from "./components/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordio";
import {UncontrolledRating} from "./components/UncontrolledReting";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
    <div className="App">
        <OnOff/>
        <OnOff/>
        <OnOff/>
        <OnOff/>
        {/*<PageTitle title={'Заголовок1'}/>*/}
        {/*<PageTitle title={'Заголовок2'}/>*/}

        <Accordion titleValue = {'Меню1'} collapsed={true}/>
        <UncontrolledAccordion titleValue = {'Меню2'} />

        <UncontrolledRating/>
        <Rating value = {ratingValue} onClick={setRatingValue}/>
        {/*<Rating value = {3}/>*/}
        {/*<Rating value = {4}/>*/}
        {/*<Rating value = {5}/>*/}
    </div>
  );
}

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    console.log("PageTitle выполни")
    return <h1>{props.title}</h1>
}

export default App;
