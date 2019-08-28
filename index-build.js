var context = require.context('./dg', true, /\.js$/);
var files={};

context.keys().forEach((filename)=>{
  console.log(filename);
  files[filename] = context(filename);
});
console.log(files);