const getImagen = async () => {

    try {
        const apiKey = 'BhVkS6kEOuXj1bTHSI9KN1FzBFyWC1df';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data: { images: { original: { url } } } } = await resp.json();

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }

    catch (error) {
        //Manejo del error 
        console.error(error)
    }
}

getImagen()






