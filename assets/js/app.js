// JavaSccript Clock
const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function getCurrentBanglaTime12Hour() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const isPM = hours >= 12;

  if (hours > 12) {
    hours -= 12;
  }

  const banglaHours = convertToBanglaDigits(hours);
  const banglaMinutes = convertToBanglaDigits(minutes);
  const banglaSeconds = convertToBanglaDigits(seconds);
  const amPm = isPM ? 'পি. এম' : 'এম';

  const clock_hour = document.querySelector(".clock_hour");
  const clock_minute = document.querySelector(".clock_minute");
  const clock_second = document.querySelector(".clock_seconds");
  const clock_am = document.querySelector(".clock_am");

  clock_hour.innerText = banglaHours;
  clock_minute.innerText = banglaMinutes;
  clock_second.innerText = banglaSeconds;
  clock_am.innerHTML = amPm;
}

function convertToBanglaDigits(number) {
  const digits = number.toString().split('');
  return digits.map(digit => banglaDigits[digit]).join('');
}

setInterval(getCurrentBanglaTime12Hour, 1000);

getCurrentBanglaTime12Hour();


// banner slider

$(function (e) {
  "use strict";
  e(".banner_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: !0,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".slider_arrow"),
  })
});

// Testimonial slider

$(function (e) {
  "use strict";
  e(".testimonial_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: !0,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".arrow_testiminal"),
  })
});

// magnific popup

$('.video_popup').magnificPopup({
  type: 'iframe'
});

// active nav

const toggleNav = document.getElementById("toggle_nav");

// Function to remove classes from elements
function removeClasses() {
  toggleNav.classList.remove("activeToggle");
}

// Add event listener to window
window.addEventListener("click", function(event) {
  // Check if click occurred outside of navWrapper and toggleNav
  if (!navWrapper.contains(event.target) && !toggleNav.contains(event.target)) {
    removeClasses();
  }
});

// Add event listener to toggleNav
toggleNav.addEventListener("click", function(event) {
  // Prevent event from bubbling up to window
  event.stopPropagation();
  // Toggle classes on elements
  toggleNav.classList.toggle("activeToggle");
});
