import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Artist from './components/artist';
import Banner from './components/banner';
import ArtistList from './components/artistList';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {
    return (
        <div>
            
            
            <BrowserRouter>
            <div>
            <Route path='/' component={Home}/>
            <Route path='/artist/:artistid' component={Artist}/>
            

            </div>
            </BrowserRouter>

            </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));