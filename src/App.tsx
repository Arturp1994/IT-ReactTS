import React from 'react';
import './App.css';
import Accordion from "./components/Accordio";
import {Rating} from "./components/Reting";

function App() {
  return (
    <div className="App">
        <PageTitle title={'Заголовок1'}/>
        <PageTitle title={'Заголовок2'}/>
        <Rating value = {3}/>
        <Accordion titleValue = {'Меню1'}/>
        <Accordion titleValue = {'Меню2'}/>
        <Rating value = {1}/>
        <Rating value = {5}/>
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
