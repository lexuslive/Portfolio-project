// Funtion for the number of years of coding on webpage
const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "1999-07-30";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);


// Function for button feature on the website
// Get the button:
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when user scrolls down 100px from the top
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

window.onscroll = function() {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the page
scrollTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};