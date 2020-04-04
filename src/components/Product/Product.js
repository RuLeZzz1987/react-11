import React from "react";
import PropTypes from 'prop-types';
import styles from './Product.module.css';

function Product({imageUrl, name, price, quantity}) {
    return (
        <div className={styles.root}>
            <img src={imageUrl} width={640} alt={name}/>
            <h2 className={styles.name}>{name}</h2>
            <p>Price {price}$</p>
            <p className="my-class">
                Quantity: <span className={quantity > 0 ? styles.inStock : styles.notInStock}>{quantity}</span>
            </p>
        </div>
    );
}

Product.defaultProps = {
    imageUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640'
};

Product.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired
};

export default Product;


// const image = React.createElement('img', {
//     src: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//     alt: 'Tacos With Lime',
//     width: 640,
//     children: []
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price 10.99$');

// const product = React.createElement('div', null, image, title, price);

// const linkWithJSX = (
//     <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
//         Ссылка на reactjs.org
//     </a>
// );