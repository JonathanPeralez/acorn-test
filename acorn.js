const acorn = require('acorn');
const fs = require('fs');
const path = require('path');
const file = fs.readFileSync(path.join(__dirname, 'build', 'bundle.js'));

const result = acorn.parse(file, {ecmaVersion: 6});

console.log(result);