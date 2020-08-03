// @prepros-prepend header.js
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
// @prepros-prepend active-item.js