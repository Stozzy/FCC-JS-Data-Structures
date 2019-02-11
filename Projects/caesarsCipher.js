function rot13(str) { // LBH QVQ VG!
  const REGEX = /[A-Z]/g
  const ALPHABET_KEY = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let strArray = str.split('')
  let decipher = [];

  for (let i = 0; i < strArray.length; i++) {
      let cipherKeyValue = strArray[i];
      //let alphabetKeyIndex = ALPHABET_KEY.indexOf(cipherKeyValue);
      if (cipherKeyValue.match(REGEX)) {
          decipher.push(ALPHABET_KEY[(ALPHABET_KEY.indexOf(cipherKeyValue)) + 13]);
      } else {
          decipher.push(cipherKeyValue);
      }
  }
  
  return decipher.join('');
  
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
