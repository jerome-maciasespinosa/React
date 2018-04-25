import * as actionTypes from './../actions/actionTypes';

const initialState = {
    orders: [], 
    loading: false
}

export const orderReducer = (state = initialState, action) =>{
    switch(action.type) {
        case (actionTypes.PURCHASE_BURGER_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.PURCHASE_BURGER_SUCCESS):
        console.log('orderData', action.orderData)
        console.log('orderId', action.orderId)
            const newOrder = {
                ...action.orderData,
                orderId: action.orderId
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            }
        case (actionTypes.PURCHASE_BURGER_FAILED):
        console.log(action.error);
            return {
                ...state,
                loading: false,

            }
        default: 
            return state;
    }
}

export default orderReducer;