import React from 'react'

const Hamburger = () => {
  return (
      <>

        <div className='hamburger'>
          <div className='burger burger1'/>
          <div className='burger burger2'/>
          <div className='burger burger3'/>
        </div>

        <style jsx>{`
          .hamburger{
            width:2rem;
            height:2rem;
            display:flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
          }

        .hamburger{
            display: none;
        }

        @media (max-width: 767px){
            .hamburger{
                display: flex;
                padding-top:10px;
                margin-left:10px;
                z-index: 10;
            }
        }

          .burger{
            width:2rem;
            height:0.25rem;
            border-radius:10px;
            background-color:black;
            transform-origin:1px;
            transition: all 0.3s linear;
          }
        `}
        
        </style>
      </>
    
  )
}

export default Hamburger