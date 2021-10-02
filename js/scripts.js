/*!
 * Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//
//var mandrill = require("node-mandrill")("4F8Dvur61Df5br5D6zjg9A");
//import mandrill from "node-mandrill";

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  //Button click handler
  /* const emailSubmitButton = document.getElementById("emailSubmitButton");
  emailSubmitButton.addEventListener("click", () => {
    console.log("emailSubmitButton clicked");
  }); */
});

//Email
const username= "harentalcontact@gmail.com";
const passwd=  "RentalsAdmin1":

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: username,
    Password: passwd,
    To: "nicomach99@gmail.com",
    From: username,
    Subject: "con footer",
    Body: "ssss",
    Attachments: [
      {
        name: "logo.jpeg",
        path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MWDETDVjsz7S_xKPNmn5g3NVsl0Xnk8P9jOs6AcKCTt4vCUoLGzAfl-s2t5-And5gUM&usqp=CAU",
      },
    ],
  }).then((message) => alert("asdasdas"));
}
