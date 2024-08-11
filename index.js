function page1Animation() {
  var h1 = document.querySelector("#overlay-text2 h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");
  var clutter = "";
  splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  h1.innerHTML = clutter;
  var h2 = document.querySelector("#overlay-text2 h2");
  var h2Text = h2.textContent;
  var splittedText2 = h2Text.split("");
  var clutter2 = "";
  splittedText2.forEach(function (elem) {
    clutter2 += `<span>${elem}</span>`;
  });
  h2.innerHTML = clutter2;
  var h3 = document.querySelector("#overlay-text2 h3");
  var h3Text = h3.textContent;
  var splittedText3 = h3Text.split("");
  var clutter3 = "";
  splittedText3.forEach(function (elem) {
    clutter3 += `<span>${elem}</span>`;
  });
  h3.innerHTML = clutter3;
  var tl = gsap.timeline();

  tl.from("#overlay-text2 h2 span", {
    y: 150,
    stagger: 0.1,
    opacity: 0,
  });

  tl.from(
    "#overlay-text2 h1 span",
    {
      y: 150,
      stagger: -0.1,
      opacity: 0,
      delay: -0.6,
    },
    "main"
  );
  tl.from(
    "#overlay-text2 h3 span",
    {
      y: 150,
      stagger: 0.1,
      opacity: 0,
      delay: -0.5,
    },
    "main"
  );

  tl.from("#nav", {
    y: -100,
  });
  tl.from("#overlay-text h5", {
    y: 40,
  });
}
page1Animation();

function page2Animation() {
  var h1 = document.querySelector("#page2 h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");

  var clutter = "";
  splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  h1.innerHTML = clutter;
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 30%",
      end: "top -30%",
    },
  });
  tl2.from("#page2 h1 span", {
    y: 150,
    opacity: 0,
    stagger: {
      amount: 0.2,
    },
  });

  tl2.from("#page2-right h1", {
    y: 100,
    stagger: {
      amount: 0.2,
    },
  });
}
page2Animation();

function page3Animatio() {
  gsap.from(
    "#first .page3-box-middle h1",
    {
      y: 70,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 20%",
        end: "top 0",
      },
    },
    "anim"
  );
  gsap.from(
    "#first h5",
    {
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 20%",
        end: "top 0",
      },
    },
    "anim"
  );
  gsap.to("#first .page3-box-middle .img1", {
    height: "300px",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 0%",
      end: "top 0",
      scrub: 2,
    },
  });
  gsap.from(
    "#second .page3-box-middle h1",
    {
      y: 70,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top -70%",
        end: "top 0",
      },
    },
    "anim"
  );
  gsap.from(
    "#second h5",
    {
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top -70%",
        end: "top 0",
      },
    },
    "anim"
  );
  gsap.to("#second .page3-box-middle .img1", {
    height: "300px",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top -100%",
      end: "top 0",
      scrub: 2,
    },
  });
  gsap.from(
    "#third .page3-box-middle h1",
    {
      y: 70,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top -180%",
        end: "top 0",
      },
    },
    "anim"
  );
  gsap.from(
    "#third h5",
    {
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top -180%",
        end: "top 0",
      },
    },
    "anim"
  );
  gsap.to("#third .page3-box-middle .img1", {
    height: "300px",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top -200%",
      end: "top 0",
      scrub: 2,
    },
  });
  gsap.from(
    "#last .page3-box-middle h1",
    {
      y: 70,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top -270%",
        end: "top 0",
      },
    },
    "anim"
  );
  gsap.from(
    "#last h5",
    {
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top -270%",
        end: "top 0",
      },
    },
    "anim"
  );
  gsap.to("#last .page3-box-middle .img1", {
    height: "300px",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top -295%",
      end: "top 0",
      scrub: 2,
    },
  });
}
page3Animatio();

function page4Animation() {
  var page4H1 = document.querySelector("#page4-top h1");
  var page4H1Text = page4H1.textContent;
  var splitted = page4H1Text.split("");
  clutter = "";
  splitted.forEach(function (val) {
    clutter += `<span>${val}</span>`;
  });
  page4H1.innerHTML = clutter;
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top 40%",
      end: "top 0",
    },
  });
  tl.from(
    "#page4-top h1 span",
    {
      y: 250,
      duration: 1,
      stagger: {
        amount: 0.2,
      },
    },
    "anim"
  );
  tl.from(
    "#page4-content h1",
    {
      y: 100,
      delay: 0.5,
      stagger: {
        amount: 0.2,
      },
    },
    "anim"
  );
}
page4Animation();

