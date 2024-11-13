import React, { useState } from 'react';
import Hamburger from './Hamburger'

const Nav =() => {

const [HamburgerOpen, setHamburgerOpen] = useState(false);

const toggleHamburger = () => {
    setHamburgerOpen(!HamburgerOpen)
}

  return (
    <div>

        <div className='navigation'>
           <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
           </ul>

           <div className='hamburger' onClick={toggleHamburger}>
             <Hamburger />
           </div>

        </div>

        <style jsx>{`
            
            .navigation{
                width:100%;
                height:50px;
            }

            .navigation ul{
               display: ${ HamburgerOpen ? 'inline' : 'none'};
               background-color:blue;
               height:100vh;
               width:50vw;
               margin-top: 50px;
               position: absolute;

            }


            @media (min-width: 768px){
                .navigation ul{
                    display: flex;
                    background-color: transparent;
                    margin-top: 10px;
                    justify-content: flex-end;
                    width: 95vw;
                }
            }

            .navigation ul li{
                list-style-type:none;
                padding-right: 10px;
            }

        `}</style>

    </div>
  )
}

export default Nav