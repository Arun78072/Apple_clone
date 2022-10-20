import React from "react";
import styled from "styled-components";
import AppleTv from "../component/home/AppleTv";
import GridBox from "../component/home/GridBox";
import Ipad from "../component/home/Ipad";
import IpadPro from "../component/home/IpadPro";

export default function Home() {
  return (
    <Root>
      <Ipad />
      <IpadPro />
      <AppleTv />
      <GridBox />
    </Root>
  );
}
const Root = styled.div`
  img {
    width: 100%;
  }
  
`;
