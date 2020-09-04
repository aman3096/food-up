import React,{ useState }from 'react';
import { Hits, Highlight } from 'react-instantsearch-dom';
import WhiteHeart from '../Assets/Images/WhiteHeart.png'
import heart from '../Assets/Icons/Icon feather-heart.png';
import './Card.css';
import { Link } from 'react-router-dom';



const Cards =({data})=>{
    const [like,setLike]= useState(false)
    const [clicked,setClicked]= useState(false)
    
    const toggleClick=()=>{
        setClicked(!clicked);
    }

    const articlesJsx = data.map((item, index) => {
        return (
            <div>
                <Link to={String(Object.values(item)[0])}>
            <div className="card" style={{borderRadius:'10px',marginLeft:'10%',marginRight:"40%",width:'100%',fontColor:'gray',border:"none",background: 'radial-gradient(at 55% -70%, white, black 80%)'
}}>
            <h6><span style={{width:'120px'}}>In {Object.values(item)[3]}</span></h6>
            <img onClick={toggleClick} src={Object.values(item)[2]} className="card-img-top" alt="..."/>
                    <div className="card-body" id="cardBody">
    <h5 className="card-title" style={{display:'block',fontFamily:'Metropolis-Black',color:index%2?'black':'white'}}>{Object.values(item)[1]}</h5>	
    <div style={{display:'flex',justifyContent:'flex-end',borderColor:'#fffff'}}>{index%2 ?<img onClick={()=>setLike(!like)} src={heart}  style={{height:'18px',borderImage: {heart}
,borderColor:index%2&&'#FFFFFF'}}/>:<img onClick={()=>setLike(!like)} src={WhiteHeart}  style={{height:'18px'
,borderColor:'#000000'}}/>}
    </div>
    <p className="card-text" style={{display:'block',fontSize:'10px',fontFamily:'Metropolis-Light',color:index%2?'black':'white'}}>{Object.values(item)[6]}</p>
                    </div>
            </div>
            </Link>
            </div>
            
           
       );
     });

    return(
        <>
        <span style={{marginLeft:"66%",fontSize:'12px',color:'gray',fontFamily:'Metropolis-SemiBold'}}>
        CATEGORY</span>
    <h1 style={{marginLeft:"49%",fontFamily:'Metropolis-Bold'}}>{"Pizza & Noodles"}</h1>
<br/><br/>
        <div className="wrapper" style={{width:'50%',margin:'0 20%'}}>
        {Array(1).fill(0).map(() => articlesJsx)}
        </div>
        </>
       
    )
}

export default Cards;