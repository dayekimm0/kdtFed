anime({
  targets: ".box1",
  translateX: 400,
  easing: "linear",
  background: "#000",
  borderRadius: "50%",
  loop: true,
  direction: "alternate",
});

anime({
  targets: ".box2",
  translateX: 400,
  translateY: 300,
  easing: "easeInQuart",
  loop: true,
  direction: "alternate",
  delay: 1000,
});

anime({
  targets: ".box3",
  translateX: {
    value: 400,
    duration: 1000,
    delay: 1000,
  },
  rotate: {
    value: 360,
    duration: 4000,
    delay: 2000,
  },
  loop: true,
  direction: "alternate",
});
