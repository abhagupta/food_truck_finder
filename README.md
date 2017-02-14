# Food Truck Finder

Project in React, redux, Express. Uses https://data.sfgov.org to get the informaiton about closes food trucks/

To install this project, do following :


## Client

React based. [Documentation](client/README.md)


## Server
[Documentation](server/README.md)

Express based server which provides only one API at this time.

`/location_address/<location>`

This api accepts any address or zip code and translates it to
latitude and longitude using Google Map API. This latitude and longitude is then fed into data.sfgov.api to retrieve the results for closes trucks.

Example: https://data.sfgov.org/resource/6a9r-agq8.json?$where=within_circle(location,37.5685247,-122.367428,%20100000)
