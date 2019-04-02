const req = require.context('./stories', true, /\.story\.js$/);
req.keys().forEach(filename => req(filename));