import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Root>
      <div className="container">
        <section className="top_section">
          <p>
            To access and use all the features of Apple&nbsp;Card, you must add
            Apple&nbsp;Card to Wallet on an iPhone or iPad with the latest
            version of iOS or iPadOS. Update to the latest version by going to
            Settings &gt; General &gt; Software Update. Tap Download
            and&nbsp;Install.
          </p>
          <p>Available for qualifying applicants in the United&nbsp;States.</p>
          <p>
            Apple&nbsp;Card is issued by Goldman Sachs Bank USA,
            Salt&nbsp;Lake&nbsp;City&nbsp;Branch.
          </p>
          <p>
            Learn more about how Apple&nbsp;Card applications are evaluated at{" "}
            <a href="https://support.apple.com/kb/HT209218">
              support.apple.com/kb/HT209218
            </a>
            .
          </p>
        </section>
        <hr />

        {/* Footer menu section */}
        <div className="menu_section">
          <div className="shop_learn footer_menus">
            <h2>Shop and Learn</h2>
            {shopLearn.map((i) => {
              return <a href={i.link}>{i.name}</a>;
            })}
          </div>
          <div className="shop_learn footer_menus">
            <h2>Shop and Learn</h2>
            {service.map((i) => {
              return <a href={i.link}>{i.name}</a>;
            })}
          </div>
          <div className="shop_learn footer_menus">
            <h2>Shop and Learn</h2>
            {appleStore.map((i) => {
              return <a href={i.link}>{i.name}</a>;
            })}
            <h2>Shop and Learn</h2>
            {appleStore.map((i) => {
              return <a href={i.link}>{i.name}</a>;
            })}
          </div>
          <div className="shop_learn footer_menus">
            <h2>Shop and Learn</h2>
            {appleStore.map((i) => {
              return <a href={i.link}>{i.name}</a>;
            })}
          </div>
          <div className="shop_learn footer_menus">
            <h2>Shop and Learn</h2>
            {appleStore.map((i) => {
              return <a href={i.link}>{i.name}</a>;
            })}
          </div>
        </div>

        <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a  href="#"> other retailer </a>
            near you. <span className="nowrap">Or call 1-800-MY-APPLE.</span>
          </p>
        <hr />
        {/* Footer bottom section */}
        <div className="bottom_section">
          <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
          <p className="bottom_menu">
            {bottomFooter.map((i)=>{
              return(
                <a href='#'>{i.name}</a>
              )
            })}
          </p>
          <p>United States</p>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background: #f1f1f3;
   p {
    font-size: 12px;
    color:#6e6e73;
    line-height: 16px;
    margin: 10px 0px;
  }
  a{
    color:#6e6e73;
  }
  .top_section{
    
    a:hover{
      text-decoration: underline;
    }
  }
  section.top_section {
    margin: 20px 0px;
}
  .menu_section {
    margin:20px 0px;
  }

  .footer_menus {
    display: flex;
    gap: 10px;
    flex-direction: column;
    h2{
      font-size: 12px;
      font-weight: 600;
    }
    a{
      font-size: 12px;
      font-weight: 400;
      color:#424245;
    }
  }
  .menu_section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
.bottom_section {
  display: flex;
  justify-content: space-between;
}
p.bottom_menu {
  display: flex;
}
.bottom_menu a {
  border-right: 1px solid #adadad;
  padding: 0px 10px;
}
.bottom_menu a:last-child{
  border:none;
}
`;


const bottomFooter =[
  {
    id:1,
    name:'Privacy Policy'
  },
  {
    id:2,
    name:'Terms of Use'
  },
  {
    id:3,
    name:'Sales and Refunds'
  },
  {
    id:4,
    name:'Legal'
  },
  {
    id:5,
    name:'Site map'
  },
]
const appleStore = [
  {
    id: 1,
    name: "Store",
    link: "#",
  },
  {
    id: 2,
    name: "Mac",
    link: "#",
  },
  {
    id: 3,
    name: "iPad",
    link: "#",
  },
  {
    id: 4,
    name: "iPhone",
    link: "#",
  },
  {
    id: 5,
    name: "Watch",
    link: "#",
  },
  {
    id: 6,
    name: "AirPods",
    link: "#",
  },
  {
    id: 7,
    name: "TV & Home",
    link: "#",
  },
  {
    id: 8,
    name: "AirTag",
    link: "#",
  },
  {
    id: 9,
    name: "Accessories",
    link: "#",
  },
  {
    id: 10,
    name: "Gift Cards",
    link: "#",
  },
];
const service = [
  {
    id: 1,
    name: "Store",
    link: "#",
  },
  {
    id: 2,
    name: "Mac",
    link: "#",
  },
  {
    id: 3,
    name: "iPad",
    link: "#",
  },
  {
    id: 4,
    name: "iPhone",
    link: "#",
  },
  {
    id: 5,
    name: "Watch",
    link: "#",
  },
  {
    id: 6,
    name: "AirPods",
    link: "#",
  },
  {
    id: 7,
    name: "TV & Home",
    link: "#",
  },
  {
    id: 8,
    name: "AirTag",
    link: "#",
  },
  {
    id: 9,
    name: "Accessories",
    link: "#",
  },
  {
    id: 10,
    name: "Gift Cards",
    link: "#",
  },
];
const shopLearn = [
  {
    id: 1,
    name: "Store",
    link: "#",
  },
  {
    id: 2,
    name: "Mac",
    link: "#",
  },
  {
    id: 3,
    name: "iPad",
    link: "#",
  },
  {
    id: 4,
    name: "iPhone",
    link: "#",
  },
  {
    id: 5,
    name: "Watch",
    link: "#",
  },
  {
    id: 6,
    name: "AirPods",
    link: "#",
  },
  {
    id: 7,
    name: "TV & Home",
    link: "#",
  },
  {
    id: 8,
    name: "AirTag",
    link: "#",
  },
  {
    id: 9,
    name: "Accessories",
    link: "#",
  },
  {
    id: 10,
    name: "Gift Cards",
    link: "#",
  },
];
