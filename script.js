
var scrollElm = (function() {
    if('scrollingElement' in document) {
      return document.scrollingElement;
    }
    if(navigator.userAgent.indexOf('WebKit') != -1) {
      return document.body;
    }
    return document.documentElement;
  })();
   
  var sections = document.querySelectorAll('.section');
  var scaler = document.getElementById('scaler');
  var scrollDiv = document.getElementById('scroll');
  for(var i = 0; sections.length > i; i++) {
    var itemZ = sections[i].getAttribute('data-z');
    sections[i].style.transform = 'translateZ(' + - itemZ + 'px)';
    if(i === sections.length -1) {
      scrollDiv.style.height = itemZ * 100 + window.innerHeight + 'px';
    }
  }
  
  window.addEventListener('scroll', function() {
    scaler.style.transform = 'translateZ(' + scrollElm.scrollTop / 100 + 'px)';
  });
