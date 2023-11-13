import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Swal from 'sweetalert2';
import './ProductList.css';

const ProductList = () => {
  // Access the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // Retrieve the products in the cart from the Redux store
  const products = useSelector((state) => state.cart);

  // State to manage the list of products and loading state
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch product data from 'products.json' when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('products.json');
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        // Set loading to false after fetch completes (whether success or error)
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle the "Add to Cart" button click
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = products.find((item) => item.id === product.id);

    if (existingProduct) {
      // Display an error message if the product is already in the cart
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'This product is already in your cart. Please choose a different product.',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      // Dispatch the addToCart action to add the product to the cart
      dispatch(addToCart(product));

      // Display a success message using SweetAlert
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product added successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="products-list">
      <h2 className="products-list-text">Product List</h2>
      {loading ? (
        // Display a loading spinner while fetching product data
        <div className="spinner"></div>
      ) : (
        // Render the list of products when the data is loaded
        <div className="products">
          {productList.map((product) => (
            <div key={product.id} className="product">
              <img src={product.img} alt={product.name} className="product-img" />
              <div className='product-info'>
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price}</p>
              </div>
              <div className="btn-div">
                {/* Add to Cart button with onClick handler */}
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
