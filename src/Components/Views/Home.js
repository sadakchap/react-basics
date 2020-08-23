import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Loader from '../Loader';
import ProductCard from '../ProductCard';
// import HelloWorld from '../HelloWorld'

const Home = () => {

    const url = `https://5f41ef52d4b4790016fd751c.mockapi.io/products?page=1&limit=10`;
    const [content, setContent] = useState({
        data: null,
        loading: false,
        error: false
    });

    let displayContent;

    useEffect(() => {
        setContent({
            data: null,
            loading: true,
            error: false
        });

        axios.get(url)
            .then((res) => {
                setContent({
                    data: res.data,
                    loading: false,
                    error: false
                });
            })
            .catch((err) => {
                setContent({
                    data: null,
                    loading: false,
                    error: true
                });
            })

    }, [url]);

    if(content.loading){
        displayContent = <Loader></Loader>
    }

    if(content.error){
        displayContent = <p>There was an error</p>
    }

    if(content.data){
        displayContent = <div>
            <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
            <div>
                { content.data.map((product) => 
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                )}
            </div>
        </div>
    }

    return (
        <div>
            { displayContent }
        </div>
    )
}

export default Home
