import React from 'react';
import { Link } from 'react-router-dom';


const ArtistList = (props) => {

    const list = ({ allArtists }) => {
        if (allArtists) {
            return allArtists.map((item) => {

                return (
                    <Link key={item.id} to={`/artist/${item.id}`}
                    className="maintList">
                     <div>{item.name}</div>
                    </Link>

                )
            })
        }
    }

    return (
        <div>
    
            {list(props)}
            </div>
        
    )



}
export default ArtistList;
/*
function add(a,b){
    return a+b
}

add(1,2)
*/