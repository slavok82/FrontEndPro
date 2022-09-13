let array = new Array(11,22,3,4,5,6,7,8,9,10,'ok');
let newArray = [], index;
for (i = array.length; i > 0; i--) {
    index = array.length - i;
    newArray[i] = array[index];
};
console.log('[' + array + ']' + ' ' + '->' + ' ' + newArray);
let string = ('salomon');
let newString = [], indexString;
for (i = string.length; i > 0; i--) {
    indexString = string.length - i;
    newString[i] = string[indexString];
};
console.log('[' + string + ']' + ' ' + '->' + ' ' + 'revers:' + newString);
min = array[0];
for (i = 0; i < array.length; i++) {   
    if (array[i] < min) min = array[i];
};
console.log('[' + array + ']' + ' ' + '->' + ' ' + 'min:' + min);
let longString = ['abs','salomon','ok',];  
let line = '';
let long;
for (let i = 0; i < longString.length; i++) {
    if (longString[i].length > line) {
      line = longString[i].length;
      long = longString[i];
    }
};  
console.log('[' + longString + ']' + ' ' + '->' + ' ' + 'long:' + long);  



  
  