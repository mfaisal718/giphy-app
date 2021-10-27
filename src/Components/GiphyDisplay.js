// We Must Import the React Library
import React from "react";


// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const GiphyDisplay = (props) => {
    const { giphy } = props;

    const loaded = () => {
        return (
            <img src={giphy.data.images.original.url} alt="gifs" />
        );
    }
    const loading = () => {
        return <h1> Click Me For a Good Time </h1>
    }

    return giphy ? loaded() : loading();
};

export default GiphyDisplay;