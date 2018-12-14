var test = require('tape');
var fizzbuzz = require('./index.js');

test('Testing Tape is working', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});

test('Testing input 1 returns output 1', function(t) {
  const actual = fizzbuzz(1);
  const expected = 1;
  t.equal(actual, expected, 'input 1 gives output 1');
  t.end();
})

test('Testing input 2 returns output 2', function(t) {
  const actual = fizzbuzz(2);
  const expected = 2;
  t.equal(actual, expected, 'input 2 gives output 2');
  t.end();
})

test('Testing input 3 returns fizz', function(t) {
  const actual = fizzbuzz(3);
  const expected = 'fizz';
  t.equal(actual, expected, 'input 3 gives output fizz');
  t.end();
})

test('Testing input 4 returns 4', function(t) {
  const actual = fizzbuzz(4);
  const expected = 4;
  t.equal(actual, expected, 'input 4 gives output 4');
  t.end();
})

test('Testing input 5 returns buzz', function(t) {
  const actual = fizzbuzz(5);
  const expected = "buzz";
  t.equal(actual, expected, 'input 5 gives output buzz');
  t.end();
})

test('Testing input 15 returns fizzbuzz', function(t) {
  const actual = fizzbuzz(15);
  const expected = 'fizzbuzz';
  t.equal(actual, expected, 'input 15 gives output fizzbuzz');
  t.end();
})

test('Testing input 6 returns fizz', function(t) {
  const actual = fizzbuzz(6);
  const expected = 'fizz';
  t.equal(actual, expected, 'input 6 gives output fizz');
  t.end();
})

test('Testing input 10 returns buzz', function(t) {
  const actual = fizzbuzz(10);
  const expected = 'buzz';
  t.equal(actual, expected, 'input 10 gives output buzz');
  t.end();
})

test('Testing input 30 returns fizzbuzz', function(t) {
  const actual = fizzbuzz(30);
  const expected = 'fizzbuzz';
  t.equal(actual, expected, 'input 30 gives output fizzbuzz');
  t.end();
})