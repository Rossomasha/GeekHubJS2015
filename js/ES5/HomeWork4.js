'use strict';

map(function (x) {
  return x + 1;
});
map(function (x) {
  return x + require('./hideElement');
});