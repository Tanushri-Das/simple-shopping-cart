// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../../redux/cartSlice';
// import Swal from 'sweetalert2';
// import "./ProductList.css";

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.cart);
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('products.json');
//         const data = await response.json();
//         setProductList(data);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product) => {
//     const existingProduct = products.find((item) => item.id === product.id);

//     if (existingProduct) {
//       Swal.fire({
//         position: 'top-end',
//         icon: 'error',
//         title: 'This product is already in your cart. Please choose a different product.',
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     } else {
//       dispatch(addToCart(product));

//       Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Product added successfully',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   return (
//     <div className="products-list">
//       <h2 className="products-list-text">Product List</h2>
//       <div className="products">
//         {productList.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.img} alt={product.name} className="product-img" />
//             <div>
//               <h2 className="product-name">{product.name}</h2>
//               <p className="product-price">${product.price}</p>
//             </div>
//             <div className="btn-div">
//               <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;












import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Swal from 'sweetalert2';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleAddToCart = (product) => {
    const existingProduct = products.find((item) => item.id === product.id);

    if (existingProduct) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'This product is already in your cart. Please choose a different product.',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      dispatch(addToCart(product));

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
        <div className="spinner"></div>
      ) : (
        <div className="products">
          {productList.map((product) => (
            <div key={product.id} className="product">
              <img src={product.img} alt={product.name} className="product-img" />
              <div className='product-info'>
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price}</p>
              </div>
              <div className="btn-div">
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


