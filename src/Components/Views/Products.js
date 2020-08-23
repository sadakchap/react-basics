import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';

const Products = () => {

    const { id } = useParams();
    
    const url = `https://5f41ef52d4b4790016fd751c.mockapi.io/products/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    });
    let content = null;

    
    useEffect(() => {        
        
        setProduct({
            loading: true,
            data: null,
            error: false
        });

        axios.get(url)
            .then((res) => {
                setProduct({
                    loading: false,
                    data: res.data,
                    error: false
                })
            })
            .catch((err) => {
                console.log('ERROR WHILE FETCHING DATA');
                console.log(err);
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                });
            });
    }, [url]);

    if(product.error){
        content = <p>There was an Error</p>
    }

    if(product.loading){
        content = <Loader />
    }

    if(product.data){
        content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">{ product.data.name }</h1>
                <div>
                    <img src={product.data.image} alt={product.data.name} />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ { product.data.price}
                </div>
                <div className="">
                    {product.data.description}
                </div>
            </div>
    }

    return (
        <div>
            { content }
        </div>
    )

}

export default Products
