import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category } ) => {

    const {data:images, loading} = useFetchGifs( category );
        
    /*const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( setImages )
    }, [ category ] )*/

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            
            { loading && <p className="animate__animated animate__flash">Cargando...</p> } {/*Solo evalua el true, si es falso no hace nada*/}

            <div className = "card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem
                            key = { img.id }
                            { ...img }
                        />
                    ))
                }            

            </div>
        </>
    )
}
