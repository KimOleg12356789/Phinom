$(document).ready(function () {
  var basePosition = -50;
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
    console.log("dss");
  });

    randomMove();

    $(".fixsed-button button").click(function (){
      $(".fixsed-block").css('display','none');
      return false;
    });

    $(".easyandsafe-border-button button").click(function (){
      $(".easyandsafe-absolute").css('display','none');
      return false;
    });
});





function randomMove() {
  $(".phinomdigital-absolute-item").each(function (i) {
    animateMove(i,".phinomdigital-absolute-item");
  });
  $(".downloadnow-absolute-item").each(function(i) {
    
    animateMove(i,".downloadnow-absolute-item");
  })

  function animateMove(i,elem) {
    var newPos = makeNewPosition(i);

   
    $(elem)
      .eq(i)
      .animate(
        {
          top: `${newPos[0]}px`,
          left: `${newPos[1]}px`,
        },
        1800,
        'linear',
        function () {
          animateMove(i,elem);
        }
      );
  }

  function makeNewPosition(i) {
    var postions = [];
    var limitElements = [
      {
        top: {
          from: 0,
          to: 100,
        },
        left: {
          from: 0,
          to: -100,
        },
      },
      {
        top: {
          from: 140,
          to: 180,
        },
        left: {
          from: -50,
          to: 120,
        },
      },
      {
        top: {
          from: -120,
          to: 0,
        },
        left: {
          from: 0,
          to: -70,
        },
      },
      {
        top: {
          from: -120,
          to: 0,
        },
        left: {
          from: 30,
          to: 80,
        },
      },
      {
        top: {
          from: -120,
          to: 0,
        },
        left: {
          from: 150,
          to: 180,
        },
      },
    ];
    postions.push(
      randomIntFromInterval(limitElements[i].top.from, limitElements[i].top.to)
    );
    postions.push(
      randomIntFromInterval(limitElements[i].left.from, limitElements[i].left.to)
    );

    return postions;
  }
//   function calcSpeed(prev, next) {
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);

//     var greatest = x > y ? x : y;

//     var speedModifier = 0.1;

//     var speed = Math.ceil(greatest / speedModifier);

//     return speed;
//   }
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".mt-mobile");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  body.classList.toggle("body-open");
  burger.classList.toggle("burger-open");
});


const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});