import React from 'react'
import {useParams} from 'react-router-dom'
import data from '../db.json'

const Details = () => {

    const {id} = useParams()

    const selectedDao = data.filter(aod => aod.id == id);
    
    return (
        <div className="details">
            <div className="dao">
                <div className="img">
                    <h3> {selectedDao[0].name}</h3>
                    <img src={selectedDao[0].img} alt=""/>
                </div>
                <div className="daodet">
                    <h5> {selectedDao[0].category} DAO </h5>
                    <h5> AUM Amount {selectedDao[0].aum} <span><i class="fas fa-dollar-sign"></i></span></h5>
                    <h5> <span><i class="far fa-clock"></i></span> Founded At {selectedDao[0].foundDate} </h5>
                    <h5> <span><i class="fab fa-twitter-square"></i></span> twitter followers {selectedDao[0].twl} </h5>
                </div>
            </div>
        </div>
    )
}

export default Details
