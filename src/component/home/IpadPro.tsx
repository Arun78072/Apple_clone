import styled from "styled-components"
import { FiChevronRight } from 'react-icons/fi'
function IpadPro() {
  return (
    <Root>
      <img src='/images/image2.jpg' alt='loding...' />
      <div className="content_box">
        <h2 className="headline">iPad Pro</h2>
        <h3 className="m1chip">Supercharged by <img src='/images/m2chip.png' /></h3>
        <p>Available starting 10.26 </p>
        <div className="cta_links">
          <a className="primary_btn" href="#"> Learn more<FiChevronRight /> </a>
          <a className="primary_btn" href="#"> Order now<FiChevronRight /> </a>
        </div>
      </div>
    </Root>
  )
}

export default IpadPro
const Root = styled.section`
position:relative;
background: #000000;
height: 700px;
margin:10px 0px;
@media(max-width:1024px){
  padding: 100px 0px 100px 0px;
}
  >img {
      height: 100%;
      object-fit: cover;
      @media (max-width:1024px){
        margin: 50px 0px 0px 0px;
        transform: translateX(-110px);
      }
      @media (max-width:786px){
        transform: translateX(0px);
      }
      @media (max-width:450px){
        transform: translate(-56px, 58px);
        height: 300px;
        margin-top: 100px;
      }
  }
.content_box{
  text-align:center;
  top:50%;
  position: absolute;
  color: #fff;
  left: 10px;
  width: 100%;
  margin-left: -340px;
  transform: translateY();
  transform: translate(0px, -50%);
  @media(max-width:1024px){
    top:20px;
    left: 50%;
    transform: translate(-50%, 0px);
    margin-left:0px;
  }
  @media(max-width:450px){
    top: 52px;
  }
  p{
    color:#6e6e73;    
    font-size: 20px;
    font-weight: 400;
  }
  a{
    color:#2997ff;
    font-size: 20px;
  }
  .cta_links{
    margin-top: 10px;
  }
}
h3.m1chip {
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 400;
  justify-content: center;
  gap: 10px;
   img {
    width: 46px;
    height: 46px;
    object-fit: cover;
    object-position: center;
  }
}

`