import React from 'react';  

const TopBar  = () => {
    return (
    
        <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-center justify-content-md-between">

      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-phone d-flex align-items-center"><span>+02 621 4784 </span></i>
        <i class="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Fri: 9AM - 12PM</span></i>
      </div>

      <div class="languages d-none d-md-flex align-items-center">
        <ul>
          <li>Design & Khushi</li>
        </ul>
      </div>
    </div>
  </div>
    )
}
export default TopBar;
