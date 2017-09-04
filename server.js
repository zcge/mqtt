var mosca = require('mosca')
var server = new mosca.Server({
  http: {
    port: 3000,
    bundle: true,
    static: './'
  }
});
server.on('ready', function(){
	console.log('Mosca server is up and running');	
});
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});