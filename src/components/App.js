import React from 'react';
import ReactDOM from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselExample from './CarouselExample'
import Carousel from 'react-responsive-carousel'



class App extends React.Component {
    render() {
      return (
        <div>
          <CarouselExample />
        </div>
      )
    }
}

export default App;
