import React, { useState } from 'react' //rafc tab para crear el esquelero con export
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Saint Seiya','Samurai X','Dragon Ball'] );

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Shingeki No Kyojin'] );
    //     //setCategories( catg => [...catg, 'Shingeki No Kyojin'] )//También válido
    // }

    return (
        <>

            <h2>GifExpertApp</h2>

            <AddCategory setCategories = { setCategories } /> {/*Le mando la función para cambiar categories*/}

            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> { category } </li>;
                    })
                }
            </ol>

        </>
    )
}
