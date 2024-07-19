document.getElementById('searchInput').addEventListener('input', function() {
    var filter = this.value.toUpperCase();
    var rows = document.querySelector("tbody").rows;
    
    for (var i = 0; i < rows.length; i++) {
        var id = rows[i].cells[0].textContent.toUpperCase();
        var model = rows[i].cells[1].textContent.toUpperCase();
        if (id.indexOf(filter) > -1 || model.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});

document.getElementById('statusFilter').addEventListener('change', function() {
    var filter = this.value.toUpperCase();
    var rows = document.querySelector("tbody").rows;
    
    for (var i = 0; i < rows.length; i++) {
        var status = rows[i].cells[2].textContent.toUpperCase();
        if (filter === "" || status.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});

document.getElementById('modelFilter').addEventListener('change', function() {
    var filter = this.value.toUpperCase();
    var rows = document.querySelector("tbody").rows;
    
    for (var i = 0; i < rows.length; i++) {
        var model = rows[i].cells[1].textContent.toUpperCase();
        if (filter === "" || model.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});



    // Initialize the map
    var map = L.map('map').setView([11.1271, 78.6569], 7); // Coordinates of Tamil Nadu

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of plantation sites with latitude, longitude, and site name
    var sites = [
        {lat: 13.0827, lng: 80.2707, name: 'Site 1 in Chennai'},
        {lat: 10.7905, lng: 78.7047, name: 'Site 2 in Tiruchirappalli'},
        {lat: 11.0168, lng: 76.9558, name: 'Site 3 in Coimbatore'},
        {lat: 9.9252, lng: 78.1198, name: 'Site 4 in Madurai'}
    ];

    // Add markers for each site
    sites.forEach(function(site) {
        L.marker([site.lat, site.lng])
            .addTo(map)
            .bindPopup(site.name);
    });
