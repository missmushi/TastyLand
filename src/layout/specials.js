import React from 'react';  

const Specials = () => {
    return (
<section id="specials" class="specials">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Specials</h2>
          <p>Check Our Specials</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Timballo del Gattopardo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Insalata di rinforzo </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Tortellini</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Zabaglione</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Macedonia di frutta</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Timballo del Gattopardo</h3>
                    <p class="font-italic">A grand, luxurious and filling dish of macaroni and meat encased in pastry, Timballo del Gattopardo translates as ‘The Leopard’s Pie’ and is named after Giuseppe di Tomasi di Lampedusa, a nineteenth century Sicilian prince who wrote Il Gattopardo, one of Italy’s most famous novels. The original recipe contained eggs from the ovary of a chicken, but hard boiled eggs work just as well today.</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-1.png" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Insalata di rinforzo </h3>
                    <p class="font-italic">Insalata di rinforzo or burdiglione is a traditional Italian salad originating from Naples. It consists of a mix of pickled and fresh vegetables. In order to prepare it, the bay leaves, peppercorns, carrots, bell peppers, and celery are cooked in a mix of water, white wine vinegar, salt, and sugar.</p>
                    <p>The pickled vegetables are combined with cooked cauliflower, olives, capers, anchovies, and parsley. The salad is seasoned with salt and pepper, then drizzled with vinegar and olive oil. </p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-2.png" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Tortellini</h3>
                    <p class="font-italic">Tortellini are ring-shaped pastas that are usually stuffed with cheese or meat. Tortellini are traditionally served in capon broth, which could explain why they make the perfect addition to a variety of soups.</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-3.png" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Zabaglione</h3>
                    <p class="font-italic">Zabaglione is a simple Italian dessert made of egg yolks, sugar, and Marsala wine. It is usually served warm, though it can be served cold, or as a sauce, or even frozen.</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-4.png" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-5">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Macedonia di frutta</h3>
                    <p class="font-italic">most typical of summer desserts in Italy, often served with some lemon sorbet. But a macedonia can be made any time of year, with almost any combination of fruits in season.</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/specials-5.png" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}
export default Specials;
