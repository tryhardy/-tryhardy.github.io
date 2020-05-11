(function () {
  const parallax = document.querySelector(".parallax");
  const layers = parallax.children;

  function moveLayersDependOnScroll(wScroll) {
    Array.from(layers).forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 10;
      layer.style.transform = `translateY(-${strafe}%)`;


    })
  }

  window.addEventListener("scroll", (e) => {
    const wScroll = window.pageYOffset;
    moveLayersDependOnScroll(wScroll);
  });
}());



(function () {
  const parallax = document.querySelector(".parallax-buddha");
  const wrapperContainer = document.querySelector(".wrapper");
  const layers = parallax.children;

  function moveLayers(wScroll) {
    Array.from(layers).forEach(layer => {
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 10;
      layer.style.transform = `translateY(-${strafe}%)`;


    })
  }

  const startScroll = (function (wScroll) {
    var windowMargin = window.innerHeight / 4,
        parallaxRect = parallax.getBoundingClientRect(),
        posTop = parallaxRect.top,
        parallaxHeight = parallaxRect.height,
        scrollIndex = 0;


    return {
      grow: function(wScroll) {
        var startAnimateTop,
            pixelsElapsedTop = posTop - wScroll,
            percentsElapsedTop = 100 - Math.ceil(pixelsElapsedTop / windowMargin * 100);

        if(posTop >= 0) {
          startAnimateTop = wScroll - posTop + windowMargin;
          if (startAnimateTop>=0) {
            moveLayers(startAnimateTop);
            console.log(startAnimateTop)
          }
        }
        if (posTop <= 0) {
          startAnimateTop = wScroll + posTop - windowMargin - parallaxHeight;

          if (startAnimateTop >=0) {
            moveLayers(startAnimateTop);
            console.log(startAnimateTop)
          }
        }
        
      
      }
    }
  }());

  window.addEventListener("scroll", (e) => {
    const wScroll = window.pageYOffset;
    startScroll.grow(wScroll);  
  });
}());