import styled from "styled-components"
function IpadPro() {
  return (
    <Root>
          <img src='/images/image2.jpg' alt='loding...'/>
        <div className="content_box">
          <h2 className="headline">iPad Pro</h2>
          <h3 className="subhead">Supercharged by </h3>
          <p className="m1chip"> Available starting 10.26<span><img src='/images/m2chip.png' /></span> </p>
          <div className="cta-links">
            <a className="icon icon-after icon-chevronright" href="#"> Learn more </a>
            <a className="icon icon-after icon-chevronright" href="#"> Order now </a>
          </div>
        </div>
    </Root>
  )
}

export default IpadPro
const Root =styled.section`
position:relative;
.content_box{
  text-align:center;
  top:0px;
  position: absolute;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
}
p.m1chip {
  display: flex;
  align-items: center;
   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

`