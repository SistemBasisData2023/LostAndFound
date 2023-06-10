import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      major: 'Computer Science',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper tortor vel massa dapibus, ac hendrerit nisi facilisis.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      major: 'Business Administration',
      text: 'Fusce pellentesque ultricies sem, eget varius lacus ullamcorper vel. In feugiat volutpat enim, vel congue purus ultrices non.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      major: 'Engineering',
      text: 'Pellentesque consequat malesuada sapien eu aliquam. Morbi lobortis lectus non justo tincidunt volutpat.',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} swipeable={true} draggable={false} showDots={true}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-item">
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-major">{testimonial.major}</p>
          <p className="testimonial-text">{testimonial.text}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default TestimonialCarousel;
