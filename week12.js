let playBtn = document.querySelector('#playButton12');
let audio = document.querySelector('#ff1');
let mHead = document.querySelector('#marathead-12');
let mBody = document.querySelector('#maratbody-12');
let circle = document.querySelector('#pinkcircle-12');
let iagree = document.querySelector('#i-agree-12');
let big = document.querySelector('#big-12');
let keys = document.querySelector('#keys-12');
let yHead = document.querySelector('#yar-head-12');
let reelno1 = document.querySelector('#reel1-12');
let reelno2 = document.querySelector('#reel2-12');
let playStatus = false;

playBtn.addEventListener("click", function() {
  mHead.style.animation = "marathead-12-anim 0.75s linear infinite";
  mBody.style.animation = "maratbody-12-anim 0.75s linear infinite";
  circle.style.animation = "pinkcircle-12-anim 1.6s linear infinite";
  iagree.style.animation = "i-agree-12-anim 0.75s linear infinite";
  //big.style.animation = "big-6-anim 1s linear infinite";
  keys.style.animation = "keys-12-anim 0.75s linear infinite";
  yHead.style.animation = "yar-head-12-anim 0.75s linear infinite";
  reelno1.style.animation = "spin-12 4s linear infinite";
  reelno2.style.animation = "spin-12 4s linear infinite";
  audio.play();
})
