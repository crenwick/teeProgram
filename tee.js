/*jshint node: true*/
/*
This program should take input from standard in and output it to both standard out and a file specified at run time.
ex:
node tee outputfile.txt
would both echo the user supplied input and copy it into the outputfile.txt file
*/

'use strict';
var express = require('express');
var fs = require('fs');

var w = fs.createWriteStream(process.argv[2]);

process.stdin.pipe(w);
process.stdin.pipe(process.stdout);

console.log('server is running');
