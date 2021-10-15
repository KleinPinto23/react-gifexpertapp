import React, { useState } from 'react' //rafc tab para crear el esquelero con export

export const GifExpertApp = () => {

    //const categories = ['Saint Seiya','Samurai X','Dragon Ball'];
    //Para aumentar elementos no es útil porque es una constante, no debe modificarse

    const [categories, setCategories] = useState(['Saint Seiya','Samurai X','Dragon Ball']);

    const handleAdd = () => {

        setCategories( [...categories, 'Shingeki No Kyojin'] );
        //setCategories( catg => [...catg, 'Shingeki No Kyojin'] )//También válido

    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <ol>
                {
                    categories.map( category  => {
                        return <li key={ category }> { category } </li>;
                    })
                }
            </ol>

            <button onClick = {handleAdd}>Agregar</button>

        </>
    )
}
