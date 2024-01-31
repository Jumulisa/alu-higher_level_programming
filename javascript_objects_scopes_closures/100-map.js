#!/usr/bin/node
const data = require('./100-data');

const initialList = data.list;

// Using map to create a new list where each value is equal to the value of the initial list, multiplied by its index
const newList = initialList.map((value, index) => value * index);

// Printing both the initial list and the new list
console.log(initialList);
console.log(newList);

