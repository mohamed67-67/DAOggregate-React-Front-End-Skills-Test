import React,{Fragment, useState} from 'react';
import {Modal}  from 'react-bootstrap'
import FileBase64 from 'react-file-base64';
import {useSelector,useDispatch} from 'react-redux'
import { AddingDao } from '../redux/Actions';



const  ModalAdd = () => {

    const dispatch = useDispatch();
    const State = useSelector(state => state.AODReducer)
   
    function handleShow() {
      setShow(true);
    }

    const handleSubmit = (e) => {
        if(newDao.name && newDao.category && newDao.foundDate && newDao.img !== ''){
            e.preventDefault();
            dispatch(AddingDao(newDao));
            setShow(false)
            setDao({
                id: State.length + 1,
                name : '',
                category: '',
                aum : 0,
                foundDate: '',
                img : ''
            })
        }
    }


    const [show, setShow] = useState(false);
    const [newDao, setDao] = useState({
        id: State.length + 1,
        name : '',
        category: '',
        aum : 0,
        foundDate: '',
        img : ''
    })
    
    console.log(newDao.img.base64);
  
    return (
      <Fragment>
        <h5 onClick={() => handleShow()}> <i class="fas fa-folder-plus"></i> Add</h5>
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add DAo</Modal.Title>
            </Modal.Header>

            <div className="AddingForm">
                <form className='form'>
                    <label htmlFor="text">Name</label>
                    <input onChange={e => setDao({...newDao, name: e.target.value})} value={newDao.name} required type="text" placeholder='name'/>
                    <label htmlFor="text">Category</label>
                    <input onChange={e => setDao({...newDao, category: e.target.value})} value={newDao.category} required type="text" placeholder='Category'/>
                    <label htmlFor="text">aum</label>
                    <input onChange={e => setDao({...newDao, aum: e.target.value})} value={newDao.aum} min='0' required type="number" placeholder='aum'/>
                    <label htmlFor="text">Founded At</label>
                    <input onChange={e => setDao({...newDao, foundDate: e.target.value})} value={newDao.foundDate} required type="date" placeholder='Founded At'/>
                    <FileBase64 onDone={ ({base64}) => setDao({...newDao,img: {base64}.base64 }) } required/>
                    <button onClick={handleSubmit} style={{width: 'fitContent'}} type='submit'>Submit</button>
                </form>
            </div>
        </Modal>
      </Fragment>
    );
}
  
export default ModalAdd;