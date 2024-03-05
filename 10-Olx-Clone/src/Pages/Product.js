import React from 'react'
import Cards from '../Card/Cards'
import { useEffect, useState } from "react";




export default function Product() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then(res => {

                setProducts(res.products);
            })
    }

    return (
        <div>
            {products.map(item => (
                <Cards
                    key={item.id}
                    price={item.price}
                    description={item.description}
                    images={item.images}
                    brand={item.brand}
                    title={item.title}
                    id={item.id}
                />
            ))}
        </div>
    )
}
