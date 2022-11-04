var hudstats = geojson_hud_county;

var cities = L.layerGroup();
var cdcStats = L.layerGroup();
var hudIL = L.layerGroup();
var hudFMR = L.layerGroup();
var hudRatio = L.layerGroup();
var hudSlope = L.layerGroup();


var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';


var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});


//var map = L.map('map').setView([37.8, -96], 4);
var map = L.map('map', {
		center: [37.8, -96],
		zoom: 4,
		minZoom: 4,
		maxZoom: 18,
		zoomSnap: 0.25,
		layers: [osm]
	});

	var baseLayers = {
		'OpenStreetMap': osm,
		'Streets': streets,
	};

	var overlays = {
		'Income Level (IL)': hudIL,
		'Fair Market Rate (FMR)': hudFMR,
		'Ratio (FMR/IL)': hudRatio,
		'Slope': hudSlope,
	};

	var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

	var satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
	layerControl.addBaseLayer(satellite, 'Satellite');


	var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
	}).addTo(map);




// control that shows state info on hover
var info = L.control();


info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};


info.update = function (props) {
	this._div.innerHTML = (props ? '<b>' + props.LSAD + ' ' + props.NAME + '</b>' +
	'<br>$' + props['Income Level']['value'].toLocaleString("en-US") + ' Income Level' +
	'<br>$' + props['FMR']['value'].toLocaleString("en-US") + ' Fair Market Rent - Efficiency' +
	'<br>' +  Math.round(props['ratio']['value']*100) + '% FMR/Income' +
	'<br>' +  Math.round(props['slope']['value']*100000) + '% Slope'
	 :'<br>Hover over a county');
	};


info.addTo(map);


function style(feature) {
		return {
			weight: 0,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: feature.properties['Arthritis-Crude Prevalence']['color']
		};
	}


function styleHudIL(feature) {
		return {
			weight: 0,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: feature.properties['Income Level']['color']
		};
	}


function styleHudFMR(feature) {
		return {
			weight: 0,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: feature.properties['FMR']['color']
		};
	}


function styleHudRatio(feature) {
		return {
			weight: 0,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: feature.properties['ratio']['color']
		};
	}


function styleHudSlope(feature) {
		return {
			weight: 0,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: feature.properties['slope']['color']
		};
	}


function highlightFeature(e) {

		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}


function resetHighlight(e) {
		geojson_counties.resetStyle(e.target);
		info.update();
	}


function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}


function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}


var il = L.geoJson(hudstats, {
		style: styleHudIL,
		onEachFeature: onEachFeature
	}).addTo(map).addTo(hudIL);

var fmr = L.geoJson(hudstats, {
		style: styleHudFMR,
		onEachFeature: onEachFeature
	}).addTo(map).addTo(hudFMR);

var ratio = L.geoJson(hudstats, {
		style: styleHudRatio,
		onEachFeature: onEachFeature
	}).addTo(map).addTo(hudRatio);


var ratio = L.geoJson(hudstats, {
		style: styleHudSlope,
		onEachFeature: onEachFeature
	}).addTo(map).addTo(hudSlope);


/* cite source of information */
map.attributionControl.addAttribution('| <a href="https://www.huduser.gov/portal/datasets/il.html" target="_blank" rel="noopener">HUD Income Limits</a> | <a href="https://www.hud.gov/press/press_releases_media_advisories/HUD_No_22_161" target="_blank" rel="noopener"> HUD Fair Market Rents </a>' );




var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    labels = [];
    return div;
};

legend.addTo(map);
