function displayBestMovie(){
//Récuperer information meilleur film
var post;

// Call the API
fetch('http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable
	post = data;
	film = data.results[0];
    json = film.url;
    document.getElementById("best-film-img").setAttribute( "src", film.image_url );
    document.getElementById("title").textContent = film.title ;
    document.getElementsByTagName("span")[1].innerHTML = film.id;


	// Fetch another API
	return fetch(json);

}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (filmData) {
        document.getElementById("description").textContent = filmData.long_description ;

}).catch(function (error) {
	console.log(error);
});

}

function displayBestMovies(){
//Récuperer informations des meilleurs films
var post;

// Call the API
fetch('http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable
	post = data;
	next = data.next;
	console.log("next" + next)
	films = data.results;
	delete films[0];
	let img = document.querySelectorAll('#best-note #section1 img');
	let span = document.querySelectorAll('#best-note  #section1 span');

    for(var i= 1; i < 5; i++)
    {
      img[i-1].setAttribute( "src", films[i].image_url );
      span[i-1].innerHTML = films[i].id ;

    }

	// Fetch another API
	return fetch(next);

}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (filmData) {

    films = filmData.results;
    console.log("films");
    console.log(films);
    let img = document.querySelectorAll('#best-note #section2 img');
    let span = document.querySelectorAll('#best-note  #section2 span');
    for(var i= 0; i < 3; i++)
    {
      img[i].setAttribute( "src", films[i].image_url );
      span[i].innerHTML = films[i].id ;
    }
}).catch(function (error) {
	console.warn(error);
});

}

function displayCrimeMovies(){
//Récuper informations catégories crime
var post;

// Call the API
fetch('http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=crime&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable

	post = data;
	next = data.next;
	films = data.results;
	let img = document.querySelectorAll('#crime #crimesection1 img');
	let span = document.querySelectorAll('#crime  #crimesection1 span');
	last_img = films[4].image_url
	last_id = films[4].id
    for(var i= 0; i <4 ; i++)
    {
     img[i].setAttribute( "src", films[i].image_url );
     span[i].innerHTML = films[i].id ;

    }

	// Fetch another API
	return fetch(next);

}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (filmData) {

    movie = filmData.results;
    let img = document.querySelectorAll('#crime #crimesection2 img');
    let span = document.querySelectorAll('#crime  #crimesection2 span');
    img[0].setAttribute( "src", last_img );
    span[0].innerHTML = last_id ;

    for(var i= 1; i < 3; i++)
    {
      img[i].setAttribute( "src", movie[i-1].image_url );
      span[i].innerHTML = movie[i-1].id ;
    }
}).catch(function (error) {
	console.warn(error);
});
}

function displayActionMovies(){
//Récuper informations catégories action
var post;

// Call the API
fetch('http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable

	post = data;
	next = data.next;
	films = data.results;
	console.log(films);
	let img = document.querySelectorAll('#action #actionsection1 img');
	let span = document.querySelectorAll('#action  #actionsection1 span');
	last_image = films[4].image_url;
	last_id1 = films[4].id;
    for(var i= 0; i <4 ; i++)
    {
      img[i].setAttribute( "src", films[i].image_url );
     span[i].textContent = films[i].id ;

    }

	// Fetch another API
	return fetch(next);

}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (filmData) {

    movie = filmData.results;
    let img = document.querySelectorAll('#action #actionsection2 img');
    let span = document.querySelectorAll('#action  #actionsection2 span');
    img[0].setAttribute( "src", last_image );
    span[0].innerHTML = last_id1 ;

    for(var i= 1; i < 3; i++)
    {
      img[i].setAttribute( "src", movie[i-1].image_url );
      span[i].textContent = movie[i-1].id ;
    }
}).catch(function (error) {
	console.warn(error);
});
}

