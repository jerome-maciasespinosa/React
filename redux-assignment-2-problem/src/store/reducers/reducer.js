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
                name: action.personData.name,
                age: action.personData.age
            }
            const updatedPersons = state.persons.concat(newPerson);

            return {
                ...state,
                persons: updatedPersons
            }
        case (actionTypes.REMOVE_PERSON):
            const updatedPersonsArr = state.persons.filter(person => person.id !== action.idToRemove)
                return {
                    ...state,
                    persons: updatedPersonsArr
                }
        default:
            return {
                ...state
            }
    }
}

export default reducer; 
