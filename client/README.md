## Client startup


```
git clone https://gecgithub01.walmart.com/otto/boilerplate_shifu_recorder.git
cd client
npm install
npm start

```

Visit http://localhost:8080

- Search for zip code or address
- Click submit

When you open the http://localhost:8080, 1 service is called. This is a Hello World message on the top.

Submit will call another API to retrieve a lat long for an address entered. This will also be mocked.

After submit, the locations of food trucks will be displayed in the list.


## How to Mock services.

in client/test/resources/run-mock-server-console.js add a parameter with shifu start :

```
shifu.start({
     port:8000,
     mockedDirectory: './test/mocked-data',
     useRecorder: false,
     targetServers : ["http://localhost:3080"]
   });

```

The `useRecorder:true` will enable recording. This should be done the first time when you would want to mock the API of the target servers.

Once you are done with recording, change this to false.