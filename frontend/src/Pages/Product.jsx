import React, { useContext } from 'react'
import { ShopContext } from '../Contex/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptipionBox from '../Components/DescriptionBox/DescriptipionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div >
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptipionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
