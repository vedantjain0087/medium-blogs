let module = (function() {
	function somePrivateMethod() {
  	// Do something
  }
  return {
  	somePublicMethod: function () {
    	// Do something
      // can call somePrivateMethod() here
      somePrivateMethod();
    }
  }
})();
module.somePublicMethod();