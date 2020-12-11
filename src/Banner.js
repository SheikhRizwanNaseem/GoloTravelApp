import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="Banner">

        <div className="bannerimage">
            <div className="colum_right">
               <h1>  Discover The<br></br>Best Resturant </h1>

                 <input type="text" style={{width : "500px" , border:"none", borderRadius:"50px"}}/>     
           </div>
           <div className="colum_left">
               <img src="whitecar.png" alt=""/>

           </div>
</div>
           
         
        
       </div>
    )
}

export default Banner
