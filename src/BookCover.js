import React from "react";
import PropTypes from "prop-types";

const BookCover = (props) => {
    return (
        <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.imageURL})`
        }}/>
    );
}

BookCover.propTypes = {
    imageURL: PropTypes.string,
}

export default BookCover;