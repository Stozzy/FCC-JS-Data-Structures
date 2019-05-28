function convertToRoman(num) {
 var result = '';
 var romanKeys = {
     1: 'I',
     4: 'IV',
     5: 'V',
     9: 'IX',
     10: 'X',
     19: 'IXX',
     40: 'XL',
     50: 'L',
     90: 'XC',
     100: 'C',
     400: 'CD',
     500: 'D',
     900: 'CM',
     1000: 'M'
 };
 
 while (num > 0) {
     if (num >= 1000) {
         num -= 1000;
         result += romanKeys[1000];
     } else if (num >= 900) {
         num -= 900;
         result += romanKeys[900];     
     } else if (num >= 500) {
         num -= 500;
         result += romanKeys[500];
     } else if (num >= 400) {
         num -= 400;
         result += romanKeys[400];
     } else if (num >= 100) {
         num -= 100;
         result += romanKeys[100];
     } else if (num >= 90) {
         num -= 90;
         result += romanKeys[90];
     } else if (num >= 50) {
         num -= 50; 
         result += romanKeys[50];
     } else if (num >= 40) {
         num -= 40; 
         result += romanKeys[40];
     } else if (num > 10) {
         num -= 10;
         result += romanKeys[10];
     } else if (num > 5) {
         num -= 5;
         result += romanKeys[5];
     } else if (num = 4) {
         num -= 4;
         result += romanKeys[4];
     } else if (num > 0) {
         num -= 1;
         result += romanKeys[1];
    } else {
        break;
    }
 }
 return result;
}

console.log(convertToRoman(5));