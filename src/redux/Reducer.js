


const AODReducer = (state= [],action) => {
    switch(action.type){
        case 'FETCHING':
            return state = action.payload
        case 'SEARCHING' :
            return state = action.payload
        case 'CategoryF':
            return action.payload
        case 'ADDING':
            return state = [action.payload,...state]
        default : return state
    }
}

export default AODReducer;