import React, { useEffect } from 'react';
function Deletedata() {

    useEffect(() => {
        fetchData();
      }, []);

    async function fetchData(){
        var currentURL = window.location.href;
        var searchParams = new URLSearchParams(new URL(currentURL).search);
        var id = searchParams.get('id');
        
        const response=await fetch('http://localhost/projects/delete_cart.php?id='+id);
        // const data = await response.json();
        // console.log(data);
        //alert(data);
        window.history.back();

      }
      

  return (
    <div>
      Ashwini
    </div>
  )
}

export default Deletedata
