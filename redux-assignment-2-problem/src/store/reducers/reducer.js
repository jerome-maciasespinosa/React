import * as actionTypes from './../action';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case (actionTypes.ADD_PERSON):
        console.log('ADD_PERSON')
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            const updatedPersons = state.persons.concat(newPerson);

            return {
                persons: updatedPersons
            }
        case (actionTypes.REMOVE_PERSON):
        const updatedPersonArray = state.persons.filter(person => person.id !== action.idToRemove)
            return {
                persons: updatedPersonArray
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer; 
