module.export = function(){
  var run = function(impl){
    var impl = require('./sort/' + impl)
    impl.sort(array)
  }

  return {
    run: run
  }
}
