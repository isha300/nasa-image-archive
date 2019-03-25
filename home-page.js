import {getNASAImage} from 'backend/serviceModule';
import {getNASAImagebyLocation} from 'backend/serviceModule';
import {getNASAImagebyYearStart} from 'backend/serviceModule';
import {getNASAImagebyYearEnd} from 'backend/serviceModule';

$w.onReady(function () {

});

// On-click listener for the free-text search button
export function searchBtn_click(event) {
	$w("#result").text = "Retrieving information for " + $w("#searchInput").value + "..."; 
	var i = 0;
	getNASAImage($w("#searchInput").value)
	.then(NASAInfo => {
		for (var j = 1; j <= 50; i++) {
			if (NASAInfo.collection.items[i].data[0].media_type == "image") {
				var keywords = "";
				for (let k in NASAInfo.collection.items[i].data[0].keywords) {
					keywords = keywords + NASAInfo.collection.items[i].data[0].keywords[k] + ", ";
				}
				$w(("#image" + j)).src = NASAInfo.collection.items[i].links[0].href;
				$w(("#text" + j)).text = NASAInfo.collection.items[i].data[0].title + "\n"
									+ "NASA ID: " + NASAInfo.collection.items[i].data[0].nasa_id + "\n"	
									+ "DATE CREATED: " + NASAInfo.collection.items[i].data[0].date_created + "\n"
									+ "KEYWORDS: " + keywords;
				j++;
			}
		}
	});
	$w("#result").text = "Retrieved information for " + $w("#searchInput").value + "\n" + "Showing top 50 results";
}

// Listener event for filtered search by location
export function locationBtn_click(event) {
	$w("#result").text = "Retrieving information for " + $w("#locationInput").value + "...";
	getNASAImagebyLocation($w("#locationInput").value)
	.then(NASALocationInfo => {
		var i = 0;
		for (var j = 1; j <= 50; i++) {
			if (NASALocationInfo.collection.items[i].data[0].media_type == "image") {
				var keywords = "";
				for (let k in NASALocationInfo.collection.items[i].data[0].keywords) {
					keywords = keywords + NASALocationInfo.collection.items[i].data[0].keywords[k] + ", ";
				}
				$w(("#image" + j)).src = NASALocationInfo.collection.items[i].links[0].href;
				$w(("#text" + j)).text = NASALocationInfo.collection.items[i].data[0].title + "\n"
									+ "NASA ID: " + NASALocationInfo.collection.items[i].data[0].nasa_id + "\n"	
									+ "DATE CREATED: " + NASALocationInfo.collection.items[i].data[0].date_created + "\n"
									+ "KEYWORDS: " + keywords;
				j++;
			}
		}
	});  
	$w("#result").text = "Retrieved information for " + $w("#locationInput").value + "\n" + "Showing top 50 results";
}

// Listener event for filtered search by start year for results
export function startYrBtn_click(event) {
	$w("#result").text = "Retrieving information for " + $w("#startYrInput").value + "...";
	getNASAImagebyYearStart($w("#startYrInput").value)
	.then(NASAStartYrInfo => {
		var i = 0;
		for (var j = 1; j <= 50; i++) {
			if (NASAStartYrInfo.collection.items[i].data[0].media_type == "image") {
				var keywords = "";
				for (let k in NASAStartYrInfo.collection.items[i].data[0].keywords) {
					keywords = keywords + NASAStartYrInfo.collection.items[i].data[0].keywords[k] + ", ";
				}
				$w(("#image" + j)).src = NASAStartYrInfo.collection.items[i].links[0].href;
				$w(("#text" + j)).text = NASAStartYrInfo.collection.items[i].data[0].title + "\n"
									+ "NASA ID: " + NASAStartYrInfo.collection.items[i].data[0].nasa_id + "\n"	
									+ "DATE CREATED: " + NASAStartYrInfo.collection.items[i].data[0].date_created + "\n"
									+ "KEYWORDS: " + keywords;
				j++;
			}
		}
	});  
	$w("#result").text = "Retrieved information for " + $w("#startYrInput").value + "\n" + "Showing top 50 results";
}

// Listener event for filtered search by end year for results
export function endYrBtn_click(event) {
	$w("#result").text = "Retrieving information for " + $w("#endYrInput").value + "...";
	getNASAImagebyYearEnd($w("#endYrInput").value)
	.then(NASAEndYrInfo => {
		var i = 0;
		for (var j = 1; j <= 50; i++) {
			if (NASAEndYrInfo.collection.items[i].data[0].media_type == "image") {
				var keywords = "";
				for (let k in NASAEndYrInfo.collection.items[i].data[0].keywords) {
					keywords = keywords + NASAEndYrInfo.collection.items[i].data[0].keywords[k] + ",";
				}
				$w(("#image" + j)).src = NASAEndYrInfo.collection.items[i].links[0].href;
				$w(("#text" + j)).text = NASAEndYrInfo.collection.items[i].data[0].title + "\n"
									+ "NASA ID: " + NASAEndYrInfo.collection.items[i].data[0].nasa_id + "\n"	
									+ "DATE CREATED: " + NASAEndYrInfo.collection.items[i].data[0].date_created + "\n"
									+ "KEYWORDS: " + keywords;
				j++;
			}
		}
	});  
	$w("#result").text = "Retrieved information for " + $w("#endYrInput").value + "\n" + "Showing top 50 results"; 
}
