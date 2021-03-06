import React, {Component} from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import {connect} from 'react-redux';
import * as actions from './../../store/actions/index';

import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {

        this.props.onFetchOrders(this.props.token, this.props.userId);
        // axios.get('https://react-my-burger-b1a6f.firebaseio.com/orders.json')
        //     .then(res => {
        //         const fetchedOrders = [];
        //         for (let key in res.data) {
        //             fetchedOrders.push({
        //                 ...res.data[key],
        //                 id: key
        //             });
        //         }
        //         this.setState({loading:false, orders: fetchedOrders})
        //     })
        //     .catch(err => {
        //         this.setState({loading: false})
        //     })
    }
    render() {

        let orders = <Spinner />;
        if (!this.props.loading){
            orders = ( 
                this.props.orders.map(order => (
                <Order 
                    key={order.id} 
                    ingredients={order.ingredients}
                    price={order.price}/>
            )))
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orderR.orders,
        loading: state.orderR.loading,
        token : state.authR.token,
        userId: state.authR.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : (token, userId) => dispatch(actions.fetchOrdders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));