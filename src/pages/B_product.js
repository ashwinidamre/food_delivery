
import React, { useEffect } from 'react';
import '../styles/B_product.css'

const B_product = () => {
    useEffect(() => {
        fetchData();
      }, []);
    async function fetchData(){
      
        var currentURL = window.location.href;
        var searchParams = new URLSearchParams(new URL(currentURL).search);

// Get the value of the 'cat_id' parameter
var catId = searchParams.get('cat_id');
console.log(catId);

        var i=0;
        console.log("Fetching data...");
        try{
          const response=await fetch('http://localhost/projects/fetch_products.php?cat_id='+catId);
          if(!response.ok){
            throw new Error('Network response was not ok');
          }
          const data= await response.json();
          var fetchList='';
          for(i=0;i<data.length;i++){
            console.log(data[i]['product_name']);
            fetchList += '<div class="products"><h4 class="text1">'+data[i]['product_name']+
            '</h4>'+'<h4 class="pic">'+' <a href="./P_info?id='+data[i]['id']+'"><img src="http://localhost/projects/Assets/'+data[i]['product_img']+'"></a></h4></div>';
          }
          document.getElementById("fetchList").innerHTML = fetchList;
        }
        catch(error){
          console.error('Error fetching data:', error);
        }
      }
  return (
    <div className='box3'>
      <h1>Pizza category</h1>
       <div>
     <div id="fetchList" className='box4' >
     
        
     </div>
     </div>
    {/* <a href="/P_info"><button>jnwjknefkje</button></a> */}
    <a href="/Payment"><button className='btn_one'>Add to cart</button></a>
    </div>
  )
}

export default B_product
