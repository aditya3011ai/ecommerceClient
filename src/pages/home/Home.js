import React from "react";
import Hero from "../../components/hero/Hero";
import "./home.scss";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";
import { useState,useEffect } from "react";
// PPage 1:35
const Home = () => {
  const [topProducts, setTopProducts] = useState(null);
  const [categories, setCategories] = useState();

  const fetchData = async () => {
    const categoryResponse = await axiosClient.get(
      "/categories/?populate=image"
    );
    const topProductsResponse = await axiosClient.get(
      "/products?populate=image"
    );
    setCategories(categoryResponse.data.data);
    setTopProducts(topProductsResponse.data.data);
  };
  useEffect(() => {
    fetchData();
  }, [])
  
  
  return (
    <div className="Home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="subheading">
            Shop from the best, our Film and TV Posters Collection.
          </p>
        </div>
        <div className="content">
          {categories?.map((category) => (
            <Category key={category.id} category={category} />))}
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <h2 className="heading">All Posters</h2>
          <p className="subheading">All New Designs, Same Old Details.</p>
        </div>
        <div className="content">
        {topProducts?.map((product) => (
                        <Product key={product.id} product={product} />
        ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
