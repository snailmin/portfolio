'use strict';

// link click event
const openLink = (url) => {
  window.open(url);
}



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// email
document.emailFrm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // code fragment
    let data = {
      service_id: 'service_o8dhcrc',
      template_id: 'template_olv1qsa',
      user_id: 'F8JW2o4MUTvZhepQ2',
      template_params: {
          'from_name': e.target.fullname.value,
          'from_email': e.target.email.value,
          'message': e.target.message.value
      }
    };

    $.ajax({
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      type: 'post',
      data: JSON.stringify(data),
      contentType: 'application/json',
    }).done(() => {
      alert('메일이 전송되었습니다☺️');
    }).fail((error) => {
      alert('메일 전송에 실패했습니다😥' + JSON.stringify(error));
    })
})