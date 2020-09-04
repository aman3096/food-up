import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Buttons from './Components/Buttons';
import axios from 'axios';
import backTopRightImage from './Assets/Images/Illustration2.png'
import backDownLeftImage from './Assets/Images/Illustration1.png'
import backCheese from './Assets/Images/Illustration4.png'
import backPizza from './Assets/Images/Illustration3.png'
import backLemon from './Assets/Images/Illustration5.png'
import Cards from './Components/Card';
import Description from './Components/Description';

function App() {
  
  const [data,setData] = useState([]);
  useEffect(
    async () => {
      const result = await axios(
        'http://starlord.hackerearth.com/recipe',
      );
      setData(result.data);
  },[])
  return (
  
    <div style={{background: `url(${backTopRightImage}) right -9% top -171px no-repeat,url(${backDownLeftImage}) left -9% bottom -171px no-repeat,url(${backCheese}) right -5% bottom 2% no-repeat,url(${backPizza}) left 15% top 30% no-repeat,url(${backLemon}) right 6% bottom 23% no-repeat`,backgroundColor:'#f5f5f5'}}> 
       
      <Buttons/>
      <Router>
        <Switch>
        <Route exact path="/"><Cards data={data} style={{margin:'0 32%',width:'50%', maxWidth:'300px'}}/></Route>
        <Route exact path="/home"><Cards data={data} style={{margin:'0 32%',width:'50%', maxWidth:'300px'}}/></Route>
        <Route exact path="/:id" children={<Description data={data} />}><Description data={data} id=':id' style={{margin:'0 32%',width:'50%', maxWidth:'300px'}}/></Route>
        </Switch>

      </Router>
    </div>
  
  );
}

export default App;
