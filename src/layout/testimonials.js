import React from 'react';  

const Testimonials = () => {
    return (
        <section id="testimonials" class="testimonials section-bg">
        <div class="container" data-aos="fade-up">
  
    <div class="section-title">
    <h2>Reviews</h2>
    <p>What they're saying about us</p>
    </div>
    
    
  
          <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">
  
              <div class="swiper-slide">
                <div class="testimonial-item">
                  <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  What a wonderful experience. From the delicious food to the super nice service. I can't wait to return for more. I even told some friends that it's a must visit spot. Lastly, the decor, music, and people added to our groups wonderful night. 
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                  <h3>Luna Smiths</h3>
                  <h4>Famous Youtuber</h4>
                  </div>
              </div>
  
        
  
            </div>
            <div class="swiper-pagination"></div>
          </div>
  
        </div>
      </section>
    )
}
export default Testimonials;
