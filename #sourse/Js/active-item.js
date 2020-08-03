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