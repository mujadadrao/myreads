import React from "react";
import PropTypes from "prop-types";

const BookDetails = (props) => {
    return (
        <div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors && props.authors.join(', ')}</div>
        </div>
    );
}

BookDetails.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
}

export default BookDetails;