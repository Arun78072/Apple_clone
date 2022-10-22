import React, { useState } from "react";
import styled from "styled-components";
import FooterMenus from "./FooterMenus";
export default function Footer() {
  const [shopOpen, setShopOpen] = useState(false)
  return (
    <Root>
      <div className="container_box">
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
            <FooterMenus menu={shopLearn} title='Shop and Learn' />
          </div>
          <div className="shop_learn footer_menus">
            <FooterMenus menu={service} title='Service' />
            <FooterMenus menu={account} title='Account' />
          </div>
          <div className="shop_learn footer_menus">
            <FooterMenus menu={appleStore} title='Apple Store' />
            
          </div>
          <div className="shop_learn footer_menus">
            <FooterMenus menu={forbusiness} title='For Business' />
            <FooterMenus menu={foreducation} title='For Education' />
            <FooterMenus menu={ForHealthcare} title='For Health Care' />
            <FooterMenus menu={ForGovernment} title='For Government' />
          </div>
          <div className="shop_learn footer_menus">
            <FooterMenus menu={applevalues} title='Apple Values' />
            <FooterMenus menu={aboutapple} title='About Apple' />
          </div>
        </div>

        <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#"> other retailer </a>
          near you. <span className="nowrap">Or call 1-800-MY-APPLE.</span>
        </p>
        <hr />
        {/* Footer bottom section */}
        <div className="bottom_section">
          <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
          <p className="bottom_menu">
            {bottomFooter.map((i) => {
              return (
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
  .container_box{
    max-width: 980px;
    margin: 0 auto;
    width:100%;
    padding: 20px;
  }
   p {
    font-size: 12px;
    color:#6e6e73;
    line-height: 16px;
    margin: 10px 0px;
  }
  a{
    color:#6e6e73;
    text-decoration:none;
  }
  a:hover{
    text-decoration: underline;
  }
  .top_section{
    a:hover{
      text-decoration: underline;
    }
  }
  section.top_section {
    margin: 20px 0px;
}
  .footer_menus {
    display: flex;
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
    margin:20px 0px;
    grid-template-columns: repeat(5, 1fr);
    @media(max-width:768px){
      grid-template-columns:1fr;
    }
}
.bottom_section {
  display: flex;
  justify-content: space-between;
  @media(max-width:768px){
    flex-direction: column;
  }
}
p.bottom_menu {
  display: flex;
  flex-wrap: wrap;
}
.bottom_menu a {
  border-right: 1px solid #adadad;
  padding: 0px 10px;
}
.bottom_menu a:last-child{
  border:none;
}
`
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
    name: "Find A Store",
    link: "#",
  },
  {
    id: 2,
    name: "Genius Bar",
    link: "#",
  },
  {
    id: 3,
    name: "Today at Apple",
    link: "#",
  },
  {
    id: 4,
    name: "Apple Camp",
    link: "#",
  },
  {
    id: 5,
    name: "Apple Store App",
    link: "#",
  },
  {
    id: 6,
    name: "Refurbished and Clearance",
    link: "#",
  },
  {
    id: 7,
    name: "Financing",
    link: "#",
  },
  {
    id: 8,
    name: "Apple Trade In",
    link: "#",
  },
  {
    id: 9,
    name: "Order Status",
    link: "#",
  },
  {
    id: 10,
    name: "Shoping Help",
    link: "#",
  },
];
const service = [
  {
    id: 1,
    name: "Apple Music",
    link: "#",
  },
  {
    id: 2,
    name: "Apple Tv+",
    link: "#",
  },
  {
    id: 3,
    name: "Apple Fitness+",
    link: "#",
  },
  {
    id: 4,
    name: "Apple News+",
    link: "#",
  },
  {
    id: 5,
    name: "Apple Arcade",
    link: "#",
  },
  {
    id: 6,
    name: "iCloud",
    link: "#",
  },
  {
    id: 7,
    name: "Apple One",
    link: "#",
  },
  {
    id: 8,
    name: "Apple Card",
    link: "#",
  },
  {
    id: 9,
    name: "Apple Books",
    link: "#",
  },
  {
    id: 10,
    name: "Apple Podcasts",
    link: "#",
  },
  {
    id: 11,
    name: "Apple Store",
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
const forbusiness = [
  {
    id: 1,
    name: "Apple and Business",
    link: "#",
  },
  {
    id: 1,
    name: "Shop for Business",
    link: "#",
  },
  
]
const foreducation = [
  {
    id: 1,
    name: "Apple and Education",
    link: "#",
  },
  {
    id: 2,
    name: "Shop for k-12",
    link: "#",
  },
  {
    id: 3,
    name: "Shop for College",
    link: "#",
},
]
  const ForHealthcare = [
    {
      id: 1,
      name: "Apple in Healthcare",
      link: "#",
    },
    {
      id: 2,
      name: "Health on Apple Watch",
      link: "#",
    },
    {
      id: 3,
      name: "Health Records on iphone",
      link: "#",
    },
]
const ForGovernment = [
  {
    id: 1,
    name: "Shop for Government",
    link: "#",
  },
  {
    id: 2,
    name: "Shop for Veternans and Military",
    link: "#",
  },
  
]
const account = [
  {
    id: 1,
    name: "Manage Your Apple ID",
    link: "#",
  },
  {
    id: 2,
    name: "Apple Store Account",
    link: "#",
  },
  {
    id: 3,
    name: "iCloud.com",
    link: "#",
  },
  
]
const applevalues = [
  {
    id: 1,
    name: "Accessibility",
    link: "#",
  },{
    id: 2,
    name: "Education",
    link: "#",
  },
  {
    id: 3,
    name: "Environment",
    link: "#",
  },
  {
    id: 4,
    name: "Inclusion and Diversity",
    link: "#",
  },
  {
    id: 5,
    name: "Privacy",
    link: "#",
  },
  {
    id: 6,
    name: "Recial Equity and Justice",
    link: "#",
  },
  {
    id: 7,
    name: "Supplier Responsibility",
    link: "#",
  },
]
const aboutapple = [
  {
    id: 1,
    name: "Newsroom",
    link: "#",
  },
  {
    id: 2,
    name: "Apple Leadership",
    link: "#",
  },
  {
    id: 3,
    name: "Career Oppurtunities",
    link: "#",
  },
  {
    id: 4,
    name: "Investors",
    link: "#",
  },
  {
    id: 5,
    name: "Ethics & Compliance",
    link: "#",
  },
  {
    id: 6,
    name: "Events",
    link: "#",
  },
  {
    id: 7,
    name: "Contact Apple",
    link: "#",
  },
]