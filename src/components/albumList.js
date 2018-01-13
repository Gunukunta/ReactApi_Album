import React from 'react';
import { Link } from 'react-router-dom';


const ShowAlbumList = (props) => {

    const Showlist = ({ allAlbums }) => {
        if (allAlbums) {
            return allAlbums.map((item, index) => {

                return (
                        <tr key={index}>
                            <td className=''>{item.albumId}</td>
                            <td className=''>{item.title}</td>
                            <td className=''>{item.year}</td>
                            <td className=''>{item.cover}</td>
                            <td className=''>{item.price}</td>
                        </tr>

                )
            })
        }
    }

    return (
        <div className='grid-desc'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Album Id</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Cover</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Showlist(props)}
                </tbody>
            </table>

        </div>

    )



}
export default ShowAlbumList;
/*
function add(a,b){
    return a+b
}

add(1,2)
*/