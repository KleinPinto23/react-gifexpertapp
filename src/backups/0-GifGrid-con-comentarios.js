import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
//useEffect permite ejecutar cierto código de manera condicional

export const GifGrid = ( { category } ) => {

    //const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category ) //Retorna una promesa en la función que guardamos en el otro archivo
            //.then( imgs => setImages( imgs ) )
            .then( setImages )//Es lo mismo que la línea de arriba
    }, [ category ] )
    //Con este segundo parámetro me aseguro que la función se lance una única vez al iniciar si pongo [] vacío
    //Si pongo [category] le digo que si cambia la categoría debe ejecutarse


/*     const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=txatLeZ7TRcknO80FAgP80FYZygDxp3f`;
        //Usamos baticks o las comillas chuecas para combinar con constantes JSX
        //El encodeURI es para darle buen formato, no complicarse con espacios, etc
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //El signo de interrogación es para preguntar que si vienen las imágenes recién lo utilice
            }
        });

        console.log(gifs);
        setImages( gifs );

    } Saco la función a la carpeta helpers para que solo esté en este archivo los componentes*/

    return (
        <>
            <h3> { category } </h3>
            <div className = "card-grid">
                
                {
                    images.map( img => ( //Desestructuramos para obtener de frente el id y title sin pone img.id img.title
                        <GifGridItem
                            key = { img.id }
                            { ...img }
                        />
                    ))//Hay un return implícito
                }            

                {/*<h3> { count } </h3>
                <button onClick = { () => setCount( count + 1 ) }></button>*/}
            </div>
        </>
    )
}
