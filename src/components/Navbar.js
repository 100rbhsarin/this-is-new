import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


function Navbar() {
const [click, setClick] = useState(false)
// const [button, setButton] = useState(true)


const handleClick = () => setClick(!click)
const closeMobilMenu =() => setClick(false) 

// const showButton = () => {
//     if(window.innerWidth <= 960){
//         setButton(false)
//     }
//     else {
//         setButton(true)
//     }
// }

// useEffect(()=> {
// showButton()
// }, [])

// window.addEventListener('resize', showButton)
  return (
 <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className='navbar-logo' onClick={handleClick}>
                ELANO TILES
              
             </Link>

            <div className='menu-icon' onClick= 
             {handleClick}>
            {click ? (<MdClose/>): (<FiMenu/>)}
            </div>

            <ul className={click? 'nav-menu active' : 
             'nav-menu'}>

            <li className='nav-item'>
                    <Link to="/" className='nav-links' 
                     onClick={closeMobilMenu}>
                        Home
                        </Link>
                        </li>


                        <li className='nav-item'>
                    <Link to="/Products" 
                     className='nav-links' 
                     onClick={closeMobilMenu}>
                        Collections
                      
                        </Link>
                        </li> 

                        <li className='nav-item'>
                    <Link to="/Services" 
                     className='nav-links' 
                     onClick={closeMobilMenu}>
                        About
                        </Link>
                        </li> 
                        </ul>

        </div>
    </nav>
      
    </>
  )
  }

export default Navbar