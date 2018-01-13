import React,{component} from 'react';
import ReactDom from 'react-dom';
import{BrowserRouter, Router} from 'react-router-dom';
import Banner from './banner';
import ArtistList from './artistList';

const URL_ARTIST = 'http://localhost:5600/artists';

class Home extends React.Component{
    constructor(props){
     super(props)

     this.state={

        artists:''
     }
    }

    componentDidMount(){

        fetch(URL_ARTIST, {method:'GET'})
        .then(response=>response.json()).then(json=>this.setState({
            artists:json
        }))

    }
    render(){
    return(
        <div>
                
                <Banner />
                <ArtistList allArtists = {this.state.artists} />
            </div>
    )
}
}

export default Home;
