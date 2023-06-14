import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values

  const userInput = readString('user-text');
  const times = readNumber('number-of-times');
  let result = '';
  // repeat the characters in the text

  for (let j = 0; j < times; j++) {
    result += userInput;
  }

  // display the text with repeated characters
  display('repeated-output', result);
});
