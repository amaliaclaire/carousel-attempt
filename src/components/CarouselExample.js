import React from 'react'
import ReactDOM from 'react-dom'

import { Carousel } from "react-responsive-carousel";


class CarouselExample extends React.Component {

  render () {
    return (
      <div>
      <Carousel autoPlay>
        <div>
          <img src="https://image.shutterstock.com/image-photo/seductive-brunette-woman-posing-on-600w-1360452281.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://image.shutterstock.com/image-photo/seductive-brunette-woman-undresses-elegant-260nw-1320854861.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://image.shutterstock.com/image-photo/young-model-works-on-webcam-600w-1360452287.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://image.shutterstock.com/image-photo/beauty-yong-brunette-woman-sitting-600w-552601249.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="https://image.shutterstock.com/image-photo/beautiful-young-girl-underwear-600w-501906214.jpg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="https://image.shutterstock.com/image-photo/sexy-woman-black-lingerie-heels-600w-575934553.jpg" />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src="https://image.shutterstock.com/image-photo/sexy-woman-black-lingerie-heels-600w-575936158.jpg" />
          <p className="legend">Legend 7</p>
        </div>
  

      </Carousel>
      </div>
    )
  }
}


export default CarouselExample;
