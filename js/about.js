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
window.addEventListener('scroll', function() {
	let aboutSkills = document.querySelector('.about-skills');
	aboutSkillsTop = aboutSkills.offsetTop - aboutSkills.offsetHeight;
	if (pageYOffset >= aboutSkillsTop){
		const progressBars = document.querySelectorAll('[data-progress]')
		for(progressBar of progressBars){
			const progressBarAttr = progressBar.getAttribute('data-progress') 
		    progressBar.style.width = progressBarAttr + '%';
		    progressBar.children[0].innerText = progressBarAttr + '%' 
			const lads = document.querySelectorAll('.about-progress-top');
		}
	}
});
headeritem(heaerListItems,'ABOUT');