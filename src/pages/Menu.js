// import React from "react";
// import { MenuList } from "../helpers/MenuList";
// import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import React, { useEffect } from 'react';

import B_product from './B_product';


// import { useHistory } from "react-router-dom";




function Menu() {

// const history = useHistory();
// const handleClick =()=>{
// history.push('/P_product')
// }

  useEffect(() => {
    fetchData();
  }, []);








  async function fetchData(){
    var i=0;
    //console.log("Fetching data...");

      const response = await fetch('http://localhost/projects/fetch_category.php');
   
      const data= await response.json();
    
       var fetchList='';
      for(i=0;i< data.length;i++){
       // console.log(data[i]['cat_name']);
        fetchList += '<div class="menuheading"><h4>'+data[i]['cat_name']+'</h4>'+ ' <a href="./B_product?cat_id='+data[i]['cat_id']+'&cat_name='+data[i]['cat_name']+'"><img className="pics1" src="http://localhost/projects/Assets/'+data[i]['cat_img']+'"></a></h4></div> ';

      }
      document.getElementById("fetchList").innerHTML = fetchList;
    
  }








  return (
    <div className="menu">
     
      {/* <div className='container'> */}
      <div className="container">
      <h1 className="menuTitle">Our Menu</h1>
      <div id="fetchList" className='con1' >
     
        
      </div>
      </div>
      {/* <div className="con2"> */}
          {/* <P_product /> */}
          {/* <button><a href="./P_product">xbfbdxb</a></button> */}
          {/* <button onClick={handleClick} >click</button> */}
          {/* <Link to="/P_product">Contact</Link>    
          <Link to="/B_product">burger</Link>     */}
      {/* </div> */}
      
      {/* </div> */}


      {/* <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default Menu;

