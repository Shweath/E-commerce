import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadecrum from '../components/Breadecrums/Breadecrum';
import Productdisplay from '../components/ProductDispaly/Productdisplay';
import DescriptionBox from '../components/Description Box/DescriptionBox';
import RelatedProducts from '../components/RelatedProduct/RelatedProducts';

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  
  if (!allProducts) {
    return <h2>Loading products...</h2>;
  }

  const product = allProducts.find((e) => e.id === Number(productId));

  if (!product) {
    return <h2>Product Not Found (ID: {productId})</h2>;
  }

  return (
    <div>
      <Breadecrum product={product} />
      <Productdisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;