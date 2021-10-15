import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => { //Efectos no pueden ser ASYNC porque esperan algo síncrono
        
        getGifs( category )
            .then( imgs => {

                setTimeout(() => {
                
                    setstate({
                        data: imgs,
                        loading: false
                    });

                }, 1000);
                
            } )

    }, [ category ] )

    /*setTimeout(() => {
        setstate({
            data: [1,2,3],
            loading: false
        });
    }, 3000);*/

    return state; //{data:[], loading: true}

}