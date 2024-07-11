import React, { useEffect } from 'react';
import '../styles/P_info.css';



const P_info = () => {
    useEffect(() => {
        fetchData();
      }, []);
    async function fetchData(){
        var currentURL = window.location.href;
        var searchParams = new URLSearchParams(new URL(currentURL).search);
        var pid = searchParams.get('id');
        //console.log(pid);



        var i=0;
        //console.log("Fetching data...");
        try{
          const response=await fetch('http://localhost/projects/product_info.php?id='+pid);
          if(!response.ok){
            throw new Error('Network response was not ok');
          }
          const data1= await response.json();
          var fetchList1='';
          for(i=0;i<data1.length;i++){
           // console.log(data1[i]['product_name']);
            fetchList1 += '<h4 > <img class="one" src="http://localhost/projects/Assets/'+data1[i]['product_img']+'">'+
            '<div class="desc">'+
            '<h4 class="text">Product Name:'+data1[i]['product_name']+
            '<h4 class="text">Description:'+data1[i]['description']+
            '<h4 class="text">Status:'+data1[i]['status']+
            '<h4 class="text">Price:'+data1[i]['price']+ '</h4>'
            +'</div>';

          fetchList1 += '<input type = "hidden" id="pid" value="'+pid+'">';
          fetchList1 += '<input type = ""  id="price" value="'+data1[i]['price']+'">';
          // fetchList1 += '<input type = "text"  id="catid" value="'+data1[i]['cat_id']+'">';
          // fetchList1 += '<input type = "text"  id="userid" value="'+data1[i]['user_id']+'">'

           
          }
          document.getElementById("fetchList1").innerHTML = fetchList1;
        }
        catch(error){
          console.error('Error fetching data:', error);
        }
      }



async function addToCart(){
   var pid  = document.getElementById("pid").value;
   var price  = document.getElementById("price").value;
  //  var user_id=document.getElementById("userid").value;

   const response=await fetch('http://localhost/projects/addTocart.php?p_id='+pid+'&price='+price);
   console.log(response.json());
}



  return (
    <div>
   
     <div className='box1'>
        <div id="fetchList1" className="box2">
          
        </div>
        <div className='payment_btn'>
         <button className='btn_one' onClick={addToCart}>Add to cart</button>
         {/* <button className='btn_one' onClick={addToCart}>Add to cart</button> */}
        </div>
     </div>
    </div>
  )
}

export default P_info
