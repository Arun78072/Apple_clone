import React, { useState } from 'react'
import styled from 'styled-components'
import { BiPlus } from 'react-icons/bi'
export default function FooterMenus({ menu, title }: any) {
    const [isOpen, setIsOpen] = useState(false)
    const [menuData, setMenuData] = useState(menu)
    return (
        <Root>
            <h2 onClick={() => { setIsOpen(s => !s) }}>{title}<BiPlus /> </h2>
            <div className={isOpen ? 'menus open' : 'menus close'}>
                {menuData.map((i: any) => {
                    return <a href={i.link}>{i.name}</a>;
                })}
            </div>
        </Root>
    )
}
const Root = styled.section`
    @media(max-width:786px){
        padding: 10px 0px;
        border-bottom: 1px solid #818181bf; 
    }
    h2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        svg{
            display: none;
            @media(max-width:786px){
                display: block;
                }
        }
        
    }
   .menus a{
    display: block;
    padding: 5px 0px;
    }
    .menus.close{
        @media(max-width:768px){
            display:none;
        }
        
    }
`