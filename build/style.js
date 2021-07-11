anime.timeline({loop: false})
  .add({
    targets: '.header .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 50 * i
  })
//.add({
//     targets: '.ml15',
//     opacity: 0,
//     duration: 1000,
//     // easing: "easeOutExpo",
//     delay: 1000
//   })
;