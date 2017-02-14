## Client startup


```
git clone https://github.com/abhagupta/food_truck_finder.git
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

