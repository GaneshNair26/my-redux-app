import React from 'react';
import Button from '../Button/Button'
import Lyrics from './web/lyrics/LyricsContainer'
import Search from "./web/search/SearchContainer";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <h1>HOMEPAGE</h1>
            <Button buttonText="Button with" backgroundColor={""} flag={1} color={"blue"} 
     > Signout</Button>
           <h1>Lyrics Search</h1>
      <Search />
      <Lyrics />
       </div>
    );
}


export default Navigation;