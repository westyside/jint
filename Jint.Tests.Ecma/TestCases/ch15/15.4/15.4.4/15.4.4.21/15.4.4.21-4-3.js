/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-4-3.js
 * @description Array.prototype.reduce throws TypeError if callbackfn is null
 */


function testcase() {

  var arr = new Array(10);
  try {
    arr.reduce(null);    
  }
  catch(e) {
    if(e instanceof TypeError)
      return true;  
  }

 }
runTestCase(testcase);
