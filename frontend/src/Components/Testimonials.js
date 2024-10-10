import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Testimonials.css';

const imagePath = "src/Img/Cooking-bro.png";



const testimonialsData = [
  {
    name: "John Doe",
    text: "Cook and Clean has transformed my home life. Delicious meals and a spotless home, what more could I ask for?",
    image: imagePath
  },
  {
    name: "Jane Smith",
    text: "I love the cleaning tips and the recipes are fantastic. My family enjoys every meal I prepare!",
    image: "path/to/jane-smith.jpg"
  },
  {
    name: "Emily Johnson",
    text: "A great community and wonderful resources. Cook and Clean is my go-to site for home care.",
    image: "path/to/emily-johnson.jpg"
  },
  {
    name: "Michael Brown",
    text: "The services are top-notch and very reliable. Highly recommended!",
    image: "path/to/michael-brown.jpg"
  }
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Carousel 
        responsive={responsive} 
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={3000} 
        // showDots={true}
        arrows={false} 
      >
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            {/* <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" /> */}
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
