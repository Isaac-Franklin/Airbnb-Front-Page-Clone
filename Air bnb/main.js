var sectionfull = document.querySelector(".iconsgeneral");
var sectionfull2 = document.querySelector(".iconsrightsection");
var nextbutton = document.querySelector(".rightarrow");
var prevbutton = document.querySelector(".leftarrow");
var slides = document.querySelectorAll(".imgslide");
slides = 1;
var n;
n = 100;
// if (window.innerWidth > 1115) {
//   n = window.innerWidth;
// }
function next() {
  //   n = 400;
  if (nextbutton) {
    prevbutton.style.display = "block";
    return (
      sectionfull.scrollTo(n, 0),
      n == 400 ? (n = 1000) : (n = 1000),
      (prevbutton.style.visibility = "visible")
    );
  }
  //   else if (nextbutton) {
  //     return sectionfull.scrollTo(n, 0), n == 400 ? (n = 1000) : null;
  //   }
  next();
}

function prev() {
  n = -400;
  if (nextbutton) {
    if (prevbutton) {
      return (
        sectionfull.scrollTo(n, 0),
        n == -400 ? (n = -1000) : null,
        (prevbutton.style.display = "none")
      );
    }
  } else {
    return null;
  }

  prev();
}

// START OF FIRST IMAGE SLIDER

var fwdarrow = document.querySelector("#imgarrow1");
var fwdarrow12 = document.querySelector("#imgarrow12");
var imageslide = document.querySelector(".carouselimage");
var revBtn = document.querySelector(
  ".choicesection:nth-child(1) ul li:nth-child(2) img"
);

var a;
a = 280;
function fwrd() {
  revBtn.style.display = "block";
  if (fwdarrow) {
    return imageslide.scrollTo(a, 0), a == 280 ? (a = 560) : (a = 1000);
  }
  fwrd();
}

function fwrd12() {
  if (fwdarrow12) {
    a = -1000;
    return (
      imageslide.scrollTo(a, 0),
      a < 560
        ? (revBtn.style.display = "none")
        : (revBtn.style.display = "block")
    );
  }
}

// END OF FIRST IMAGE SLIDER

// START OF SECOND IMAGE SLIDER

var fwdarrow2 = document.querySelector("#imgarrow2");
var revarrow22 = document.querySelector("#imgarrow22");
var imageslide2 = document.querySelector(".carouselimage2");
var revBtn2 = document.querySelector(
  ".choicesection:nth-child(2) ul li:nth-child(2) img"
);

// var slideIndex = imageslide;
var b;
b = 280;
function fwrd2() {
  revBtn2.style.display = "block";
  if (fwdarrow2) {
    return imageslide2.scrollTo(b, 0), b == 280 ? (b = 560) : (b = 1000);
  }
  fwrd2();
}

function rev22() {
  if (revarrow22) {
    b = -1000;
    return (
      imageslide2.scrollTo(b, 0),
      b < 560
        ? (revBtn2.style.display = "none")
        : (revBtn2.style.display = "block")
    );
  }

  if (b < 560) {
    revBtn2.style.display = "none";
  }
}

// END  OF SECOND IMAGE SLIDER

// START OF THIRD IMAGE SLIDER

var fwdarrow3 = document.querySelector("#imgarrow3");
var revarrow3 = document.querySelector("#imgarrow33");
var imageslide3 = document.querySelector(".carouselimage3");
var revBtn3 = document.querySelector(
  ".choicesection:nth-child(3) ul li:nth-child(2) img"
);

var c;
c = 280;
function fwrd3() {
  revBtn3.style.display = "block";
  if (fwdarrow3) {
    console.log("3Clicked!");
    return imageslide3.scrollTo(c, 0), c == 280 ? (c = 560) : (c = 1000);
  }
  fwrd3();
}

function rev3() {
  if (revarrow3) {
    c = -1000;
    return (
      imageslide3.scrollTo(c, 0),
      c < 560
        ? (revBtn3.style.display = "none")
        : (revBtn3.style.display = "block")
    );
  }
}

