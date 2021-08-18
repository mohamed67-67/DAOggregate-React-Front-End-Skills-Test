import React, { useEffect } from 'react'
import { $ }  from 'react-jquery-plugin'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { CategoryFilter, FetchAODS } from '../redux/Actions';
import ModalAdd from './Modal';


const SideBar = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        $('.singleCat').on('click', function () {
            if(this.innerHTML === 'All'){
                dispatch(FetchAODS())
            }else{
                dispatch(CategoryFilter(this.innerHTML))
            }
        });
        
    },[dispatch])

    return (
        <div className='sidebar'>
            <div className="categories">
                <p className='singleCat'>All</p>
                <p className='singleCat'>Protocol</p>
                <p className='singleCat'>Service</p>
                <p className='singleCat'>Grant</p>
                <p className='singleCat'>Media</p>
                <p className='singleCat'>Social</p>
                <p className='singleCat'>Investment</p>
                <p className='singleCat'>Platform</p>
                <p className='singleCat'>Collector</p>
            </div>
            <div className="resources">
                <Link style={{color:'white',textDecoration: 'none'}} to='/'>
                    <h5> <i class="fas fa-home"></i> HOME</h5>
                </Link>
                <ModalAdd/>
                <Link style={{color:'white',textDecoration: 'none'}} to='/resources'>
                    <h5> <i class="far fa-map"></i> Resources</h5>
                </Link>
            </div>
        </div>
    )
}

export default SideBar
