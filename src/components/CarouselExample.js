import React from 'react'
import ReactDOM from 'react-dom'

import { Carousel } from "react-responsive-carousel";


class CarouselExample extends React.Component {

  render () {
    return (
      <div>
        <Carousel autoPlay>
        <div>
                  <img src="assets/1.jpeg" />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <img src="assets/2.jpeg" />
                  <p className="legend">Legend 2</p>
              </div>
        </Carousel>
      </div>
    )
  }
}


export default CarouselExample;
