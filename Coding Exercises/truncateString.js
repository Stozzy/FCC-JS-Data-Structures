function truncateString(str, num) {
  let result = str.split('').slice(0, num).join('');
  
//   if (result.length < str.length) {
//       result += '...';
//   }
  return (result.length < str.length) ? result += '...' : result;
}

console.log(truncateString("A-taskit a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-", 1));
