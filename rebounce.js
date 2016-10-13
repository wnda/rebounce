function rebounce(f){
  var scheduled, context, args;
  
  return function(){
    context = this;
    args = [];
    
    for(var i = 0; i < arguments.length; ++i) {
      args[i] = arguments[i];
    }
    
    !!scheduled && window.cancelAnimationFrame( scheduled );
    
    scheduled = window.requestAnimationFrame( function(){
      f.apply( context, args );
      scheduled = null;
    });
    
  }
  
}
