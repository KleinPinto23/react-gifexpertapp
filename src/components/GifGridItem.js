import React from 'react'


export const GifGridItem = ( {id, title, url} ) => { //En vez de img se suele poner props

    console.log( id, title, url );

    return (
        <div className = "card animate__animated animate__fadeIn">
            <img src = { url } alt = { title } />
            <p> { title } </p>
        </div>
    )
}
