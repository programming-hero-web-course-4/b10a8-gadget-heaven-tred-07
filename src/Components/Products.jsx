import Product from './Product';
const Products = ({products}) => {
    // console.log(products);
    return (
        <div className='flex flex-wrap justify-evenly'>
            {
                products.map(product=>
                    <Product key={product.product_id} product={product}></Product>
                )
            }
        </div>
    );
};

export default Products;