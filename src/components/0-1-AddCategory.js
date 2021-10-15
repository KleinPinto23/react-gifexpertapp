import React, { useState } from 'react'

export const AddCategory = () => {
    
    const [inputValue, setInputValue] = useState('Buscando...')

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue( e.target.value ); //Le mandamos el nuevo valor
    }

    const handleSubmit = (e) => {

        e.preventDefault();//Previene el comportamiento por defecto del formulario, de cargar todo
        console.log('Submit hecho')

    }
    
    return ( //Como le mandamos form no es necesario el fragment o etiqueta vacía, porque se envía UN elemento
        <form onSubmit = { handleSubmit } > 
            {/*<h1> { inputValue } </h1>//Captura contantemente el valor de la caja de texto, actualizado*/}
            
            <input
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange } //Si no se coloca esto no cambia el input
            />

        </form>
    )
}
