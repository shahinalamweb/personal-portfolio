import ScrollReveal from "scrollreveal";

import './style.css'

// Toggle Button
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navCloseIcon = document.getElementById("nav-close");

navLink.forEach((link) => (
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })
))

 navCloseIcon.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })

  hamburger.addEventListener("click", () => {
        navMenu.classList.remove("hidden")
    })


// Dark Light Theme
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark"){
    darkMode();
}else{
    lightMode();
}

themeBtn.addEventListener("click", (e) =>{
    if(localStorage.getItem("mode") == "light"){
        darkMode();
    }else{
        lightMode();
    }
})

function darkMode(){
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode(){
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode","light");
}

//   TABS 

/*==================== TABS ====================*/



let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
const all = document.querySelectorAll(".work_card") ;
const uiuxs = document.querySelectorAll(".uiux") ;
const brandings = document.querySelectorAll(".branding");
const apps = document.querySelectorAll(".app");


indicator.style.width = tabs[0].getBoundingClientRect().width + "px";

indicator.style.left =
  tabs[0].getBoundingClientRect().left -
  tabs[0].parentElement.getBoundingClientRect().left +
  "px";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    indicator.style.width =
      tab.getBoundingClientRect().width + "px";

    indicator.style.left =
      tab.getBoundingClientRect().left -
      tab.parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((t) =>
      t.classList.remove("text-white")
    );

    tab.classList.add("text-white");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach(item =>{
        item.style.display = "none"
    })

    if(tabval == "uiux") {
        uiuxs.forEach(item => {
         item.style.display = "block"
        });
    }else if(tabval == "branding") {
        brandings.forEach(item => {
         item.style.display = "block"
        });
    }else if(tabval == "app") {
        apps.forEach(item => {
         item.style.display = "block"
        });
    } else {
        all.forEach(item =>{
        item.style.display = "block"
    })
    }  

  });
});


  // scroll up button
  
  const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollUp);


/*~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~*/

const scrollHeader = () => {
  const navbar = document.getElementById("navbar");
  const aTag = document.querySelectorAll("nav ul li a");
  const themeToggle = document.getElementById("theme-toggle");
  const hamburger = document.getElementById("hamburger");

  if (window.scrollY >= 200) {
    navbar.classList.add("bg-blackDark");

    aTag.forEach((item) => {
      item.classList.add("text-white");
    });

    themeToggle.classList.add("text-white");
    hamburger.classList.add("text-white");

  } else {
    navbar.classList.remove("bg-blackDark");

    aTag.forEach((item) => {
      item.classList.remove("text-white");
    });

    themeToggle.classList.remove("text-white");
    hamburger.classList.remove("text-white");
  }
};

window.addEventListener("scroll", scrollHeader);


/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "hero";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");

        if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);


// scroll Reveal Animation 
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1200,
    delay: 200,
    reset: false
});

sr.reveal('.hero__image');
sr.reveal('.hero__content',{origin: "bottom"});
sr.reveal('.hero__footer',{origin: "bottom", delay: 400 });


sr.reveal('.service__top',{origin: "bottom"});
sr.reveal('.service_item',{origin: "bottom", interval:150});

sr.reveal('.recent_work_top',{origin: "bottom"});
sr.reveal('.recent_work_tabs',{origin: "bottom", delay: 300 });
sr.reveal('.work_card',{origin: "bottom", delay: 150 });


sr.reveal('.exp_top',{origin: "top"});
sr.reveal('.exp_card',{origin: "left", interval:150});
sr.reveal('.edu_top',{origin: "top"});
sr.reveal('.edu_card',{origin: "right", interval:150});

sr.reveal('.skills_top',{origin: "bottom"});
sr.reveal('.skills_card',{origin: "bottom", interval:150});

sr.reveal('.blog_top',{origin: "top"});
sr.reveal('.blog_card',{origin: "bottom", interval:150});

sr.reveal('.contract_form',{origin: "left"});
sr.reveal('.contract_item',{origin: "right", interval:150});








