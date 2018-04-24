import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import {connect} from 'react-redux';
import * as actionTypes from './../store/action';

class Persons extends Component {
    state = {
        persons: []
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
}

const mapDispatch = dispatch => {
    return {
        onAddPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name: name, age: age}}), 
        onRemovePerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, idToRemove: id})
    }
}

export default connect(mapStateToProps, mapDispatch)(Persons);