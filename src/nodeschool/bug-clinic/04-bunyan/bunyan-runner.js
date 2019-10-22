var resolve = require('path').resolve;
var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'scenario'});

var scenario = require(resolve(process.cwd(), process.argv[2]))

scenario(log, function (val) {
  log.info("value at finish is", val);
});
