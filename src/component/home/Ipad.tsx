import styled from "styled-components";
export default function Ipad() {
  return (
    <Root>
        <div className="container">
      <div className="bg_section">
      
          <div>
          <img src='/images/image1.jpg' alt='loding...'/>
          </div>
        <div className="content_box">
          <h2 className="headline">iPad</h2>
          <h3 className="subhead">Lovable. Drawable. Magical.</h3>
          <p> Available starting 10.26 </p>
          <div className="cta-links">
            <a className="icon icon-after icon-chevronright" href="#"> Learn more </a>
            <a className="icon icon-after icon-chevronright" href="#"> Order now </a>
          </div>
        </div>
        </div>
       
      </div>
    </Root>
  );
}
const Root = styled.section`
.bg_section {
  display: flex;
  align-items: center;
  justify-content: center;
  >div{
    flex:1;
  }
}
.content_box {
  text-align:center;
}
`;
