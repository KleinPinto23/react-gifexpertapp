import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => { //Recibo parámetro y desestructuro de props
    
    //const [inputValue, setInputValue] = useState('Buscando...')
    const [inputValue, setInputValue] = useState('') //Se debe poner el string así sea vacío o da undefined

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue( e.target.value ); //Le mandamos el nuevo valor
    }

    const handleSubmit = (e) => {

        e.preventDefault();//Previene el comportamiento por defecto del formulario, de cargar todo

        if( inputValue.trim().length > 2 ){
            setCategories( catg => [inputValue,...catg] ); //Recién ejecutaamos y al otro componente le agregamos el nuevo valor
            setInputValue(''); //Reseteamos el input para que esté vacío
        } else{
            console.log('Ingrese un texto de más de 2 caracteres.')
        }

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

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired //Se debe enviar, sale warning si no se envía
}