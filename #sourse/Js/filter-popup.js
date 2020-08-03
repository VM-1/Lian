const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth +'px';
let bodyFilter = document.querySelectorAll("[data-filter]");
bodyFilter.forEach(function(item) {
	item.addEventListener("click", function(){
		event.preventDefault();
		bodyFilter.forEach(function(item) {
			item.classList.remove('active');
		});
		this.classList.add('active');
		let filter = this.getAttribute('data-filter');
		catSort(filter);
	});
});
let filterImgs = document.querySelectorAll('.filter-section-img');
for (filterImg of filterImgs){
	filterImg.addEventListener('click' , function(){
		const filterPopupImg = document.querySelector(".filter-popup-img");
		const filterPopup = document.querySelector('.filter-popup');
		const  headerHeight = document.querySelector('.header').offsetHeight;
		filterPopup.style.top = headerHeight + 'px'
		document.querySelector('body').classList.add('lock');
		let  filterImgChild = this.children[0].cloneNode(true);
		filterPopup.classList.add('active');
		if (filterPopupImg.firstChild) {
			filterPopupImg.firstChild.remove();
		}
		filterPopupImg.insertAdjacentElement('afterbegin', filterImgChild);
		const filterPopupClose = document.querySelector('.filter-popup-close');
		filterPopup.addEventListener('click', function(e){
			if (!e.target.closest('.filter-pupup-contanin')){
				filterPopup.classList.remove('active');
				document.querySelector('body').classList.remove('lock');
				document.querySelector('body').style.paddingRight = '0px';
				document.querySelector('.header').style.paddingRight = '0px';
			}
		})
		filterPopupClose.addEventListener('click' , function(){
			event.preventDefault();
			document.querySelector('body').classList.remove('lock');
			filterPopup.classList.remove('active');
			document.querySelector('body').style.paddingRight = '0px';
			document.querySelector('.header').style.paddingRight = '0px';
		});
		document.querySelector('body').style.paddingRight = lockPaddingValue;
		document.querySelector('.header').style.paddingRight = lockPaddingValue;
	});
}
function catSort(filterCat){
	let bodyCat =  document.querySelectorAll("[data-cat]");
		if (filterCat == 'all') {
			bodyCat.forEach(function(item) {
				item.parentNode.classList.remove('hide');
				item.parentNode.classList.remove('active');
			});
		}else{
			bodyCat.forEach(function(item) {
				let bodyCatAttr = item.getAttribute('data-cat');
				if (filterCat !=bodyCatAttr){
					item.parentNode.classList.add('hide');
					item.parentNode.classList.remove('active');
				}else{
					item.parentNode.classList.remove('hide');
					item.parentNode.classList.add('active');
				}
			});
		}
}