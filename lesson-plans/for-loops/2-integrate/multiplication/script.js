import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById("do-math").addEventListener('click', () => {

  // read user values

  const left = readNumber('left');
  const right = readNumber('right');
  

  //  multiply the two numbers

  let result = right*left;

  // display the product
  display('product',result);
 });






