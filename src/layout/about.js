import React from 'react';  

const About = () => {
    return (
        <section id="about" class="about">
        <div class="container" data-aos="fade-up">
  
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
              <div class="about-img" >
                <img src="assets/img/about.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>WARM ATMOSPHERE</h3>
              <p class="font-italic">
              Enjoyable and comfortable atmosphere in the heart of Bangkok. TastyLand offers 50 seating places, surrounding a big fireplace that will make your dining exquisite and enjoyable. Carefully selected music and smart interior design will make you feel like home. TastyLand indoor includes a vine cellar. You can taste any vine from our offering in our vine tasting bar.
              </p>
              <ul>
                <li><i class="bi bi-check-circle"></i> 50 Seating places</li>
                <li><i class="bi bi-check-circle"></i> Fireplace</li>
                <li><i class="bi bi-check-circle"></i> Suitable for large groups</li>
              </ul>
            </div>
          </div>
  
        </div>
      </section>
    )
}
export default About;
