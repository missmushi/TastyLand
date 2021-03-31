import React from 'react';  

const Menu = () => {
    return (
        <section id="menu" class="menu section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-appetizer">Appetizer</li>
              <li data-filter=".filter-savoury-dishes">Savoury Dishes</li>
              <li data-filter=".filter-desert">Desert</li>
              <li data-filter=".filter-beverage">Beverage</li>
            </ul>
          </div>
        </div>

        <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">

        <div class="col-lg-6 menu-item filter-appetizer">
            <img src="assets/img/menu/Antipasto-Cups.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Antipasto Cups</a><span>฿45.00</span>
            </div>
            <div class="menu-ingredients">
            Turn salami slices into appetizer shells to fill with the veggies and cheese of your choice.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-savoury-dishes">
            <img src="assets/img/menu/Baked-Lasagna-Roll-Ups.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Baked Lasagna Roll-Ups</a><span>฿189.00</span>
            </div>
            <div class="menu-ingredients">
            This baked lasagna is far better tasting than any store-bought version. Ham and spinach combine for fabulous flavor.
          </div>
          </div>

        <div class="col-lg-6 menu-item filter-appetizer">
            <img src="assets/img/menu/Balsamic-Green-Bean-Salad.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Balsamic Green Bean Salad</a><span>฿79.00</span>
            </div>
            <div class="menu-ingredients">
            Serve up those green beans in a whole new way–with a green bean salad recipe! The tangy flavors and crunch of these balsamic green beans complement any special meal or holiday potluck.
            </div>
          </div>

        <div class="col-lg-6 menu-item filter-appetizer">
            <img src="assets/img/menu/Beef-Spiedini.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Beef Spiedini</a><span>฿80.00</span>
            </div>
            <div class="menu-ingredients">
            An Italian favorite, spiedini are great for holidays and other special occasions. The hearty skewers hold marinated steak pinwheels stuffed with a marinara-and-crumb filling.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-beverage">
            <img src="assets/img/menu/Brandy-Slush.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Brandy Slush</a><span>฿69.00</span>
            </div>
            <div class="menu-ingredients">
            This slush with a hint of citrus is oh, so refreshing. Even if you’re not a tea lover, you’ll likely find the mix of flavors pleasing.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-appetizer">
            <img src="assets/img/menu/Bruschetta-from-the-Grill.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Bruschetta from the Grill</a><span>฿100.00</span>
            </div>
            <div class="menu-ingredients">
            Dijon mustard, mayonnaise and oregano make a savory spread for chopped tomatoes, garlic and fresh basil in this fun twist on a favorite appetizer.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-savoury-dishes">
            <img src="assets/img/menu/Grilled-Veggie-Pizza.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Grilled Veggie Pizzaa</a><span>฿369.00</span>
            </div>
            <div class="menu-ingredients">
            Grilling the veggies first brings out their sizzling flavors. Try it with a sprinkling of olives or pine nuts before adding the cheese. 
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-beverage">
            <img src="assets/img/menu/Honey-Citrus-Iced-Tea.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Honey-Citrus Iced Tea</a><span>฿139.00</span>
            </div>
            <div class="menu-ingredients">
            A frozen orange or lemon slice in the glass looks pretty and helps keep this refreshing punch nice and cold. Using honey instead of sugar adds a sweet touch. 
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-savoury-dishes">
            <img src="assets/img/menu/Italian-Stuffed-Beef-Rolls.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Italian Stuffed Beef Rolls</a><span>฿219.00</span>
            </div>
            <div class="menu-ingredients">
            The combination of spinach, artichokes and cream cheese is always a crowd pleaser. Add basil and a roasted red pepper sauce, and you have perfection on a fork! To save time, the stuffed beef filling can be made ahead and chilled. You can also make the sauce ahead and reheat it when you are ready to serve.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-desert">
            <img src="assets/img/menu/Mexican-Chocolate-Biscotti.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Mexican Chocolate Biscotti</a><span>฿99.00</span>
            </div>
            <div class="menu-ingredients">
            Arizona captured the spicy cinnamon flavor of Mexican chocolate in her original recipe for biscotti. The spicy chocolate cinnamon cane sugar is a nice addition to most recipes that feature Mexican chocolate flavors.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-desert">
            <img src="assets/img/menu/Mixed-Berry-Tiramisu.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Mixed Berry Tiramisu</a><span>฿135.00</span>
            </div>
            <div class="menu-ingredients">
            Fresh softened berries star with crisp ladyfinger cookies and mascarpone cheese. Serve it from a glass bowl or in clear dishes to show off the luscious layers.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-savoury-dishes">
            <img src="assets/img/menu/Mushroom-Pasta-Carbonara.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Mushroom Pasta Carbonara</a><span>฿189.00</span>
            </div>
            <div class="menu-ingredients">
            Special creamy and cheesy mushroom carbonara. We serve it with a side salad and rolls to make a complete meal. 
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-beverage">
            <img src="assets/img/menu/Orange-Dream-Mimosas.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Orange Dream Mimosas</a><span>฿119.00</span>
            </div>
            <div class="menu-ingredients">
            Toast with this “grown up” creamsicle beverage. For the kiddos, make a non-alcoholic version with non-alcoholic sparkling wine, sparkling cider or ginger ale.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-appetizer">
            <img src="assets/img/menu/Pepperoni-Pizza-Spread.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Pepperoni Pizza Spread</a><span>฿125.00</span>
            </div>
            <div class="menu-ingredients">
            Loaded with popular pizza ingredients, this cheesy concoction is wonderful on crackers of all kinds.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-savoury-dishes">
            <img src="assets/img/menu/Pressure-Cooker-Beef-Osso-Bucco.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Pressure-Cooker Beef Osso Bucco</a><span>฿225.00</span>
            </div>
            <div class="menu-ingredients">
            Our beef osso bucco boasts a thick, savory sauce complemented by the addition of gremolata, a chopped herb condiment made of lemon zest, garlic and parsley.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-appetizer">
            <img src="assets/img/menu/Roasted-Eggplant-Spread.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Roasted Eggplant Spread</a><span>฿45.00</span>
            </div>
            <div class="menu-ingredients">
            Black pepper and garlic perk up this out-of-the-ordinary spread that hits the spot on a crisp cracker or toasted bread slice. 
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-desert">
            <img src="assets/img/menu/Sicilian-Ice-Cream-Sandwiches.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Sicilian Ice Cream Sandwiches</a><span>฿129.00</span>
            </div>
            <div class="menu-ingredients">
            Chocolate, Nutella, pistachios and cherries come together to create this Sicily-inspired ice cream dessert.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-savoury-dishes">
            <img src="assets/img/menu/Spinach-and-Artichoke-Pizza.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Spinach and Artichoke Pizza</a><span>฿379.00</span>
            </div>
            <div class="menu-ingredients">
            Top it with spinach, artichoke hearts and tomatoes, then add chicken or ham and fresh basil.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-savoury-dishes">
            <img src="assets/img/menu/Spinach-and-Shrimp-Fra-Diavolo.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Spinach and Shrimp Fra Diavolo</a><span>฿199.00</span>
            </div>
            <div class="menu-ingredients">
            This quick dish is spicy, garlicky, saucy and loaded with delicious shrimp. Plus, with the addition of spinach, you’re also getting a serving of veggies.
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-appetizer">
            <img src="assets/img/menu/Tuscan-Truffles.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Tuscan Truffles</a><span>฿55.00</span>
            </div>
            <div class="menu-ingredients">
            An appetizer truffle out of prosciutto, figs and toasted pine nuts. Mascarpone and goat cheese make them melt-in-your-mouth creamy. 
            </div>
          </div>

          <div class="col-lg-6 menu-item filter-savoury-dishes">
            <img src="assets/img/menu/Weekday-Chicken-Cacciatore.jpg" class="menu-img" alt="" />
            <div class="menu-content">
              <a href="#">Weekday Chicken Cacciatore</a><span>฿200.00</span>
            </div>
            <div class="menu-ingredients">
            Chicken cooked “cacciatore” means a dish prepared “hunter-style” with tomatoes, mushrooms, onions and seasonings. We add a touch of white wine to make ours northern Italian-style. 
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}
export default Menu;
