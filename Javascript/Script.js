


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) { 
    navbar.classList.remove('default2');
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('default');
    
  }
});


//   Scroll Reveal Animation

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.blog-card, .account-card, .latest-card');
  window.addEventListener('scroll', checkCards);

  function checkCards() {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  }

  checkCards(); 
});





document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.reveal-card');

  window.addEventListener('scroll', checkCards);

  function checkCards() {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  }

  checkCards(); 
});




// Section


document.getElementById("home-btn").addEventListener("click", function () {
  document.getElementById("home-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("services-btn").addEventListener("click", function () {
  document.getElementById("services-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("account-btn").addEventListener("click", function () {
  document.getElementById("account-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact-btn").addEventListener("click", function () {
  document.getElementById("Contact-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("search-icon").addEventListener("click", function () {
  document.getElementById("search-section").scrollIntoView({ behavior: "smooth" });
});


// DropDown

  function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove("show");
      }
    }
  }

 



  let currentVisible = 2; 
  const cards = document.querySelectorAll(".blog-card");
  const loadMoreBtn = document.getElementById("more-btn");

  loadMoreBtn.addEventListener("click", function () {
    let next = currentVisible + 2;
    for (let i = currentVisible; i < next && i < cards.length; i++) {
      cards[i].classList.remove("hidden");
    }
    currentVisible = next;
    if (currentVisible >= cards.length) {
      loadMoreBtn.style.display = "block";
    }
  });



  const topBtn = document.getElementById("topBtn");

  // When the user scrolls down 100px, show the button
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  // When the user clicks the button, scroll to the top smoothly
  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
















  
  const container = document.querySelector('.container');
  const colorBoxes = container.querySelectorAll('.color-box');
  const nextButton = document.getElementById('register');
  const backButton = document.getElementById('back-button');
  const backbtn3 = document.getElementById('back3');
  const forgets = document.getElementById('forget');
  let currentIndex = 0;
  
  nextButton.addEventListener('click', () => {
    colorBoxes[currentIndex].classList.remove('active');
    colorBoxes[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % colorBoxes.length;
    colorBoxes[currentIndex].classList.add('active');
    colorBoxes[currentIndex].style.transform = 'translateX(0)';
    nextButton.style.display = 'block';
    backButton.style.display = 'block';
  });
  
  backButton.addEventListener('click', () => {
    colorBoxes[currentIndex].classList.remove('active');
    colorBoxes[currentIndex].style.transform = 'translateX(100%)';
    currentIndex = (currentIndex - 1 + colorBoxes.length) % colorBoxes.length;
    colorBoxes[currentIndex].classList.add('active');
    colorBoxes[currentIndex].style.transform = 'translateX(0)';
    backButton.style.display = 'block';
    nextButton.style.display = 'block';
  });






  
 
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach(section => {
      const image = section.querySelector('.bg-image');
      const rect = section.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const offsetTop = section.offsetTop;
      const distance = scrollTop - offsetTop;
      image.style.transform = `translateY(${distance * 0.3}px)`; 
    });
  });




  const closeBtn = document.getElementById("close-btn");
  const cookieBox = document.getElementById("cookie-box");

  closeBtn.addEventListener("click", () => {
    
    cookieBox.classList.add("hide");
    
   
    setTimeout(() => {
      cookieBox.style.display = "none";
    }, 500); 
  });