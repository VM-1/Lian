document.addEventListener("DOMContentLoaded" ,function(){
	let burgerMenu = document.querySelector(".header-burger");
	burgerMenu.addEventListener("click", function(){
		burgerMenu.classList.toggle('active');
		document.querySelector(".header-nav").classList.toggle('active');
	})
	const anchors = document.querySelectorAll('a[class*="ancor"]')
		for(let anchor of anchors) {
			anchor.addEventListener("click",function(event) {
				event.preventDefault();
				const blockID = anchor.getAttribute('href')
				document.querySelector('' +blockID).scrollIntoView({
					behavior:"smooth",
					block: "start"
				})
			})
		};
	let headerSearchImg = document.querySelector(".header-search-img");
	headerSearchImg.addEventListener("click", function(){
		document.querySelector(".header-search-input").classList.toggle('active')
	})
	let header = document.querySelector("header");
	window.onscroll = function (){
		let scrHeight = window.pageYOffset;
		if (scrHeight >= 20) {
			header.classList.add("scroll")
		}else{
			header.classList.remove("scroll")
		}
	}
});
function initMap() {
  // The location of Uluru
  var uluru = {lat: 40.683948, lng: -73.793661};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
function headeritem(headerItem,heaerItemText,headerItemName){
	if (heaerItemText == headerItemName){
		headerItem.classList.add('active');
	}
}
const heaerListItems = document.querySelectorAll(".header-list-item");
function headeritem(heaerListItem,headerItemName){
	for(heaerListItem of heaerListItems){
		let heaerItemText = heaerListItem.innerText;
		if (heaerItemText == headerItemName){
			heaerListItem.classList.add('active');
		}
	}
}
headeritem(heaerListItems,'CONTACT');
