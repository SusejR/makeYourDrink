import React, {Component, Fragment } from 'react';
import Button from './Button';
import Card from './Card';
import Header from './Header';
import './View.css';


class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idDrink: null,
            drinkName: null,
            drinkInstructions: null,
            drinkImg: null,
            drinkIngredients: []
        }
      
    }


     myData() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
        const ingredients = this.getIngredients(data.drinks[0]);
          this.setState({
              idDrink: data.drinks[0].idDrink,
              drinkName: data.drinks[0].strDrink,
              drinkInstructions: data.drinks[0].strInstructions,
              drinkImg: data.drinks[0].strDrinkThumb,
              drinkIngredients: ingredients
          })
          console.log(this.state);
        })
        
      }

      getIngredients (data) {
        let ingredients = [];
        const ingredientKeys = Object.getOwnPropertyNames(data).filter(key => key.includes('strIngredient'))
        ingredientKeys.forEach(key => {
    
            if(data[key]){
                ingredients.push(data[key])
            }else{
                return ingredients
            }
        })
        return ingredients
    }
    
      
    componentDidMount() {
        this.myData();
    }
      
  render () {
    
    return (
     <Fragment>
        <Header/>
         <div className="view">
    <Card
     idDrink={this.state.idDrink}
     drinkName={this.state.drinkName}
     drinkInstructions={this.state.drinkInstructions}
     drinkImg={this.state.drinkImg}
     drinkIngredients={this.state.drinkIngredients}
     />
      <Button onClick={()=> this.myData()} name= 'New Drink'/>
   </div>
     </Fragment>
     
     
 
    );
  }
}
export default View