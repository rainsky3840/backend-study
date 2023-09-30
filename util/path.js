const path = require('path');

module.exports = path.dirname(require.main.filename);
// module.exports = path.dirname(process.mainModule.filename);
// (process.mainModule.filename) is depreciated