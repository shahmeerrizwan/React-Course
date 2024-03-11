import Cards from "../Cards/index";
import { useEffect, useState } from "react";
import Navbar from "../../Navbar";
// import DetailScreen from "../../../Screen/DetailScreen";
import Footer from "../../Footer";
import Category from "../../Category";


function DashBoard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then(res => {
                console.log(res);
                setProducts(res.products);
            })
    }

    return (
        <div className="App">
            <div className="App-header">

                <Navbar />

                <Category /><br /><br />

                {products.map(item => {
                    const { price, description, images, title, id, brand } = item
                    return <Cards key={id} price={price} description={description} images={images} brand={brand} title={title} id={id} />

                })} <br />

            </div>

            <Footer />

        </div>
    )
}

export default DashBoard;