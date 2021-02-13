function initialize() { 
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById("map2"), {
      zoom: 3,
      center: {lat: 0, lng: 0},
    });     
    document.getElementById("submit").addEventListener("click", () => {
      geocodeAddress(geocoder, map);
    });
    
  }
  function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    geocoder.geocode({'address': address}, function(results) {
      resultsMap.setCenter(results[0].geometry.location);
    });
  }