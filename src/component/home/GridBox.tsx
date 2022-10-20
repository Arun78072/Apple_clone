import React from 'react'
import styled from 'styled-components'
export default function GridBox() {
  return (
    <Root>
         <div className="grid_view">
        <div>
          <img src="/images/image4.jpg" alt="loding..." />
        </div>
        <div>
          <img src="/images/image5.jpg" alt="loding..." />
        </div>
        <div>
          <img src="/images/image6.jpg" alt="loding..." />
        </div>
        <div>
          <img src="/images/image7.jpg" alt="loding..." />
        </div>
        <div>
          <img src="/images/image8.jpg" alt="loding..." />
        </div>
        <div>
          <img src="/images/image9.jpg" alt="loding..." />
        </div>
      </div>
    </Root>
  )
}

const Root = styled.section`
.grid_view {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`