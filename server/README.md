## Server

```
git clone https://github.com/abhagupta/food_truck_finder.git
cd server
npm install
```
In another shell, start mongod deamon since server connects with mongo server, then :
```
node index.js
```

This should start the server at http://localhost:3080

The only route that this server provides is


http://localhost:3080/location_address/94010

94010 can be replaced by any zip or address.
