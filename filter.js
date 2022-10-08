// const filterBox = document.querySelectorALL('.block');

//  document.querySelector('.l').addEventListener('click',() => { alert ("Hello World!")} );

// let elemet = document.querySelector('.g')
// elemet.addEventListener('click', myFunction);

// function myFunction() {
// 	alert("Valerie");
// }
// let element2 = document.getElementBy

const filterbox = document.querySelectorAll(".block");

document.querySelector('nav').addEventListener('click', (event) => {
	if (event.target.tagName != 'LI')
		return false;

	let filterClass = event.target.dataset['f'];

	filterbox.forEach( elem => {
		elem.classList.remove('hide');

		if (!elem.classList.contains(filterClass) && filterClass !== "all"){
			elem.classList.add("hide");
		}
	})

})