function page5Aniamtion() {
  var page5H1 = document.querySelectorAll("#page5 h1");
  page5H1.forEach(function (val) {
    var page5Text = val.textContent;
    var splitted = page5Text.split("");
    clutter = "";
    splitted.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    val.innerHTML = clutter;
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "body",
      start: "top 20%",
      end: "top 0",
      scrub: 4,
    },
  });
  tl.from(
    "#page5-text1 h1 span",
    {
      // y: 300,
      x: -300,
      duration: 7,
      stagger: {
        amount: 0.2,
      },
    },
    "anim"
  );
  tl.to(
    "#page5-text2 h1 span",
    {
      // y: 300,
      x: -300,
      duration: 7,
      stagger: {
        amount: -0.2,
      },
    },
    "anim"
  );
}
page5Aniamtion();
Shery.mouseFollower();

Shery.makeMagnet("#img-c1, #img-c2, #img-c3, .inner, #nav img, #nav i, #page7 h1", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

function page6Animation() {
  var page6H1 = document.querySelector(".page6-inner #page6-h1-one");
  var page6H1Two = document.querySelector(".page6-inner #page6-h1-two");

  var page6Text = page6H1.textContent;
  var splitted = page6Text.split("");
  var clutter = "";
  splitted.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });
  page6H1.innerHTML = clutter;

  var page6TextTwo = page6H1.textContent;
  var splittedTwo = page6TextTwo.split("");
  var clutterTwo = "";
  splittedTwo.forEach(function (elem) {
    clutterTwo += `<span>${elem}</span>`;
  });
  page6H1Two.innerHTML = clutterTwo;

  var imgCon = document.querySelector(".img-con");
  var page6Inner = document.querySelector(".page6-inner");
  page6Inner.addEventListener("mouseenter", function () {
    imgCon.style.display = "block";
    gsap.to(".img-con", {
      height: "270px",
    });
    gsap.to(".page6-inner #page6-h1-one span", {
      y: "-100%",
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".page6-inner #page6-h1-two span", {
      y: "-100%",
      stagger: {
        amount: 0.3,
      },
    });
  });
  page6Inner.addEventListener("mouseleave", function () {
    imgCon.style.display = "none";
    gsap.to(".page6-inner #page6-h1-one span", {
      y: "0%",
      delay: 0.2,
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".page6-inner #page6-h1-two span", {
      y: "0%",
      stagger: {
        amount: 0.3,
      },
    });
  });
  page6Inner.addEventListener("mousemove", function (dets) {
    imgCon.style.left = dets.x + "px";
    imgCon.style.top = dets.y + "px";
  });

  var page6H1Three = document.querySelector(".page6-inner2 #page6-h1-three");
  var page6H1Four = document.querySelector(".page6-inner2 #page6-h1-four");

  var page6TextThree = page6H1Three.textContent;
  var splittedThree = page6TextThree.split("");
  var clutterThree = "";
  splittedThree.forEach(function (elem) {
    clutterThree += `<span>${elem}</span>`;
  });
  page6H1Three.innerHTML = clutterThree;

  var page6TextFour = page6H1Four.textContent;
  var splittedFour = page6TextFour.split("");
  var clutterFour = "";
  splittedFour.forEach(function (elem) {
    clutterFour += `<span>${elem}</span>`;
  });
  page6H1Four.innerHTML = clutterFour;

  var imgCon2 = document.querySelector(".img-con2");
  var page6Inner2 = document.querySelector(".page6-inner2");
  page6Inner2.addEventListener("mouseenter", function () {
    imgCon2.style.display = "block";
    gsap.to(".img-con2", {
      height: "270px",
    });
    gsap.to(".page6-inner2 #page6-h1-three span", {
      y: "-100%",
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".page6-inner2 #page6-h1-four span", {
      y: "-100%",
      stagger: {
        amount: 0.3,
      },
    });
  });
  page6Inner2.addEventListener("mouseleave", function () {
    imgCon2.style.display = "none";
    gsap.to(".page6-inner2 #page6-h1-three span", {
      y: "0%",
      delay: 0.2,
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".page6-inner2 #page6-h1-four span", {
      y: "0%",
      stagger: {
        amount: 0.3,
      },
    });
  });
  page6Inner2.addEventListener("mousemove", function (dets2) {
    imgCon2.style.left = dets2.x + "px";
    imgCon2.style.top = dets2.y + "px";
  });

  var page6H1Five = document.querySelector(".page6-inner3 #page6-h1-five");
  var page6H1Six = document.querySelector(".page6-inner3 #page6-h1-six");

  var page6TextFive = page6H1Five.textContent;
  var splittedFive = page6TextFive.split("");
  var clutterFive = "";
  splittedFive.forEach(function (elem) {
    clutterFive += `<span>${elem}</span>`;
  });
  page6H1Five.innerHTML = clutterFive;

  var page6TextSix = page6H1Six.textContent;
  var splittedSix = page6TextSix.split("");
  var clutterSix = "";
  splittedSix.forEach(function (elem) {
    clutterSix += `<span>${elem}</span>`;
  });
  page6H1Six.innerHTML = clutterSix;

  var imgCon3 = document.querySelector(".img-con3");
  var page6Inner3 = document.querySelector(".page6-inner3");
  page6Inner3.addEventListener("mouseenter", function () {
    imgCon3.style.display = "block";

    gsap.to(".img-con3", {
      height: "270px",
    });
    gsap.to(".page6-inner3 #page6-h1-five span", {
      y: "-100%",
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".page6-inner3 #page6-h1-six span", {
      y: "-100%",
      stagger: {
        amount: 0.3,
      },
    });
  });
  page6Inner3.addEventListener("mouseleave", function () {
    imgCon3.style.display = "none";
    gsap.to(".page6-inner3 #page6-h1-five span", {
      y: "0%",
      delay: 0.2,
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".page6-inner3 #page6-h1-six span", {
      y: "0%",
      stagger: {
        amount: 0.3,
      },
    });
  });
  page6Inner3.addEventListener("mousemove", function (dets3) {
    imgCon3.style.left = dets3.x + "px";
    imgCon3.style.top = dets3.y + "px";
  });

  var page6H1Seven = document.querySelector(".page6-inner4 #page6-h1-seven");
  var page6H1Eight = document.querySelector(".page6-inner4 #page6-h1-eight");

  var page6TextSeven = page6H1Seven.textContent;
  var splittedSeven = page6TextSeven.split("");
  var clutterSeven = "";
  splittedSeven.forEach(function (elem) {
    clutterSeven += `<span>${elem}</span>`;
  });
  page6H1Seven.innerHTML = clutterSeven;

  var page6TextEight = page6H1Eight.textContent;
  var splittedEight = page6TextEight.split("");
  var clutterEight = "";
  splittedEight.forEach(function (elem) {
    clutterEight += `<span>${elem}</span>`;
  });
  page6H1Eight.innerHTML = clutterEight;

  var imgCon4 = document.querySelector(".img-con4");
  var page6Inner4 = document.querySelector(".page6-inner4");
  page6Inner4.addEventListener("mouseenter", function () {
    imgCon4.style.display = "block";

    gsap.to(".img-con4", {
      height: "270px",
    });
    gsap.to(".page6-inner4 #page6-h1-seven span", {
      y: "-100%",
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".page6-inner4 #page6-h1-eight span", {
      y: "-100%",
      stagger: {
        amount: 0.3,
      },
    });
  });
  page6Inner4.addEventListener("mouseleave", function () {
    imgCon4.style.display = "none";
    gsap.to(".page6-inner4 #page6-h1-seven span", {
      y: "0%",
      delay: 0.2,
      stagger: {
        amount: 0.3,
      },
    });

    gsap.to(".page6-inner4 #page6-h1-eight span", {
      y: "0%",
      stagger: {
        amount: 0.3,
      },
    });
  });
  page6Inner4.addEventListener("mousemove", function (dets4) {
    imgCon4.style.left = dets4.x + "px";
    imgCon4.style.top = dets4.y + "px";
  });
}

page6Animation();

function page7Animation() {
  var page7H1 = document.querySelector("#page7 h1");
  var page7Text = page7H1.textContent;
  var splitted = page7Text.split("");
  var clutter = "";
  splitted.forEach(function (val) {
    clutter += `<span>${val}</span>`;
  });
  page7H1.innerHTML = clutter;

  gsap.from("#page7 h1 span", {
    y: 350,
    duration: 0.5,
    stagger: {
      amount: 0.2,
    },
    scrollTrigger: {
      trigger: "#page7",
      scroller: "body",
      start: "top 30%",
      end: "top 0",
    },
  });
}

page7Animation();
