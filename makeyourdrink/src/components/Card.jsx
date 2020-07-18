import React, {Component } from 'react';
import './Card.css';


class Card extends Component {
    render() {
        return(
            <div className="card">
                <div className="imgCard">
                <img src={this.props.drinkImg} className="img"/>
                <div className="drink-name">
                <h3>{this.props.drinkName}</h3>
                <p>{this.props.drinkIngredients.join(' | ')}</p>
                </div>
                
                </div>
                <div className="instructions">
                <h2>Instructions</h2>
                <p>{this.props.drinkInstructions}</p>
                </div>
            </div>
        
        )
    }
}
export default Card;
