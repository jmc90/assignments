var data = require('./menu.json')
// modules.exports is not required
// for a .json file. Node automatically 
// parses it into a js object when you use 'require'


console.log(data)

console.log(data.appetizers[0].name)