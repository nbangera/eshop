import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'
import './header.styles.scss'

export const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container' ><Logo className='logo'></Logo></Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                <Link className='option' to='/signin'>Signin</Link>
            </div>
        </div>
    )
}
