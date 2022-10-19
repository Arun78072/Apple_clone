import React, { useState } from "react";
import styled from "styled-components";
export default function Header() {
  const [menus, setMenus] = useState(menu);
  return (
    <Root>
      <div className="navbar">
        <div>aple</div>
        {menus.map((i: any) => {
          return <div> {i.name}</div>;
        })}
         <div>seach</div>
      <div>cart</div> 
      </div>
     
    </Root>
  );
}
const Root = styled.section`
  background: grey;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
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
