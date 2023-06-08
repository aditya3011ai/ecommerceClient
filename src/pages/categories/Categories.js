import React from "react";
import './categories.scss'
import Product from './../../components/product/Product';
const Categories = () => {

  const categoryList = [
    {
      id:'comics',
      name:'Comics'
    },
    {
      id:'tv-shows',
      name:'Tv shows'
    },
    {
      id:'sports',
      name:'Sports'
    },
  ]
  const updateCategory = (e)=>{
    console.log(e.target.value);
  }
  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All the Print and Artwork</h2>
            <p>
              India's largest collection of wall posters for your bedroom,
              living room, kids room, kitchen and posters & art prints at
              highest quality lowest price guaranteed.
            </p>
            <div className="sort-by">
              <div className="sort-by-container">
                <h3 className="sort-by-text">Sort By</h3>
                <select className="select-sort-by" name="sort-by" id="sort-by">
                  <option value="relevance">Relevance</option>
                  <option value="newest-first">Newest First</option>
                  <option value="price-lth">Price - low to High</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categoryList.map((item)=>{
              return(
              <div className="filter-radio"key={item.id}>
              <input type="radio" id={item.id} name="category" value={item.id} onChange={updateCategory} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>)
            })}
            </div>
          </div>
          <div className="products-box">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
