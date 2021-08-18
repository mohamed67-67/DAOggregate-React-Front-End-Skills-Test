import data from '../db.json'



export const FetchAODS = () => (dispatch) =>{

    dispatch({
        type : 'FETCHING',
        payload : data
    })
}

export const SearchFilter = (input) =>(dispatch) =>{

    const dataFiltered = data.filter(dao => dao.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ? dao : null )

    dispatch({
        type : 'SEARCHING',
        payload : dataFiltered
    })
}

export const CategoryFilter = (cate) => (dispatch) =>{
    const filteredData = data.filter(dao => dao.category === cate);
    
    dispatch({
        type: 'CategoryF',
        payload : filteredData
    })
}

export const AddingDao = (newDao) => (dispatch) =>{

    dispatch({
        type: 'ADDING',
        payload: newDao
    })
}