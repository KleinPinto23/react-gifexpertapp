
export const getGifs = async ( category ) => { //No olvidar el export cuando se vaya a leer en otro archivo

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

    return gifs;

}