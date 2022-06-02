import React from 'react';
import './App.css';
import Accordion from "./components/Accordio";
import {Rating} from "./components/Reting";

function App() {
  return (
    <div className="App">
        <PageTitle title={'Заголовок1'}/>
        <PageTitle title={'Заголовок2'}/>

        <Accordion titleValue = {'Меню1'} collapsed ={true}/>
        <Accordion titleValue = {'Меню2'} collapsed ={false}/>

        <Rating value = {1}/>
        <Rating value = {2}/>
        <Rating value = {3}/>
        <Rating value = {4}/>
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
