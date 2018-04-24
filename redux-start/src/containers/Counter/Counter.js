import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from './../../store/action';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onCounterChange(actionTypes.INCREMENT)} />
                <CounterControl label="Decrement" clicked={() => this.props.onCounterChange(actionTypes.DECREMENT)}  />
                <CounterControl label="Add 5" clicked={() => this.props.onCounterChange(actionTypes.ADD, 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onCounterChange(actionTypes.SUBTRACT, 5 )}  />

                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => {
                        return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
   
    return {
        onCounterChange: (operation) => dispatch({type: operation}),
        onCounterChange: (operation, value) => {dispatch({type: operation, value: value})},
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);