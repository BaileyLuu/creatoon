anime.timeline({loop: false})
  .add({
    targets: '.header .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 50 * i
  })
;
