import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onCounterChange('INCREMENT')} />
                <CounterControl label="Decrement" clicked={() => this.props.onCounterChange('DECREMENT')}  />
                <CounterControl label="Add 5" clicked={() => this.props.onCounterChange( 'ADD', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onCounterChange( 'SUB', 5 )}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
   
    return {
        onCounterChange: (operation) => dispatch({type: operation}),
        onCounterChange: (operation, value) => {dispatch({type: operation, value: value})}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);