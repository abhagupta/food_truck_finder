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
     targetServers : ["http://localhost:3080"]  // this is your backened server which is providing you backend API response.
   });

```

The `useRecorder:true` will enable recording. This should be done the first time when you would want to mock the API of the target servers. Also note that, in your app, you need to point to
shifu at port 8000 (if thats the port you are using for shifu). So for example, if you are trying to hit an api   http://localhost:3080/welcome_message, your endpoint front end app should be pointing to
http://localhost:8000/welcome_message now. So that shifu can just let the request go through but capture the response coming from the backend server.

Once you are done with recording, change this to false.