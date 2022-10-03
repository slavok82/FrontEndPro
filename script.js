/*enter data into the array*/
let array = [1,1,5,8];
let i;
let result = [];
let min = Infinity;
let sum = 0;
let averageValue;
let line = '';
const utils = {
    reverse: function(array) {   
        for (i = array.length - 1; i >= 0; i--) {
            result.push(array[i]);
        }    
        return result;
    }, 
    verifyNumbers: function(array) {
        for (i = 0; i < array.length; i ++) {
            if (typeof array[i] === 'number') {
               result.push(array[i]);
            }
        }
        return result;
    },
    getMin: function(array) {
        for (i = 0; i < array.length; i++) {   
            if (array[i] < min) {
                min = array[i];                
            }             
        }        
        return min;
    },
    getAverage: function(array) {
        for (i = 0; i < array.length; i++) {
            sum += array[i];
            averageValue = sum / array.length;
        }      
        return averageValue;
    },
    getMaxString: function(array) {
        for (i = 0; i < array.length; i++) {
            if (array[i].length > line.length) {
              line = array[i];              
            }
        }
        return line;
    }
};
/*Activate the one you need "console.log"*/
utils.reverse([]);
//console.log('[' + array + ']' + ' ' + '->' + ' ' + utils.reverse(array));
utils.verifyNumbers([]);
//console.log('[' + array + ']' + ' ' + '->' + ' ' + utils.verifyNumbers(array));
utils.getMin([]);
//console.log('[' + array + ']' + ' ' + '->' + ' ' + utils.getMin(array));
utils.getAverage([]);
//console.log('[' + array + ']' + ' ' + '->' + ' ' + utils.getAverage(array));
utils.getMaxString([]);
//console.log('[' + array + ']' + ' ' + '->' + ' ' + utils.getMaxString(array));


