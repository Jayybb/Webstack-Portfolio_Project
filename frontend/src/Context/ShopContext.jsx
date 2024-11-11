import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 301; index++) { // Assuming 300 products for initialization
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_product, setAll_Product] = useState([]);

    // Fetch all products on component mount
    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => {
                if (data.success) setAll_Product(data.products);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Fetch cart items on component mount if the user is authenticated
    useEffect(() => {
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': authToken,  // Corrected here
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}) 
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) setCartItems(data.cartItems);
            })
            .catch((error) => console.error("Error fetching cart items:", error));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId: itemId }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.error("Error adding item to cart:", error));
        }
    };

    const removeFromCart = (itemId) => {
        const authToken = localStorage.getItem('auth-token');
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
        }));

        if (authToken) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId: itemId }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.error("Error removing item from cart:", error));
        }
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
