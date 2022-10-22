import React, { useState } from "react";
import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { BsBag } from "react-icons/bs";
import { HiMenuAlt4 } from 'react-icons/hi'
export default function Header() {
  const [menus, setMenus] = useState(menu);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <Root>
      <div className="navbar">
        <div className="logo">
          <AiFillApple />
        </div>
        {menus.map((i: any) => {
          return <div> {i.name}</div>;
        })}
        <div>
          <GoSearch />
        </div>
        <div>
          <BsBag />
        </div>
      </div>
      <div className={isMenu ? "mobile_menu active" : "mobile_menu "}>
        <div className="menu_top_bar">
          <div onClick={() => { setIsMenu(s => !s) }}><HiMenuAlt4 /></div>
          <div className="logo"><AiFillApple /></div>
          <div><BsBag /> </div>
        </div>
        <div className="menu_box">
          <input type='text' placeholder="Search apple.com" />
          <hr/>
          <div className='menus'>
            {menus.map((i: any) => {
              return <div> {i.name}</div>;
            })}
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #000000cc;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    height: 40px;
    color:#f5f5f7;
    & > div{
      font-size:12px;
    }
    svg {
      font-size: 14px;
  }
    .logo svg{
      font-size: 20px;
    }
  @media (max-width:786px){
    display: none;
  }
  }
  .mobile_menu{
    color: #f5f5f7;
    padding:10px;
    padding: 10px;
    z-index: 9;
    overflow: hidden;
    position: absolute;
    top: 0px;
    background: #272727;
    width: 100%;
    display:none;
    @media(max-width:786px){
      display:block;
    }
    .menu_top_bar{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    svg {
        font-size: 20px;
    }
    .menu_box{
      height: 0vh;
      padding-top: 10px;
      transition: all .36s cubic-bezier(0.32, 0.08, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1);
      .menus{
        max-width: 664px;
        width:100%;
        margin: 0 auto;
        padding: 0px 26px;
        & > div {
            padding: 10px 0px;
            border-bottom: 1px solid #d7d7d745;
        }
      }
      hr{
        border-color:#d7d7d745;
      }
      input{
        max-width: 664px;
        margin: 0 auto;
        margin-top: 20px;
        width: 100%;
        padding: 10px;
        color: #6e6e73;
        background: #acacac36;
        border: none;
        border-radius: 10px;
        font-size: 18px;
        display: block;
        margin-bottom: 20px;
      }
    }
  }
  .mobile_menu.active {
    background: #020202;
     .menu_box{
      height: 100vh;
      
     }
  }
`;

const menu = [
  {
    id: 1,
    name: "Store",
  },
  {
    id: 2,
    name: "Mac",
  },
  {
    id: 3,
    name: "iPad",
  },
  {
    id: 4,
    name: "iPhone",
  },
  {
    id: 5,
    name: "Watch",
  },
  {
    id: 6,
    name: "AirPods",
  },
  {
    id: 7,
    name: "TV & Home",
  },
  {
    id: 8,
    name: "Only on Apple",
  },
  {
    id: 9,
    name: "Accessories",
  },
  {
    id: 10,
    name: "Support",
  },
];
