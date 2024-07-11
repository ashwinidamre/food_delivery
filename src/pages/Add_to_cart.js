import React, { useEffect, useState } from 'react';
import '../styles/Add_to_cart.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Add_to_cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);


  async function fetchData() {
    try {
      const response = await fetch('http://localhost/projects/fetch_cart.php');
      if (!response.ok) {
        throw new Error('Failed to fetch cart data');
      }
      const data = await response.json();
      setCartItems(data); // Update state with fetched cart items
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  }

  async function deleteData(cartId) {
    
    const response = await fetch("http://localhost/projects/delete_cart.php?id="+cartId);
    if(response.ok){
      fetchData();
      
    }
    else{
      alert("Please try again later!");
    }
  }
  // async function total(){
  //   var i=0;
  //   const response = await fetch("http://localhost/projects/fetch_cart.php");
  //   const data= await response.json();
  //   var fetchdata1 ="<div>"+data[i]['total']+"<div>";
   
  //   alert(fetchdata1);
    
  // }
 

  function calculateTotalPrice() {
    let totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setTotalPrice(totalPrice.toFixed(2));
  }

 function handleBuyNow(){
  navigate('/Payment'); // Use navigate instead of history.push
  alert('okk');
 }
 

  return (
    <div className='cart_h'>
      <h1>Cart</h1>
      <div className='Heading'>
        <div className='productpic'>Product Pic</div>
        <div className='productname'>Product Name</div>
        <div className='productqty'>Product Qty</div>
        <div className='productprice'>Product Price</div>
        <div className='deletebtn'>Actions</div>
      </div>
      <div className='product_details'>
      <div className='' id="fetchCartList">
        {cartItems.map(item => (
        
          // <div className='product_details'>
          <div className='product_info'>
          <div className='product_pic' key={item.id}>
          <img src={'http://localhost/projects/Assets/'+item.product_img} alt={item.name} />
          </div>
    
          
          <div className='product_name'>
           <div className='name'>{item.product_name}</div>
          </div>
          <div className='product_qty'>
          <button>+</button>
          <input type='number' value={item.qty}/>
          <button>-</button>
          </div>
          <div className='product_price'>
           <h2>{item.price}</h2>
          </div>
          <div className='delete_btn'>
          <button onClick={() => deleteData(item.cart_id)}>Delete</button>
    
          </div>
          
          
          </div>
          
          // </div>       
          

        ))}
      </div>
      <div className='total'>
        <h1>Total Price-</h1>
        <div id='total_price'>{totalPrice}</div>
        
      </div>
      <div className='buy_now'>
      <button className='buy_now_btn' onClick={handleBuyNow}>Buy Now</button>
      </div>
     
      </div>
    </div>
  );
}

export default Add_to_cart;
