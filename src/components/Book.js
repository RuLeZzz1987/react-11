import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';


const Title = styled.h3`
    font-size: 18px;
    color: aqua;
`;

const Available = styled.span`
    color: ${props => props.book.isAvailable ? 'green' : 'red'}
`;

const Book = ({book, handleAvailable}) => (
    <div>
        <Title>{book.name}</Title>
        <p>{book.id} <Available book={book}>{book.isAvailable ? '' : 'not'} available</Available></p>
        <button onClick={handleAvailable}>Toggle available</button>
    </div>
);

Book.propTypes = {
    handleAvailable: PropTypes.func.isRequired,
    book: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isAvailable: PropTypes.bool.isRequired
    }).isRequired
};

export default Book;
