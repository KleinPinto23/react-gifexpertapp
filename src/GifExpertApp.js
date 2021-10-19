import React, { useState } from 'react' //rafc tab para crear el esquelero con export
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Perú'] );

    return (
        <>

            <h2>GifExpertApp UVICAR</h2>

            <AddCategory setCategories = { setCategories } /> {/*Le mando la función para cambiar categories*/}

            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key = { category } //Hay que colocarle una key única o da error
                            category = { category }
                        />
                    ))
                }
            </ol>

        </>
    )
}
