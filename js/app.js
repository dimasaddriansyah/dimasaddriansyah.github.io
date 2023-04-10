/* Template Name: Calvin - Responsive Personal Template
   Author: Shreethemes
   Version: 1.0.0
   Created: Feb, 2022
   File Description: Main JS file of the template
*/

/************************/
/*       INDEX          */
/*=======================
 *  01.  Loader         *
 *  02.  Menu           *
 *  03.  Scrollspy      *
 *  04.  Magnific Popup *
 *  05.  Owl Carousel   *
 *  06.  Back to top    *
 *  07.  Feather Icon   *
 =======================*/

// Preloader
window.onload = function loader() {
  setTimeout(() => {
    document.getElementById("preloader").style.visibility = "hidden";
    document.getElementById("preloader").style.opacity = "0";
  }, 500);
};

// Menu sticky
function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

// back-to-top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    console.log(document.body.scrollTop);
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Shuffle Lightbox
try {
  var Shuffle = window.Shuffle;

  class Demo {
    constructor(element) {
      if (element) {
        this.element = element;
        this.shuffle = new Shuffle(element, {
          itemSelector: ".picture-item",
          sizer: element.querySelector(".my-sizer-element"),
        });

        // Log events.
        this.addShuffleEventListeners();
        this._activeFilters = [];
        this.addFilterButtons();
      }
    }

    /**
     * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
     * for them like you normally would (with jQuery for example).
     */
    addShuffleEventListeners() {
      this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
        console.log("layout. data:", data);
      });
      this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
        console.log("removed. data:", data);
      });
    }

    addFilterButtons() {
      const options = document.querySelector(".filter-options");
      if (!options) {
        return;
      }

      const filterButtons = Array.from(options.children);
      const onClick = this._handleFilterClick.bind(this);
      filterButtons.forEach((button) => {
        button.addEventListener("click", onClick, false);
      });
    }

    _handleFilterClick(evt) {
      const btn = evt.currentTarget;
      const isActive = btn.classList.contains("active");
      const btnGroup = btn.getAttribute("data-group");

      this._removeActiveClassFromChildren(btn.parentNode);

      let filterGroup;
      if (isActive) {
        btn.classList.remove("active");
        filterGroup = Shuffle.ALL_ITEMS;
      } else {
        btn.classList.add("active");
        filterGroup = btnGroup;
      }

      this.shuffle.filter(filterGroup);
    }

    _removeActiveClassFromChildren(parent) {
      const { children } = parent;
      for (let i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove("active");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.demo = new Demo(document.getElementById("grid"));
  });
} catch (err) {}

//Tobii Lightbox
try {
  const tobii = new Tobii();
} catch (err) {}

//Typed Text Animations
try {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };

  function typewrite() {
    if (toRotate === "undefined") {
      changeText();
    } else var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".typewrite > .wrap { border-right: 0.08em solid transparent}";
    document.body.appendChild(css);
  }
  window.onload(typewrite());
} catch (err) {}

//Feather icon
feather.replace();
