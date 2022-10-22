import styled from "styled-components";
import { FiChevronRight } from 'react-icons/fi'
export default function Ipad() {
  return (
    <Root>
      <img src='/images/image1.jpg' alt='loding...' />
      <div className="content_box">
        <h2 className="headline">iPad</h2>
        <h3 className="subhead">Lovable. Drawable. Magical.</h3>
        <p> Available starting 10.26 </p>
        <div className="cta_links">
          <a className="primary_btn" href="#"> Learn more <FiChevronRight /></a>
          <a className="primary_btn" href="#"> Order now <FiChevronRight /></a>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
overflow:hidden;
  position:relative;
  height: 700px;
  padding:60px;
  
  > img{
    width:100%;
    height:100%;
    object-fit: contain;
    margin-left: -70px;
    @media (max-width:450px){
      margin-left: 0px;
      margin-top: 142px;
    }
  }
.content_box {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0px, -50%);
    margin-left: 10%;
    @media (max-width:450px){
      transform: translate(-50%,74px);
      top: 0px;
      left: 50%;
      margin-left:0px;
    }
    p{
      color: #6e6e73;
      font-size: 18px;
      margin: 14px 0px;
      font-weight: 400;
    }
    h3.subhead {
      font-size: 24px;
    }
    a{
      font-size: 19px;
    }
}
`;
