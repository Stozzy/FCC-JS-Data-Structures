function palindrome (phrase) {
    initialPhrase = phrase.toLowerCase().replace(/[.@$%^&*(/)\,_#!?/]| /gi, '');
    reversePhrase = initialPhrase.split('').reverse().join('');
function palindrome (phrase) {
    initialPhrase = phrase.toLowerCase().replace(/[.@$%^&*(/)\,_#!?/]| /gi, '');
    reversePhrase = initialPhrase.split('').reverse().join('');

    return initialPhrase === reversePhrase;
}

console.log(isPalindrome('B/O\B'));
console.log(palindrome('B/O\B'));
console.log(palindrome('B/O\B'));
console.log(palindrome('B/O\B'));
