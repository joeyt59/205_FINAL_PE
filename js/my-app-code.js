document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([39.0 , -97.0], 4);
    L.esri.basemapLayer("NationalGeographic").addTo(map);
    map.on('mousemove', showLatLng);
    function showLatLng(e) {
        document.getElementById("whereIsThis").innerText = (e.latlng.lat).toFixed(0) + " | " + (e.latlng.lng).toFixed(0);
    }
    map.on('click', onMapClick);
    function onMapClick(e) {
        var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent("<center><img src='http://dev.brightrain.com/recreationer/images/icon-map-marker.png'></center><h4>" + (e.latlng.lat).toFixed(3) + " | " + (e.latlng.lng).toFixed(3) + "</h4>")
        .openOn(map);
    }
    L.esri.dynamicMapLayer({
        url: "https://mapservices.nps.gov/arcgis/rest/services/NPS_Public_Roads/MapServer",
        opacity: 1
    }).addTo(map);

    L.esri.dynamicMapLayer({
        url: "https://mapservices.nps.gov/arcgis/rest/services/NPS_Public_Trails/MapServer",
        opacity: 1
    }).addTo(map);

    L.marker([48.6 , -113.761]).addTo(map)
        .bindPopup('Glacier National Park')
        .openPopup();
    L.marker([44.615 , -110.561 ]).addTo(map)
        .bindPopup('Yellowstone National Park')
        .openPopup();
    L.marker([42.930 , -122.125 ]).addTo(map)
        .bindPopup('Crater Lake National Park')
        .openPopup();
    L.marker([62.196 , -142.657]).addTo(map)
        .bindPopup('Wrangell St. Elias<br>National Preserve</br>')
        .openPopup();
    L.marker([63.347 , -150.710]).addTo(map)
        .bindPopup('Denali National Park')
        .openPopup();
    L.marker([47.832 , -123.882]).addTo(map)
        .bindPopup('Olympic National Park')
        .openPopup();
    L.marker([48.611 , -120.984]).addTo(map)
        .bindPopup('North Cascades<br>National Park</br>')
        .openPopup();
    L.marker([37.850 , -105.499]).addTo(map)
        .bindPopup('Great Sand Dunes<br>National Park</br>')
        .openPopup();
});