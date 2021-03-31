import React from 'react';  

const Chef = () => {
    return (
        <section id="chefs" class="chefs">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Chefs</h2>
          <p>Our Proffesional Chefs</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <img src="assets/img/chefs/design.jpg" class="img-fluid" alt="" text-align="center"/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Nutnisa Thongrussamee (6213106)</h4>
                  <span>Master Chef</span>
                </div>
                <div class="social">
                  <a href="https://web.facebook.com/De.xyz.Sign"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/oohdesign/"><i class="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/chefs/khushi.jpg" class="img-fluid" alt="" text-align="center"/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Mushi Sonthliwal (6213102)</h4>
                  <span>Chef</span>
                </div>
                <div class="social">
                  <a href="https://web.facebook.com/profile.php?id=100004039953418"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/khushi_slw/"><i class="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section>
    )
}
export default Chef;
