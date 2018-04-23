import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPprice: 0
    }

    componentWillMount() {
       const search = this.props.location.search;
       const searchparams = new URLSearchParams(search);
       let price = 0;

       const ingredients = {};
       for(let param of searchparams.entries()) {
           if (param[0]==='price') {
            price = param[1];
           } else {
            ingredients[param[0]] = +param[1]; // param 0 = key of query param & param 1 = value
           }
           
       }

       this.setState({ingredients: ingredients, totalPprice: price})
    //    this.setState({
    //        ingredients: {
    //             salad: searchparams.get('salad'),
    //             meat: searchparams.get('meat'),
    //             cheese: searchparams.get('cheese'),
    //             bacon: searchparams.get('bacon')
    //         }
    //     });
       

    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                    <Route 
                        path={this.props.match.url + '/contact-data'} 
                        render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPprice} {...props} />)} />
            </div>
        )
    }
}

export default Checkout;