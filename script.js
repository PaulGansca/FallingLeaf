const mapleLeaf = document.getElementsByClassName("maple-leaf");
const tl = new TimelineMax({repeat:-1});
tl.set(mapleLeaf, { rotation: 15 });

fallingLeaf();
swingLeaf();
swingLeaf();
swingLeaf();

function fallingLeaf() {
  tl.add([
    TweenMax.to(mapleLeaf, 1.5, {
      top: 300,
      rotation: -5,
      ease: Power1.easeInOut
    })
  ]);
}

function swingLeaf() {
    tl.add([
      TweenMax.to(mapleLeaf, 1.5, {
        left: -150,
        rotation: -7,
        ease: Power1.easeInOut
      }),
      TweenMax.to(mapleLeaf, 1.5, {
        top: "+=30",
        ease: Power1.easeOut
      })
    ]).add([
      TweenMax.to(mapleLeaf, 1.5, {
        left: 150,
        rotation: 7,
        ease: Power1.easeInOut
      }),
      TweenMax.to(mapleLeaf, 1.5, {
        top: "+=30",
        ease: Power1.easeOut
      })
    ]);
  }