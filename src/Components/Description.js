import React from 'react';

import { Link,useParams } from 'react-router-dom';
import Image from '../Assets/Images/Img1.jpg';
import LoveImage from '../Assets/Icons/Icon feather-heart-color.png';
import GoBack from '../Assets/Icons/Icon-go-back.png';

import './Description.css';

const Description = (props)=>{
    let url = window.location.href;
    let param = window.location.pathname;
    param=param[1]
    let ids=Number(param);
    console.log('id',ids);
    let resultNames = props.data.map(a => a.name);
    let resultImageUrl = props.data.map(a=>a.image);
    let resultCategory = props.data.map(a=>a.category);
    let resultLabel= props.data.map(a=>a.label);
    let resultPrice= props.data.map(a=>a.price);
    let resultDescription =props.data.map(a=>a.description);
    console.log('props',resultNames[ids]);
    
    return(
        <>
        <div className="row" style={{width:"90%",height:'80%',marginLeft:'10%'}}>
        <div className="column" style={{ width:'50%'}}>
    <div style={{marginLeft:'8%'}}><Link to="/home"><span style={{color:'black',align:'left',fontFamily:'Metropolis-SemiBold'}}> <img src={GoBack}/>{'     '}Go Back</span></Link>
        </div><br/><br/>
                <video preload="none" width="70%" height="30%" poster={resultImageUrl[ids]} controls style={{borderRadius:'8px',marginLeft:'10%'}}>
                    <source src="https://www.youtube.com/watch?v=qte8HB6AFzU" type="MIME/mp4"/>
                </video><br/><br/><br/><br/>
                <h3 style={{fontFamily:'Metropolis-Bold',width:'68%',marginLeft:'10%'}}>Ingredients:</h3>
            <p style={{marginLeft:"10%",fontFamily:'Metropolis-SemiBold',color:'gray',width:'80%',fontSize:'12px'}}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
            <br/><br/><br/>
            <h4 style={{fontFamily:'Metropolis-Bold',marginLeft:'10%'}}>How to prepare:</h4>
            <p style={{fontFamily:'Metropolis-SemiBold',width:'80%',color:'gray',fontSize:'10px',marginLeft:'10%'}}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem IpsumLorem IpsumvvLorem IpsumLorem IpsumLorem IpsumvvLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsusum Lorem Ip Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum]
            </p>
            <p style={{fontFamily:'Metropolis-SemiBold',color:'gray',width:'80%',fontSize:'10px', height:'40px',marginLeft:'10%'}}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem IpsumLorem IpsumvvLorem IpsumLorem IpsumLorem IpsumvvLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum]
            </p>
        </div>
        <div className="column" style={{marginTop:'3%',width:'50%'}}>
        <div style={{marginLeft:'54%',fontFamily:'Metropolis-Medium', textAliginLast:'end',color:'gray',fontSize:'12px'}}>RECIPE</div>

    <h2 style={{fontFamily:'Metropolis-Bold',textAlign:'end',marginRight:'39%'}}> {resultNames[ids]}</h2>
                    <div style={{marginLeft:'42%'}}>
                        <span style={{margin:'5px'}} className="fa fa-star checked"></span>
                        <span style={{margin:'5px'}}className="fa fa-star checked"></span>
                        <span style={{margin:'5px'}}className="fa fa-star checked"></span>
                        <span style={{margin:'5px'}}className="fa fa-star"></span>
                        <span style={{margin:'5px',mariginRight:'0px'}}className="fa fa-star"></span>
                    </div><br/><br/>
                    <span style={{marginLeft:'48%',fontFamily:'Metropolis-Medium', color:'gray',textAliginLast:'end',fontSize:'12px'}}>DESCRIPTION</span>
    <br/><div style={{fontFamily:'Metropolis-Bold',width:'61%',textAlign:'end'}}>{resultDescription[ids]}</div>
                    <br/><br/><div style={{display:'flex',width: '250px'}}>
                    <div className="circle1" style={{marginRight:'13%',color:'white',marginBottom:'34px'}}> <span className="circle" style={{fontSize:'42px'}}>8</span> <div style={{marginLeft:'30%',fontFamily:'Metropolis-Bold', fontSize:'10px',marginTop:'-33%',width:'34px',textAlign:'center'}}>ingredients</div></div>
    <span style={{marginRight:'13%'}}> <span className="circle" style={{fontSize:'42px'}}>{resultPrice[ids]}</span><div style={{marginLeft:'39%',fontFamily:'Metropolis-Bold', fontSize:'10px',marginTop:'-33%',width:'34px',color:'white',textAlign:'center'}}>bucks</div></span>
                    <span style={{marginRight:'13%'}}> <span className="circle" style={{fontSize:'42px'}}>25</span><div style={{marginLeft:'40%',fontFamily:'Metropolis-Bold', fontSize:'10px',marginTop:'-33%',width:'34px',color:'white',textAlign:'center'}}>minutes</div></span>
                    </div>
                    <br/><br/><br/>
                    <b><span style={{fontFamily:'Metropolis-Regular',width:'400px',padding:'8px',fontSize:'14px',textAlign:'end',marginLeft:'23%',letterSpacing:'2px'}}>FAVOURITE THIS RECIPE</span></b>
                    <img height="23px" src={LoveImage}></img><br/><br/>
                    <hr style={{width:'62%', marginLeft:'0%'}}/>
                    <span style={{fontFamily:'Metropolis-Regular',marginLeft:'3%',color:'gray',fontSize:'12px'}}>ADD COMMENTS</span><br/>
                    <textarea rows="5" cols="50" style={{width:'400px', height:"20%",padding:'16px',fontSize:'12px',resize:'none',border:'none',fontFamily:'Metropolis-SemiBold',borderRadius:'12px'}} placeholder={'Type something here...'}/><br/>
                    <button style={{background:'#000000',outline: "none",color:'#ffffff',padding:'16px',width:'400px',height:'44px',border:'none',fontSize:'12px',fontFamily:'Metropolis-Bold',letterSpacing:'1px',borderRadius:'8px'}}>ADD COMMENT</button>
            </div>
        </div>
        </>
    )
}

export default Description;