// load mocked endpoint
require('./endpoints');
var Fs = require('fs');
var shifu = require('@walmart/shifu');

//certs for https - this will be provided by the client (that is tester/developer in our case).
// This will be the public certificate what client has to
//use to encrypt the response from the server
//  We can provide instructions to the developers to generate
//this certs for localhost or for hosted shifu servers.
//// I can also include the generation of this cert as part of generator.
//var tls = {
//  key: Fs.readFileSync('./test/resources/key.pem'),
//  cert: Fs.readFileSync('./test/resources/cert.pem')
//};

shifu.start({
  port:8000,
  mockedDirectory: './test/mocked-data',
  useRecorder: true,
  backendServers : ["http://localhost:3080", "https://data.sfgov.org/resource/6a9r-agq8.json"]

});

//shifu.startRecording();

