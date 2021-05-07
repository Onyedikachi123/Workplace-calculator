import React,{useEffect, useState} from "react";
import Searching from '../containers/SearchingPage/Searching'
import Summary from './Summary/Summary';

import {BrowserRouter as Router,
Route  } from "react-router-dom";

const Result = props => {
    const [showRes, setShowres] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setShowres(true)
        },5000)
    });
   return (
    <Router>
        <Route path="/search" exact render={()=> showRes ? <Summary/> : <Searching/>}/>
    </Router>
)};

export default Result;