import React from 'react';
import PropTypes from 'prop-types';

function Img({ className, src, alt }) {
    return <img className={className} src={src} alt={alt} />;
}

Img.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Img;
