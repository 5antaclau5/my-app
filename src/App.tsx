import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentExcercise from './pages/excercise';
import Hello from './components/Hello';
import Title from './components/Title';
import { PackingList, PackingListV2 } from './components/condition';
import { ListPeopleV1, ListPeopleV2 } from './components/lists';
import { FilterPeople } from './components/filtering';
import Button from './Event/button';
import { Toolber } from './Event/propagation';
import { Gallery } from './state/';
import { Gallery1 } from './state/Gallery';
import Square from './components/ex2/Square';
import StateExcercise from './pages/excercise2';
import { Counter, EditCounter, EditCounterV1, Post, RequestTracker, StateList } from './state/post';
import { BrowserRouter } from 'react-router-dom';
import { AppRouters } from './router';

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <ComponentExcercise ComponentName={<Hello name={"'T O N K L A"} />} />
    //   </header>
    // </div>



    // <div className="App">
    //   <header className="App-header">
    //     {/* <StateExcercise /> */}
    //     {/* <Title ComponentName="a">TEST</Title> */}
    //     {/* <PackingList /> */}
    //     {/* <PackingListV2 /> */}
    //     {/* <FilterPeople /> */}
    //     {/* <ListPeopleV1 /> */}
    //     {/* <ListPeopleV2 /> */}
    //     {/* <Toolber/>
    //     <Button></Button> */}
    //     {/* <Gallery/> */}
    //     {/* <Gallery1/> */}
    //     <StateList/>
    //   </header>
    // </div>

    <div className="App">
     <BrowserRouter>
     <AppRouters></AppRouters>
     </BrowserRouter>
    </div>
  );
}

export default App;
