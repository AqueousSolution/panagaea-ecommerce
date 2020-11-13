import './App.css';
import Products from './Components/Products';
import Nav from './Components/Nav'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useState } from 'react';


const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache()
});

function App() {

  const[cartItems,setCartItems] = useState([])
  const[active,setActive] = useState(false)
  const [currency, setCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState([]);

 
  //deletes item from the cart
  const removeFromCart=(productID)=>{
   const updatedCart = cartItems.filter(item=>item.id!==productID)
   setCartItems([...updatedCart])
  }

  //increases quantity of an item
  const increment=(id)=>{
    const itemToIncrement = cartItems.find(item=>item.id===id)
    itemToIncrement.quantity+=1
    setCartItems([...cartItems])
  }

  //decreases quantity of an item
  const decrement=(id)=>{
    const itemToDecrement = cartItems.find(item=>item.id===id)
    itemToDecrement.quantity-=1
    if(itemToDecrement.quantity<1){
       removeFromCart(id)
    }else{
      setCartItems([...cartItems])
    }
   
  }
  //calculates the subtotal of all items in the cart
  const getSubTotal=()=>{
    if(cartItems.length>0){
      const priceList = cartItems.map(item=>item.quantity*item.price)
      const subTotal = priceList.reduce((total, num)=> {
        return total + num;
      })
      return subTotal
    }
  }



  const removeCartPage=()=>setActive(false)
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Nav />
        <div className="all-products">
          <div>
            <h1>All Products</h1>
            <p>A 360<sup>o</sup> look at Lumin</p>
          </div>
          <div>
            <select name="filter" id="filter">
              <option value="Filter By">Filter By</option>
            </select>
          </div>

        </div>
        <Products cartItems={cartItems} setCartItems={setCartItems} 
        active={active} setActive={setActive} currency={currency} currencies={currencies}
        setCurrency={setCurrency} setCurrencies={setCurrencies}/> 
       
        

        <div className={active?'cart-details-active':'cart-details-inactive'}>
         <div className="cart-details-overlay"></div>
            <form  className="cart-details-form">
                <div className="cart-details-nav">
                    <img src="./back-button.png" alt="back button" className="back-button" onClick={removeCartPage}/>
                    <p>YOUR CART</p>
                </div>
                <div className="cart-details-currency">
                  <select name="currency"  onChange={(e) => setCurrency(e.target.value)}>
                    <option defaultValue>{currency}</option>
                    {currencies.map((value, index) => <option key={index} value={value}>{value}</option>)}
                  </select>
                </div>
                <div className="cart-details-products">
                  {cartItems.map(item=>(
                    <div key={item.id} className="cart-item">
                        <p className="cart-item__name">{item.title}</p>
                        <div className="cart-item__qty">
                            <span className="increment" onClick={()=>increment(item.id)}>+</span>
                            <span className="qty">{item.quantity}</span>
                            <span className="decrement" onClick={()=>decrement(item.id)}>-</span>
                        </div>
                        <div className="cart-item__image">
                            <img src={item.image_url} alt="product" className="image"/>
                        </div>
                  <p className="cart-item__price">{currency==='USD'?'$':currency}{item.price*item.quantity}</p>
                        <p className="close" onClick={(e)=>removeFromCart(item.id)}>X</p>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="subtotal">
                    <p>Subtotal</p>
                  <p className="subtotal-amount">{currency==='USD'?'$':currency}{getSubTotal()}</p>
                  </div>
                  <div >
                    <button className="subscription">MAKE THIS A SUBSCRIPTION(SAVE 20%)</button>
                  </div>
                  <div >
                    <button className="checkout">PROCEED TO CHECKOUT</button>
                  </div>
                </div>
            </form> 
        </div>

      </div>
    </ApolloProvider>

  );
}

export default App;
