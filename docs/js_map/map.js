var stats = cdc_stats;
var hudstats = geojson_hud_county;

var cities = L.layerGroup();
var cdcStats = L.layerGroup();
var hudStats = L.layerGroup();


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
		layers: [osm]
	});

	var baseLayers = {
		'OpenStreetMap': osm,
		'Streets': streets,
	};

	var overlays = {
		'Arthritis-Crude Prevalence': cdcStats,
		'Hud Stats': hudStats,
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
		this._div.innerHTML = '<b>NAME</b> $' +  (props ?
			'<br>' + props.NAME + '</b><br>$' + props['Income Level'].toLocaleString("en-US") + ' Annual Income' +
			'<br>$' + props['FMR'].toLocaleString("en-US") + ' Monthly Rent - Efficiency' +
			'<br>' + Math.round(props['ratio']*100) + '% FMR/Income' +
			'<br>' + Math.round(props['slope']*100000) + '% Slope'  
			 : '<br>Hover over a county');
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


	function styleHud(feature) {
		return {
			weight: 0,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: feature.properties['color']
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



	/* global statesData
	var geojson_counties = L.geoJson(cdc_stats, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(map).addTo(cdcStats);
*/

	/* global statesData */
	var geojson_counties = L.geoJson(hudstats, {
		style: styleHud,
		onEachFeature: onEachFeature
	}).addTo(map).addTo(hudStats);



	/* cite source of information */
	map.attributionControl.addAttribution('| <a href="https://www.cdc.gov/arthritis/data_statistics/state-data-current.htm" target="_blank" rel="noopener">CDC Arthritis Statistics</a> | <a href="https://datadashboard.fda.gov/ora/cd/inspections.htm" target="_blank" rel="noopener"> FDA Inspection Record </a>' );
