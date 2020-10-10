import PropTypes from 'prop-types';
import React from 'react';

const GifGridItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    img: PropTypes.object,
};

export default GifGridItem;
