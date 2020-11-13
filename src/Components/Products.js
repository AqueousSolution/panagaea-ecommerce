import React,{useEffect} from 'react'
import { gql,useQuery } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const GET_PRODUCTS_QUERY = gql`
	query Products($currency: Currency) {
		products {
			id
			title
			image_url
			price(currency: $currency)
		}
		currency
	}
`



function Products({setCartItems,cartItems,active,setActive,currency,setCurrency,currencies,setCurrencies}) {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY, {variables: {currency: currency}});

    useEffect(() => {
        if (data) {
          setCurrencies(data.currency);   
        
          if (cartItems.length) {
            const cart = cartItems.map(cartItem => {
              const newProducts = data.products.filter(product => product.id === cartItem.id);
              cartItem.price = newProducts[0].price;
    
              return cartItem;
            });
    
            setCartItems(cart);
          }

        };
      }, [data])

  if (loading) return 'Loading Products...';
  if (error) return `Error! ${error.message}`;

  const toggleClass=()=>{
    setActive([true])
};
//Adds items/products to the cart
  const addToCart=(product)=>{
    toggleClass()

    const duplicates = cartItems.find(item=>item.id===product.id)
    if(duplicates){
        duplicates.quantity++
        setCartItems([...cartItems])
    }else{
        setCartItems([...cartItems,{id:product.id,title:product.title,
        image_url:product.image_url,quantity:1,price:product.price}])
    }
    console.log(cartItems)
}



    return (
        <div className="product-grid">
            
            {data.products.map(product=>(
            <div key={product.id} className="product-grid-item">
                <img src={product.image_url} alt="Classic Maintenance Set" 
                className="product-grid-item__image"/>
                <p className="product-grid-item__name">{product.title}</p>
            <p className="product-grid-item__price">{currency==='USD'?'$':currency}{product.price}</p>
                <a href="#" className="add-to-cart" onClick={(e)=>addToCart(product)}>Add To Cart</a>
                
            </div>
            ))}
        </div>
    )
}

export default graphql(GET_PRODUCTS_QUERY)(Products)
