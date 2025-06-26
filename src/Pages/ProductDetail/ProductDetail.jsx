import React from 'react'
import classes from './ProductDetail.module.css'
import LayOut from './../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from  "./../../Components/Product/ProductCard"
import { useEffect, useState } from 'react'
import Loader from '../../Components/Loader/Loader.jsx'
import {productUrl}from  "../../Api/endPoints.js"



function ProductDetail() {
  // Extracting product ID from URL
  const { productID } = useParams();

  // State to hold product data and loading status
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  // Fetch product data when the component mounts or when productID changes
  React.useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${productUrl}/products/${productID}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productID]);

  return (
    <LayOut>
      {loading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true} // Show full description
          renderAdd={true} // Show "Add to Basket" button
        />
      )}
    </LayOut>
  );
}

export default ProductDetail