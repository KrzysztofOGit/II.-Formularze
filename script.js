const bookTitle = document.getElementById('bookTitle');
const author = document.getElementById('author');
const priority = document.getElementById('priority');
const category = document.getElementById('category');
const btn = document.getElementById('button');

var tabBooks = [];

//zapis po odswiezeniu istniejacego local storage
let tempTabBooks = JSON.parse(localStorage.getItem('arrBooks'));
if (tabBooks.length === 0){
	tabBooks = tempTabBooks;
}
//wyswietlenie tablicy z ksiazkami po zaladowaniu strony
for(let key in tabBooks){
	let liTitle = document.createElement("li");
	let liAuthor = document.createElement("li");
	let liPriority = document.createElement("li");
	let liCategory = document.createElement("li");

	let showValueTitle = document.createTextNode(tabBooks[key].valueBookTitle);
	let showValueAutor = document.createTextNode(tabBooks[key].valueAuthor);
	let showValuePriority = document.createTextNode(tabBooks[key].valuePriority);
	let showValueCategory = document.createTextNode(tabBooks[key].valueCategory);

	liTitle.appendChild(showValueTitle);
	liAuthor.appendChild(showValueAutor);
	liPriority.appendChild(showValuePriority);
	liCategory.appendChild(showValueCategory);
	
	document.getElementById("showTitle").appendChild(liTitle);
	document.getElementById("showAuthor").appendChild(liAuthor);
	document.getElementById("showPriority").appendChild(liPriority);
	document.getElementById("showCategory").appendChild(liCategory);
}

//wyswietlenie nowej ksiazki do listy
function addBooks(){
	let i = tabBooks.length-1;
	let lastBook = tabBooks[i];

	let liTitle = document.createElement("li");
	let liAuthor = document.createElement("li");
	let liPriority = document.createElement("li");
	let liCategory = document.createElement("li");

	let showValueTitle = document.createTextNode(tabBooks[i].valueBookTitle);
	let showValueAutor = document.createTextNode(tabBooks[i].valueAuthor);
	let showValuePriority = document.createTextNode(tabBooks[i].valuePriority);
	let showValueCategory = document.createTextNode(tabBooks[i].valueCategory);

	liTitle.appendChild(showValueTitle);
	liAuthor.appendChild(showValueAutor);
	liPriority.appendChild(showValuePriority);
	liCategory.appendChild(showValueCategory);
	
	document.getElementById("showTitle").appendChild(liTitle);
	document.getElementById("showAuthor").appendChild(liAuthor);
	document.getElementById("showPriority").appendChild(liPriority);
	document.getElementById("showCategory").appendChild(liCategory);
}

btn.addEventListener('click', function(){
	if ((bookTitle.value.length > 1)  && (author.value.length > 2)){
		const objBook = {
			valueBookTitle: bookTitle.value,
  		valueAuthor: author.value,
			valuePriority: priority.value,
	  	valueCategory: category.value
			}
			
			tabBooks.push(objBook);
			localStorage.setItem('arrBooks', JSON.stringify(tabBooks));
			addBooks();
						
		} else {
			info.innerHTML="Ksiązka nie została dodana za krótki tytuł lub autor! Prosze popraw.";
		}


  
}, false );