import React, { useEffect } from 'react'
import {Table} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { FetchAODS } from '../redux/Actions'


const TableComp = () => {

  const history = useHistory()

  const dispatch = useDispatch();

  const DAOS = useSelector(state => state.AODReducer);

  useEffect(()=>{
    dispatch(FetchAODS())
  },[dispatch])

  const handleRouting = (id) =>{
    history.push(`/dao/${id}`)
  }

  return (
    DAOS.length ?
    <div className='table'>
        <Table striped bordered hover variant="dark">
            <thead>
            <tr className="table-active" >
                <th>Name</th>
                <th className='hide'>Catergory</th>
                <th className='hide'>AUM</th>
                <th className='hide'>Twitter Followers</th>
                <th>FOUNDED DATE</th>
            </tr>
            </thead>
            <tbody >
                {DAOS.map(dao => (
                    <tr onClick={() => handleRouting(dao.id)} key={dao.id}>
                        <td> <span> <img className='avatar' src={dao.img} alt="'avatar'"/> </span> {dao.name} </td>
                        <td className='hide'>{dao.category}</td>
                        <td className='hide'>{dao.aum}</td>
                        <td className='hide'>{dao.twl}</td>
                        <td>{dao.foundDate}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div> 
    : <div style={{display: 'flex', color: 'black',height: '100vh', justifyContent: 'center', alignItems: 'center'}} className="alt">
        <h5>No DAOs Available</h5>
      </div>
  )
}

export default TableComp


/* <input onChange={e => setSearchTerm(e.target.value)} value={searchTerm} style={{display: 'flex', margin: '5vh auto', width: '50vw'}} type="text"  placeholder='search..' /> */
/* data.filter(one => {
  if(searchTerm ===''){
    return one
  }else if (one.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
    return one
  }
}).map(one => (
  <h5 style={{display: 'flex', justifyContent: 'center', textAlign: 'left'}} key={one.id}> {one.name} </h5>
))
} */