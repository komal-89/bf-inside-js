import { readString, display } from '../../../../../lib/dom-io.js';
import { reverse } from './utils/reverse.js';

const reverseString = () => {
  //get user input
  const text = readString('text-input');
  const finalText = reverse(text);

  display('message', finalText);
};

document.getElementById('btn').addEventListener('click', reverseString);
