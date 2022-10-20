import styled from "styled-components";
export default function AppleTv() {
  return (
    <Root>
      <div className="bg_section">
        <img src="/images/image3.jpg" alt="loding..." />
      </div>
      <div className="content_section">
        <img src="/images/image10.png" alt="loding..." />
        <div>
          <h3 className="subhead">The Apple experience. Cinematic in every sense.</h3>
          <p> Available starting 11.26 </p>
          <div className="cta-links">
            <a className="icon icon-after icon-chevronright" href="#">Learn more
            </a>
            <a className="icon icon-after icon-chevronright" href="#"> Order now  </a>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
position: relative;
  .bg_section img {
    height: 640px;
    width: 100%;
    object-fit: cover;
  }
  .content_section {
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 130px;
  }
  .subhead{
    font-size: 24px;
    margin: 10px 0px;
  }
  p{
    margin: 10px 0px;
    color:#6e6e73;
    font-size: 19px;
    font-weight: 400;
  }
  }
`;
