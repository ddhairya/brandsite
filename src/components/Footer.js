import React from 'react'
import styled from 'styled-components'


const Styled = styled.div`
    .footer{
        
        background-color: #ffce02;
        padding-left:0.5rem;
        position:fixed;
        bottom:0;
        width:100%;
        
    }
    .copyright{
        
        padding-left:2rem;
        @media(max-width:500px){
            
            font-size:small;
            font-weight:bold;
        }
        
    }
   

`;


export const Footer = () => (
    <Styled>
       
        <div className='footer' >
       
            
                
            <span className='copyright'>Copyright © Al Ahlia Group 2020 </span>
            
        </div>
            
            

     
    </Styled>
)