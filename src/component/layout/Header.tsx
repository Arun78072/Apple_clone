import React, { useState } from "react";
import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { BsBag } from "react-icons/bs";
export default function Header() {
  const [menus, setMenus] = useState(menu);
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
