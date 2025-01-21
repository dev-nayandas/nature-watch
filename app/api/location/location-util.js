const data = [
    { location: "London", latitude: 51.5073219, longitude: -0.1276474 },
    { location: "Kolkata", latitude: 22.5726723, longitude: 88.3638815 },
    { location: "Dhaka", latitude: 23.777176, longitude: 90.399452 },
    { location: "Singapore", latitude: 1.2899175, longitude: 103.8519072 },
    { location: "New York", latitude: 40.7127281, longitude: -74.0060152 },
    { location: "Toronto", latitude: 43.6534817, longitude: -79.3839347 },
    { location: "Paris", latitude: 48.8566969, longitude: 2.3514616 },
    { location: "Tokyo", latitude: 35.6894875, longitude: 139.6917064 },
    { location: "Mumbai", latitude: 19.076090, longitude: 72.877426 },
    { location: "Beijing", latitude: 39.9041999, longitude: 116.4073963 },
    { location: "Sydney", latitude: -33.8688197, longitude: 151.2092955 },
    { location: "Cape Town", latitude: -33.9248685, longitude: 18.4240553 },
    { location: "Moscow", latitude: 55.755826, longitude: 37.6173 },
    { location: "Berlin", latitude: 52.5200066, longitude: 13.404954 },
    { location: "Los Angeles", latitude: 34.052235, longitude: -118.243683 },
    { location: "Bangkok", latitude: 13.7563309, longitude: 100.5017651 },
    { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
    { location: "Rio de Janeiro", latitude: -22.9068467, longitude: -43.1728965 },
    { location: "Rome", latitude: 41.9027835, longitude: 12.4963655 },
    { location: "Buenos Aires", latitude: -34.6036844, longitude: -58.3815591 },
    { location: "Cairo", latitude: 30.0444196, longitude: 31.2357116 },
    { location: "Seoul", latitude: 37.566535, longitude: 126.9779692 },
    { location: "Mexico City", latitude: 19.4326077, longitude: -99.133208 },
    { location: "Istanbul", latitude: 41.0082376, longitude: 28.9783589 },
    { location: "Chicago", latitude: 41.8781136, longitude: -87.6297982 },
    { location: "San Francisco", latitude: 37.7749295, longitude: -122.4194155 },
    { location: "Lagos", latitude: 6.5243793, longitude: 3.3792057 },
    { location: "Hong Kong", latitude: 22.3193039, longitude: 114.1693611 },
    { location: "Nairobi", latitude: -1.2920659, longitude: 36.8219462 },
    { location: "Karachi", latitude: 24.860735, longitude: 67.001137 },
    { location: "Jakarta", latitude: -6.2087634, longitude: 106.845599 },
    { location: "Bangor", latitude: 44.8011821, longitude: -68.7778138 },
    { location: "Athens", latitude: 37.9838096, longitude: 23.7275388 },
    { location: "Madrid", latitude: 40.4167754, longitude: -3.7037902 },
    { location: "Lisbon", latitude: 38.7168916, longitude: -9.1397821 },
    { location: "Helsinki", latitude: 60.1698557, longitude: 24.938379 },
    { location: "Stockholm", latitude: 59.3293235, longitude: 18.0685808 },
    { location: "Oslo", latitude: 59.9138688, longitude: 10.7522454 },
    { location: "Copenhagen", latitude: 55.6760968, longitude: 12.5683371 },
    { location: "Reykjavik", latitude: 64.13548, longitude: -21.89541 },
    { location: "Zürich", latitude: 47.3768866, longitude: 8.541694 },
    { location: "Vienna", latitude: 48.2081743, longitude: 16.3738189 },
    { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
    { location: "Casablanca", latitude: 33.5731104, longitude: -7.5898434 },
    { location: "Addis Ababa", latitude: 9.030094, longitude: 38.740587 },
    { location: "Lima", latitude: -12.046374, longitude: -77.042793 },
    { location: "Havana", latitude: 23.113592, longitude: -82.366596 },
    { location: "Manila", latitude: 14.5995124, longitude: 120.9842195 },
    { location: "Lahore", latitude: 31.5497, longitude: 74.3436 },
    { location: "Guangzhou", latitude: 23.12911, longitude: 113.264385 },
    { location: "Tashkent", latitude: 41.311151, longitude: 69.279737 },
    { location: "Kyiv", latitude: 50.4501, longitude: 30.5234 },
    { location: "Bogotá", latitude: 4.710989, longitude: -74.072092 },
    { location: "Santiago", latitude: -33.44889, longitude: -70.669265 },
    { location: "Osaka", latitude: 34.6937378, longitude: 135.5021651 },
    { location: "Ho Chi Minh City", latitude: 10.8231, longitude: 106.6297 },
    { location: "Warsaw", latitude: 52.2296756, longitude: 21.0122287 },
    { location: "Brussels", latitude: 50.8503463, longitude: 4.3517211 },
    { location: "Prague", latitude: 50.0755381, longitude: 14.4378005 },
    { location: "Kabul", latitude: 34.5553494, longitude: 69.207486 },
    { location: "Tehran", latitude: 35.6892523, longitude: 51.3896004 },
    { location: "Baghdad", latitude: 33.315241, longitude: 44.366067 },
    { location: "Amman", latitude: 31.9539494, longitude: 35.910635 },
    { location: "Beirut", latitude: 33.8937913, longitude: 35.5017767 },
    { location: "Damascus", latitude: 33.5138073, longitude: 36.2765279 },
    { location: "Doha", latitude: 25.276987, longitude: 51.52268 },
    { location: "Riyadh", latitude: 24.7135517, longitude: 46.6752957 },
    { location: "Canberra", latitude: -35.280937, longitude: 149.130009 },
    { location: "Seville", latitude: 37.389093, longitude: -5.984458 },
    { location: "Venice", latitude: 45.4408474, longitude: 12.3155151 },
    { location: "Florence", latitude: 43.76956, longitude: 11.255814 },
];


function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const found = data.find(
        (item) => item.location.toLowerCase() === location.toLowerCase()
    );

    return found || {};//Here empty object used so that api calls not fail in our application
}

export { getLocationByName, getLocations };
