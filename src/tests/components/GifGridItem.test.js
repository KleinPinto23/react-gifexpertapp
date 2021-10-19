import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem/>', () => {
    
    const title = 'Un título';
    const url   = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title = {title} url = {url} /> )

    test('Debe mostrar el componente correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe de tener un parrafo con el title ', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);

    })


    test('Debe de tener la imagen igual al url y alt de los props ', () => {

        const img = wrapper.find('img');
        //console.log( img.props().src );
        //console.log( img.prop('src') ); Igual a la anterior cuando solo se quiere una propiedad

        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );

    })

    test('Debe de tener animate__fadeOut', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeOut') ).toBe( true ); //not.toBe es para negación
        
    })
    
    
    
})