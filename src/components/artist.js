import React,{component} from 'react';
import ReactDom from 'react-dom';
import{BrowserRouter, Router} from 'react-router-dom';
import Banner from './banner';
import ShowAlbumList from './albumList';


const REQ_ARTIST = 'http://localhost:5600/artists';



class Artist extends React.Component{
    constructor(props){
     super(props)

     this.state={

        artist:''
     }
    }

    componentDidMount(){
        console.log(this.props.match.params.artistid)
        fetch(`${REQ_ARTIST}/${this.props.match.params.artistid}`,
         {method:'GET'})
        .then(response=>response.json())
        .then(json=>this.setState({
            artist:json
        }))

    }
    render(){
    return(
        <div>
                
                <div className='mainList-title'>{this.state.artist.name}</div>
                <div className='mainList-desc'>{this.state.artist.bio}</div>

                <ShowAlbumList allAlbums = {this.state.artist.albums} />

                
            </div>
    )
}
}

export default Artist;