function displayDramaMovies(){
//Récuper informations catégories drama
var post;

// Call the API
fetch('http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Drama&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable
	films = ""
	post = data;
	next = data.next;
	films = data.results;
	let img = document.querySelectorAll('#drama #dramasection1 img')
	let span = document.querySelectorAll('#drama  #dramasection1 span');
	last = films[4].image_url
	last_id2 = films[4].id
    for(var i= 0; i <4 ; i++)
    {

      img[i].setAttribute( "src", films[i].image_url );
     span[i].textContent = films[i].id ;

    }

	// Fetch another API
	return fetch(next);

}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (filmData) {

    movie= filmData.results;
    let img = document.querySelectorAll('#drama #dramasection2 img');
    let span = document.querySelectorAll('#drama  #dramasection2 span');
    img[0].setAttribute( "src", last );
    span[0].innerHTML = last_id2 ;


    for(var i= 1; i < 3; i++)
    {
      img[i].setAttribute( "src", movie[i-1].image_url );
      span[i].textContent = movie[i-1].id ;
    }
}).catch(function (error) {
	console.warn(error);
});

}



document.addEventListener("DOMContentLoaded", function(event) {



displayBestMovie()
displayBestMovies()
displayCrimeMovies()
displayActionMovies()
displayDramaMovies()

// Slider
var a = document.querySelectorAll(".wrapper a");
for (var i = 0; i < a.length; i++) {
       a[i].addEventListener('click',function(e){
        id = e.target.parentNode.id;
        el = document.getElementById(id);
        id2 = el.closest("section").parentNode.closest("section").id;

        if (id.substr(id.length - 1) == "1"){
        txt = id.slice(0, -1) +"2";
        elmnt = document.getElementById(id2);
        elmnt1 = document.getElementById(txt);

        elmnt1.scrollIntoView();
        elmnt.scrollIntoView();

        }
        if (id.substr(id.length - 1) == "2"){
        txt = id.slice(0, -1) +"1";
        elmnt = document.getElementById(id2);
        elmnt1 = document.getElementById(txt);
        document.querySelector(".wrapper").style.gridTemplateColumns = "repeat(3 auto)";
        elmnt1.scrollIntoView();
        elmnt.scrollIntoView();


        }

        });
    }



// Récupérer id du film avec bouton play
document.getElementById("play").onclick = function() {
 id = document.getElementById("best_movie_text").querySelector('span').textContent;
 document.getElementById('myModal').style.display = "block";
 Modal(id)
};


// Récupérer id du film avec image film
 var item = document.getElementsByClassName('item');
    for (var i = 0; i < item.length; i++) {
       item[i].addEventListener('click', function(){
            id = this.querySelector('span').textContent;
            document.getElementById('myModal').style.display = "block";
            Modal(id);
        });
    }




// Afficher Modal
function Modal(id){
    fetch("http://localhost:8000/api/v1/titles/"+id).then((response) => {
            response.json().then((info) => {
        //Ajouter titre au modal
        document.getElementById('myModal').querySelector('h1').innerHTML = info.title;
        //Ajouter image au modal
        document.getElementById('myModal').querySelector('img').setAttribute('src', info.image_url);
        //Ajouter genre au modal
         if (info.genres.length > 1){
            document.getElementById('p_genre').innerHTML = info.genres.join(", ");
            }
         else{
            document.getElementById('p_genre').innerHTML = info.genres[0] ;
            }
        //Ajouter date sortie au modal
        document.getElementById('p_out').innerHTML = info.date_published;
        //Ajouter rated au modal
        document.getElementById('p_rated').textContent = info.rated;
        //Ajouter score au modal
        document.getElementById('p_note').textContent = info.imdb_score;
        //Ajouter réalisateur au modal
        document.getElementById('p_real').textContent = info.directors;
        //Ajouter réalisateur au modal
        document.getElementById('p_acteur').textContent = info.actors.join(", ");
        //Ajouter réalisateur au modal
        document.getElementById('p_duree').textContent = info.duration +" minutes";
        //Ajouter pays d'origine au modal
        if (info.countries.length > 1){
            document.getElementById('p_origine').textContent = info.countries.join(", ");
        }
        else{
            document.getElementById('p_origine').textContent = info.countries[0];
        }
        if (info.worldwide_gross_income == null || info.budget_currency == null ){
        //Ajouter résultat box office au modal
        document.getElementById('p_box').textContent = "unknown" ;
        }
        else{
        //Ajouter résultat box office au modal
        document.getElementById('p_box').textContent = info.worldwide_gross_income +" "+info.budget_currency ;
        }

        //Ajouter résumé au modal
        document.getElementById('p_resume').textContent = info.long_description;

        });

     })
     .catch((error) => {
        console.log(error);
     });
}

//Fermer modal

document.getElementById("close").onclick = function() {
  document.getElementById('myModal').style.display = "none";
    };




});






