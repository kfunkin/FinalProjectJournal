
anime({
  targets: 'div.maratshead',
  translateY: [
    { value: 2, duration: 400, delay: 1100  },
    { value: 0, duration: 400 },
  ],
  loop: true

})
anime({
  targets: 'div.text1',
  translateY: [
    {value:1355, duration: 800, delay:900},
    {value:0, duration:500, delay:3000}


  ],
opacity: [1,0],
duration:60000,
delay:900
})


anime({
  targets:'div.aintmybagtxt',
  translateX: [20],
  opacity: [0,0.5],
  duration:500,
  delay: 1000,
  easing: 'easeInOutSine'
})

anime({
  targets: 'div.i-am-the-baltic',
  opacity: [0,0.8],
  duration: 2000,
  delay: 6000,
  easing: 'easeInOutSine'
})

anime({
  targets: 'div.lady',
  opacity: [0,0.8],
  duration: 2000,
  delay: 6000,
  easing: 'easeInOutSine'
})

anime({
  targets: 'div.pinkcircle',
  opacity: [0,0.2],
  duration: 5000,
  delay: 8000
})

document.getElementById('#crash-leading').style.line.height = "1.6em";



/*
let menuBtn = document.querySelector('#menuBtnIcon');
let menu = document.querySelector('#box');
let menuStatus = false;

menu.style.marginLeft = '-310px';

//could set the -310px margin in CSS as well

function menuToggle() {
  if (menuStatus == false) {
    menu.style.marginLeft = '-20px';
    menu.style.transition = '3s';
    menuStatus = true;

  } else if (menuStatus == true) {
    menu.style.marginLeft = '-310px';
    menuStatus = false;
  }
}

menuBtn.onclick = menuToggle;*/
