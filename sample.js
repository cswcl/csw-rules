'use strict';

// Sample javascript file to test `.eslintrc` rules

// This is a long comment. It should mark an error after 140 characters. So I'll keep writing stuff, maybe some non-sense things too just to get beyond the limit

const iterations = 10;
const anUrlShouldNotRaiseMaxLengthError = 'http://www.averylongurl.com/with/some/paths/and/stuff/and/more/stuff/just/keep/typing/non/sense/stuff/really/i/m/getting/tired/now';
for (let i = 0; i < iterations; i += 1) {
  console.log(i);
}

// avoid "unused" warning
console.log(anUrlShouldNotRaiseMaxLengthError);
