import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.config'

interface IProps{
    currentUser:any
}

export const Header:React.FC<IProps> = ({currentUser}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container' ><Logo className='logo'></Logo></Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>              
                {currentUser?(<div className='option' onClick={()=>auth.signOut()}>Signout</div>):  <Link className='option' to='/signin'>Signin</Link>}
            </div>
        </div>
    )
}
