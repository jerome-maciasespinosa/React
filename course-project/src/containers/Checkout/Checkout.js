import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import * as actions from './../../store/actions/index';

import {connect} from 'react-redux';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to={"/"} />
        const purchasedRedirect = this.props.purchased ? <Redirect to={"/"} /> : null;
        if(this.props.ings) {
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route 
                        path={this.props.match.url + '/contact-data'} 
                        component={ContactData} />
                </div>
            );
        }
        return summary
            
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilderR.ingredients,
        purchased: state.orderR.purchased
    }
}



export default connect(mapStateToProps)(Checkout);