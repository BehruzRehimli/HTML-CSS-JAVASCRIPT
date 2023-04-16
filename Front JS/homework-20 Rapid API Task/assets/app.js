let content=document.querySelector(".content")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0e07b34f78mshe5711dd906a7d6bp16197cjsn06662fa42f2c',
		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
	}
};

function Category(){
	
	fetch('https://advanced-movie-search.p.rapidapi.com/genre/movie/list', options)
		.then(response => response.json())
		.then(response => {
			let x='';
			console.log(response);
			response.genres.forEach(element => {
				console.log(element.id+" "+element.name)
				x+=`
				<a href="#" class="${element.id}">${element.name}</a>                
				`
			});
			content.innerHTML=x;
		},[])
		.catch(err => console.error(err));
	
}

let movies=document.querySelector(".movies")

function List(){
	
	fetch('https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=80&page=1', options)
		.then(response => response.json())
		.then(response => {
			let x=''
			response.results.forEach(element => {
				x+=`
				<div id="${element.id}" class="movie col-lg-3">
                <img src="${element.poster_path}" alt="">
                <h4>${element.title}</h4>
                <p class="imdb">IMDB: ${element.vote_average}</p>
                <p class="year">${element.release_date===undefined?"yakında":element.release_date}</p>
            </div>

				`
			});
			movies.innerHTML=x;
		},[])
		.catch(err => console.error(err));
	
	
	
}
async function Main(){
	await List();
	// await Category();
}

Main();

