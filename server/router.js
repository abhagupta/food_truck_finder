const FoodTruck = require('./models/FoodTruck');
const rp = require("request-promise");

module.exports = function(app){

  app.get("/",  function(req, res){
    res.send("Hello world!");
  })
 //by locationId
  app.get("/location_id/:id", function(req, res){
    var query = {
      'locationid':parseInt(req.params.id)
    };
      FoodTruck.find(query, function(err, result){
        if(err){
          return next(err);
        }
        res.send(result);

      })
  });



 //by address - matching words
  app.get("/location_address/:address", function(req, res){
    const userAddress = req.params.address;

    const googleKey = 'AIzaSyA5lBODwPBUxl4-pMkhW3hpPpMLsbzVjls';
   rp({
        uri: "https://maps.googleapis.com/maps/api/geocode/json?address="+userAddress+"&key="+googleKey,
        resolveWithFullResponse: true
    })
    .then(function(response){
      console.log(response.body.results);
      const results = JSON.parse(response.body);
       const userLat = results.results[0].geometry.location.lat
      const  userLng = results.results[0].geometry.location.lng
      console.log('Lat:' , userLat);
      console.log('Long:' , userLng);
      res.send({'Latitude': userLat, 'Longitude': userLng});
    });

    //
    // const query = {
    //     $near: [ 26.2159066, -98.32529319999999 ],
    //     $maxDistance: 50
    //   }
    //
    //   const sfGovApi = "https://data.sfgov.org/resource/6a9r-agq8.json?$where=within_circle(location, 37.78, -122.42, 1000)"
    //
    //   FoodTruck.find(query, function(err, result){
    //       // if(err){
    //       //   return next(err);
    //       // }
    //       console.log("result :" + result);
    //       res.send(result);
    //   });

    //  FoodTruck.find({'Address' : new RegExp(userAddress, "i")}, function(err, result){
    //    if(err){
    //      return next(err);
    //    }
    //    res.send(result);
    //   });
  });

}