// END OF THIRD IMAGE SLIDER

// START OF FOURT IMAGE SLIDER

var fwdarrow4 = document.querySelector("#imgarrow4");
var revarrow4 = document.querySelector("#imgarrow44");
var imageslide4 = document.querySelector(".carouselimage4");
var revBtn4 = document.querySelector(
  ".choicesection:nth-child(4) ul li:nth-child(2) img"
);

var d;
d = 280;
function fwrd4() {
  revBtn4.style.display = "block";
  if (fwdarrow4) {
    return imageslide4.scrollTo(d, 0), d == 280 ? (d = 560) : (d = 1000);
  }
  fwrd4();
}

function rev4() {
  if (revarrow4) {
    d = -1000;
    return (
      imageslide4.scrollTo(d, 0),
      d < 560
        ? (revBtn4.style.display = "none")
        : (revBtn4.style.display = "block")
    );
  }
}
// END OF FOURT IMAGE SLIDER

// EFFECTS OF IMAGES FOR THE CAROUSEL STARTS HERE FOR CAROUSEL ONE
var btn = document.querySelector(
  ".choicesection:nth-child(1) ul li:nth-child(1) img"
);

document
  .querySelector(".choicesection:nth-child(1)")
  .addEventListener("mouseover", function () {
    btn.style.display = "block";
  });

document
  .querySelector(".choicesection:nth-child(1)")
  .addEventListener("mouseout", function () {
    btn.style.display = "none";
  });
// NEXT IMAGES FOR THE CAROUSEL ENDS HERE FOR CAROUSEL ONE

// NEXT IMAGES FOR THE CAROUSEL STARTS HERE FOR CAROUSEL TWO

var btn2 = document.querySelector(
  ".choicesection:nth-child(2) ul li:nth-child(1) img"
);

document
  .querySelector(".choicesection:nth-child(2)")
  .addEventListener("mouseover", function () {
    btn2.style.display = "block";
  });

document
  .querySelector(".choicesection:nth-child(2)")
  .addEventListener("mouseout", function () {
    btn2.style.display = "none";
  });

// NEXT IMAGES FOR THE IMAGE FOR THE CAROUSEL ENDS HERE FOR CAROUSEL TWO

// NEXT IMAGES FOR THE CAROUSEL STARTS HERE FOR CAROUSEL THREE

var btn3 = document.querySelector(
  ".choicesection:nth-child(3) ul li:nth-child(1) img"
);

document
  .querySelector(".choicesection:nth-child(3)")
  .addEventListener("mouseover", function () {
    btn3.style.display = "block";
  });

document
  .querySelector(".choicesection:nth-child(3)")
  .addEventListener("mouseout", function () {
    btn3.style.display = "none";
  });
// NEXT IMAGES FOR THE CAROUSEL ENDS HERE FOR CAROUSEL THTREE

// NEXT IMAGES FOR THE CAROUSEL STARTS HERE FOR CAROUSEL FOUR

var btn4 = document.querySelector(
  ".choicesection:nth-child(4) ul li:nth-child(1) img"
);

document
  .querySelector(".choicesection:nth-child(4)")
  .addEventListener("mouseover", function () {
    btn4.style.display = "block";
  });

document
  .querySelector(".choicesection:nth-child(4)")
  .addEventListener("mouseout", function () {
    btn4.style.display = "none";
  });
// NEXT IMAGES FOR THE CAROUSEL ENDS HERE FOR CAROUSEL FOUR

//PROFILE DROP DOWN SECTION EFFECT CREATION
var profilSection = document.querySelector(".profile");
var profildropdown = document.querySelector(".innerprofilemenu");
var profildropdownid = document.querySelector(".innerprofilemenu2");

profilSection.addEventListener("click", function () {
  if (profilSection) {
    profildropdown.classList.toggle("innerprofilemenushow");
  }
});
