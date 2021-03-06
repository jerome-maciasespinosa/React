import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actions from './../../store/actions/index';

import Aux from '../../hoc/_Aux/_Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import axios from '../../axios-orders';
import Spinner from './../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



export class BurgerBuilder extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        purchasing: false
    }

    componentDidMount() {
       this.props.onInitIngredient();
    }

    updatePurchaseState(ingredients) {
       
        const sum = Object.keys(ingredients)
        .map(
            igKey => {
                return ingredients[igKey]
            }
        ).reduce((sum, el) => {
            return sum + el
        },0);
        
        return sum > 0;
    }

    purchasehandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({purchasing: true});
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        // {salad: true, meat: false, ...}

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
       
        if (this.props.ings) {
            burger = <Aux>
                        <Burger ingredients={this.props.ings} />
                        <BuildControls 
                            ingrediendRemoved={this.props.onIngredientRemoved} 
                            isAuth={this.props.isAuthenticated}
                            ingredientAdded={this.props.onIngredientAdded} 
                            disabled={disabledInfo}
                            price={this.props.price}
                            ordered={this.purchasehandler}
                            purchasable={this.updatePurchaseState(this.props.ings)}/>
                    </Aux>;
            orderSummary =  <OrderSummary 
                                ingredients={this.props.ings} 
                                purchaseCanceled={this.purchaseCancelHandler}
                                purchaseContinue={this.purchaseContinueHandler}
                                price={this.props.price}/>;
        }
        

        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredient: () => dispatch(actions.initIngredient()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}
const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilderR.ingredients,
        price: state.burgerBuilderR.totalPrice,
        error: state.burgerBuilderR.error,
        isAuthenticated: state.authR.token !== null
    }
}

export default connect(mapStateToProps, mapDispatch)(withErrorHandler(BurgerBuilder, axios));