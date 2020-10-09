import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const GifGrid = ({ category }) => {
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url =
            'http://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=R2bMUQM52FDasi6OaiYmssGjk1Y1jjfq';
        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        console.log(gifs);
    };

    return <>{category}</>;
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
