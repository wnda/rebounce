function rebounce(f){
  
  var scheduled;
  var context;
  var args;
  
  return function(){
  
    context = this;
    args = [];
    
    for ( var i = 0; i < arguments.length; ++i ){
      args[i] = arguments[i];
    }
    
    if ( scheduled ){
      window.cancelAnimationFrame( scheduled );
    }
    
    scheduled = window.requestAnimationFrame( function(){
      f.apply( context, args );
      scheduled = null;
    });
  
  }
  
}
