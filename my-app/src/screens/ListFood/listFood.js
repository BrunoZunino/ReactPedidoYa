import React from 'react';
import Styles from './listFood.css';
import ReactDOMServer from 'react-dom/server';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import Food from '../../components/Food/food.js';
import Footer from '../../components/Footer/footer.js';

class listFood extends React.Component {
  constructor(props){
    super(props);

      this.state={
        foodInfo: [],
      };
    };

    componentDidMount(){
        this.renderFood();
      }

    async renderFood(){
        let food = await fetch('http://localhost:5000/food').then(r => r.json());
  
        this.state.foodInfo = food;
        this.setState(this.state);
        console.log(this.state.foodInfo);
      }

    render(){
      return (
        <div className="mainFood">
          <div className="backgroundImageTop">
          </div>
            <div>
              {this.state.foodInfo.map(x => {
                return <Food info={x}/>
              })}
            </div>
          <Footer/>
        </div>
      );
    }
};


export default listFood;