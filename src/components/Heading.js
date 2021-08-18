import React from 'react'
import {Card} from 'react-bootstrap'
import {useSelector} from 'react-redux'

const Heading = () => {

    const AODs = useSelector(state => state.AODReducer)

    let totalAUM = 0
    let AODSNUMBER = AODs.length;
    AODs.map(aod => {
        if(Number.isInteger(parseInt(aod.aum))){
            return totalAUM += parseInt(aod.aum)
        }
    })
    
    return (
        <div className='heading'>
            <h1>DAOggregate</h1>
            <div className="cards">

                <Card
                    bg='dark'
                    text='light'
                    className="mb-2 singlecard"
                >
                    <Card.Header>Total AUM (USD)</Card.Header>
                    <Card.Body>
                    <Card.Title>$ {totalAUM} M</Card.Title>
                    <Card.Text>
                    Some Further Details Of DAOs Some Further Details Of DAOs Some Further Details Of DAOs 
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card
                    bg='dark'
                    text='light'
                    className="mb-2 singlecard"
                >
                    <Card.Header>Number of DAOs</Card.Header>
                    <Card.Body>
                    <Card.Title>{AODSNUMBER}</Card.Title>
                    <Card.Text>
                        Some Further Details Of DAOs Some Further Details Of DAOs Some Further Details Of DAOs 
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Heading
