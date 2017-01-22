function rebounce (func) {
  'use strict';
  var scheduled;
  var context;
  var args;
  var i;
  
  return function(){
    context = this;
    args = [];
    i = 0;
    
    for (; i < arguments.length; ++i) {
      args[i] = arguments[i];
    }
    
    if (scheduled) {
      window.cancelAnimationFrame(scheduled);
    }
    
    scheduled = window.requestAnimationFrame(function () {
      func.apply(context, args);
      scheduled = null;
    });
  }
}
