import React from 'react';
import search from '../Assets/Icons/Icon feather-search.png'; 
const Buttons = ()=>{
    return(
        <div>
<button src={search} style={{margin:"30px",marginRight:'20px',height:"55px",width:'55px',outline: "none",marginLeft:"10%",backgroundColor:"#FFFFFF",border:'none',borderRadius:'50%'}}><img src={search} alt="Search Text"></img></button>
            <input style={{height:'23px',width:'340px',outline: "none",fontFamily:'Metropolis-SemiBold',background: "transparent",border: "none"
}} placeholder="Search your favourite recipe..."></input>
        </div>
    )
}

export default Buttons;