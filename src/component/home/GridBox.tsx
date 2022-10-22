import React from 'react'
import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi'
import { FaApple } from 'react-icons/fa'
export default function GridBox() {
  return (
    <Root>
      <div className="grid_view">
        <div style={{background:'#000'}}>
          <img src="/images/image4.jpg" alt="loding..." />
          <div className='content dark' >
            <h1>iPhone 14 Pro</h1>
            <h2>Pro. Beyond.</h2>
            <div className="cta_links">
              <a className="primary_btn" href="#">Learn more <FiChevronRight /></a>
              <a className="primary_btn" href="#"> Order now <FiChevronRight /></a>
            </div>
          </div>
        </div>
        <div style={{background:'#fbfbfd'}}>
          <img src="/images/image5.jpg" alt="loding..." />
          <div className='content white'>
            <h1>iPhone 14</h1>
            <h2>Big and bigger.</h2>
            <div className="cta_links">
              <a className="primary_btn" href="#">Learn more <FiChevronRight /></a>
              <a className="primary_btn" href="#"> Order now <FiChevronRight /></a>
            </div>
          </div>
        </div>
        <div className='Ultra' style={{background:'#fbfbfd'}}>
          <img src="/images/image6.jpg" alt="loding..." />
          <div className='content white'>
            <h1><FaApple />Watch </h1>
            <span>Ultra</span>
            <h2>Adventure awaits.</h2>
            <div className="cta_links">
              <a className="primary_btn" href="#">Learn more <FiChevronRight /></a>
              <a className="primary_btn" href="#"> Order now <FiChevronRight /></a>
            </div>
          </div>
        </div>
        <div className='series_8' style={{background:'#000'}}>
          <img src="/images/image7.jpg" alt="loding..." />
          <div className='content dark'>
            <h1><FaApple /> Watch </h1>
            <span>Series 8</span>
            <h2>A healthy leap ahead.</h2>
            <div className="cta_links">
              <a className="primary_btn" href="#">Learn more <FiChevronRight /></a>
              <a className="primary_btn" href="#"> Order now <FiChevronRight /></a>
            </div>
          </div>
        </div>
        <div style={{background:'#000'}}>
          <img src="/images/image8.jpg" alt="loding..." />
          <div className='content dark'>
            <h1>AirPods Pro</h1>
            <h2>Rebuilt from the sound up.</h2>
            <div className="cta_links">
              <a className="primary_btn" href="#">Learn more <FiChevronRight /></a>
              <a className="primary_btn" href="#"> Order now <FiChevronRight /></a>
            </div>
          </div>
        </div>
        <div style={{background:'#fbfbfd'}}>
          <img src="/images/image9.jpg" alt="loding..." />
          <div className='content white'>
            <h1><FaApple />Card</h1>
            <h2>Get up to 3% Daily Cash back with every purchase.</h2>
            <div className="cta_links">
              <a className="primary_btn" href="#">Learn more <FiChevronRight /></a>
              <a className="primary_btn" href="#"> Order now <FiChevronRight /></a>
            </div>
          </div>
        </div>
      </div>
    </Root>
  )
}

const Root = styled.section`
.grid_view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    @media(max-width:730px){
      grid-template-columns: 1fr;
    }
    &>div{
      position: relative;
      height: 600px;
      display: flex;
      justify-content: end;
      align-items: end;
      @media(max-width:1024px){
        height: 530px;
      }
      @media(max-width:786px){
        height: 500px;
      }
      
      &.Ultra{

      }
    }
    img{
      height:100%;
      object-fit: cover;
      @media(max-width:786px){
        height: 400px;
      }
    }
    h1{
      font-size: 40px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      @media(max-width:450px){
        font-size: 32px;
      }
    }
    h2{
      font-weight: 400;
      font-size: 21px;
    }
    span {
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 600;
    }
    .series_8 span {
      color: #a1282b;
    }
    .Ultra span{
      color:#fa7834;
      font-size: 14px;
    }
    .cta_links{
      margin-top: 18px;
      a.primary_btn{
        color:#2997ff;
        font-size: 17px;
      }
    }
  }
  .content{
    text-align: center;
    position: absolute;
    top: 26px;
    left: 50%;
    transform: translateX(-50%);
    width:100%;
    .cta_links{
      @media(max-width:768px){
        margin-top: 4px;
      }
    }
  }
  .content.dark {
    color:#fff;
  }
`