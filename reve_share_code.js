//reve sample

alert("Hello!");
const data = {
    "locations" : [{
        "name":"Tampa, FL",
        "lat":"27.9946875",
        "lng":"-82.6190919"
    }, {
       "name":"Fort Myers, FL",
        "lat":"26.6187637",
        "lng":"-81.9146996"
    }, {
       "name":"Orlando, FL",
        "lat":"28.4813756",
        "lng":"-81.5074765"
    }, {
       "name":"Jacksonville, FL",
        "lat":"30.3451692",
        "lng":"-82.0127616"
    }, {
    "name":"Gainesville, FL",
    "lat":"29.6863941",
    "lng":"-82.4021475"
    }, {
    "name":"West Palm Beach, FL",
        "lat":"26.7420674",
        "lng":"-80.2114415"
    }, {
    "name":"Miami, FL",
        "lat":"25.7825389",
        "lng":"-80.3118601"
    }]
};

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    var d = R * c; // Distance in km
    return d;
}
​
function deg2rad(deg) {
    return deg * (Math.PI/180);
}

// Input location
var inputLocation = {
    name: "St. Petersburg, FL", // Add your location name here
    lat: "27.950575",
    lng: "-82.4571776"
};


// Check if the input location exists in the list
var existingLocation = data.locations.find(location => location.name === inputLocation.name);
​
if (existingLocation) {
    console.log('Input location exists in the list:', existingLocation.name);
} else {
    // Finding closest location
    var closestLocation = null;
    var closestDistance = null;
​
    for (let i = 0; i < data.locations.length; i++) {
        var location = data.locations[i];
        var distance = getDistanceFromLatLonInKm(inputLocation.lat, inputLocation.lng, location.lat, location.lng);
​
        // Convert distance to miles
        var distanceInMiles = distance * 0.621371;
​
        if ((closestDistance === null || distanceInMiles < closestDistance) && distanceInMiles <= 100) {
            closestLocation = location;
            closestDistance = distanceInMiles;
        }
    }
    if (closestLocation) {
        console.log('Closest location within 100 miles:', closestLocation.name);
    } else {
        console.log('No locations within 100 miles. Default location: Tampa, FL');
    }
}
