/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
	toggleMenu = document.getElementById('nav-toggle'),
	closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
	navMenu.classList.toggle('show');
});

// HIDDEN
closeMenu.addEventListener('click', () => {
	navMenu.classList.remove('show');
});

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e) {
	this.querySelectorAll('.move').forEach((layer) => {
		const speed = layer.getAttribute('data-speed');

		const x = (window.innerWidth - e.pageX * speed) / 120;
		const y = (window.innerHeight - e.pageY * speed) / 120;

		layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from('.nav__item', { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2 });

// HOME
gsap.from('.home__title', { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from('.home__description', { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from('.home__button', { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from('.home__img', { opacity: 0, duration: 1, delay: 1.3, y: 30 });
gsap.from('.searchContainer', { opacity: 0, duration: 1, delay: 2.5, y: 30 });
gsap.from('#getButtonContainer', { opacity: 0, duration: 1, delay: 2.5, y: 30 });
gsap.from('#getButton', { opacity: 0, duration: 1, delay: 2.5, y: 30 });
gsap.from('form', { opacity: 0, duration: 1, delay: 2.5, y: 30 });
gsap.from('.footer-end', { opacity: 0, duration: 1, delay: 2.5, y: 30 });

// API

// Asynchronous function to fetch data from the API.
async function sendApiRequest() {
	let APP_ID = 'db28d656';
	let API_KEY = 'bd101371985fc8d287173a31e405feff';
	let input = document.querySelector('#inputRecipe');
	let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${input.value}`);
	console.log(response);
	let data = await response.json();
	console.log(data);
	useApiData(data);
}

async function sendApiRequestForRecipe() {
	let APP_ID = 'db28d656';
	let API_KEY = 'bd101371985fc8d287173a31e405feff';
	let RECIPE = 'Chicken Fajita';
	let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${RECIPE}`);
	console.log(response);
	let data = await response.json();
	console.log(data);
	useApiDataRecipe(data);
}

// Function that does something with the data that is received from the api.
function useApiData(data) {
	document.querySelector('#cardBox').innerHTML = `
    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[0].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[0].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[0].recipe.ingredientLines}
        </p>
         <div class="cardTag">
      <a href="#" class="tag yellow"> ${data.hits[0].recipe.healthLabels[0]}</a>
      <a href="#" class="tag red"> ${data.hits[0].recipe.healthLabels[1]}</a> 
      <a href="#" class="tag blue">${data.hits[0].recipe.healthLabels[2]}</a>
      <a href="#" class="tag green">${data.hits[0].recipe.healthLabels[3]}</a>
       </div>
        <a href="${data.hits[0].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card">
    <img
        class="card-img-top"
        src="${data.hits[1].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[1].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[1].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[1].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[1].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[1].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[1].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[1].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[2].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[2].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[2].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[2].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[2].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[2].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[2].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[2].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card">
    <img
        class="card-img-top"
        src="${data.hits[3].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[3].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[3].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[3].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[3].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[3].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[3].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[3].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[4].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[4].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[4].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[4].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[4].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[4].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[4].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[4].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card">
    <img
        class="card-img-top"
        src="${data.hits[5].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[5].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[5].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[5].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[5].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[5].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[5].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[5].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[6].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[6].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[6].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[6].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[6].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[6].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[6].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[6].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card">
    <img
        class="card-img-top"
        src="${data.hits[7].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[7].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[7].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[7].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[7].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[7].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[7].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[7].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[8].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[8].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[8].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[8].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[8].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[8].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[8].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[8].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[9].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[9].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[9].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[9].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[9].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[9].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[9].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[9].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

   
    `;
}

function useApiDataRecipe(data) {
	document.querySelector('#cardBox1').innerHTML = `
    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[0].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[0].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[0].recipe.ingredientLines}
        </p>
         <div class="cardTag">
      <a href="#" class="tag yellow"> ${data.hits[0].recipe.healthLabels[0]}</a>
      <a href="#" class="tag red"> ${data.hits[0].recipe.healthLabels[1]}</a> 
      <a href="#" class="tag blue">${data.hits[0].recipe.healthLabels[2]}</a>
      <a href="#" class="tag green">${data.hits[0].recipe.healthLabels[3]}</a>
       </div>
        <a href="${data.hits[0].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card">
    <img
        class="card-img-top"
        src="${data.hits[1].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[1].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[1].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[1].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[1].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[1].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[1].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[1].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[2].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[2].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[2].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[2].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[2].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[2].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[2].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[2].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card">
    <img
        class="card-img-top"
        src="${data.hits[3].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[3].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[3].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[3].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[3].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[3].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[3].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[3].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[4].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[4].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[4].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[4].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[4].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[4].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[4].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[4].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card">
    <img
        class="card-img-top"
        src="${data.hits[5].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[5].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[5].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[5].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[5].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[5].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[5].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[5].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[6].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[6].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[6].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[6].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[6].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[6].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[6].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[6].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card">
    <img
        class="card-img-top"
        src="${data.hits[7].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[7].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[7].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[7].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[7].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[7].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[7].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[7].recipe.url}" class="btn btn-dkk1">View Recipe</a>
        <form action = '' method = 'POST' class='form1'>
        <button class = "btn btn-dkk1" id='btnz' type="submit"> Save Recipe</button>
        </form>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[8].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[8].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[8].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[8].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[8].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[8].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[8].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[8].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

    <div class="card" >
    <img
        class="card-img-top"
        src="${data.hits[9].recipe.image}"
        alt="Card image cap"
    />
    <div class="card-body">
        <h5 class="card-title">${data.hits[9].recipe.label}</h5>
        <p class="card-text">
            ${data.hits[9].recipe.ingredientLines}
        </p>
        <div class="cardTag">
        <a href="#" class="tag yellow"> ${data.hits[9].recipe.healthLabels[0]}</a>
        <a href="#" class="tag red"> ${data.hits[9].recipe.healthLabels[1]}</a> 
        <a href="#" class="tag blue">${data.hits[9].recipe.healthLabels[2]}</a>
        <a href="#" class="tag green">${data.hits[9].recipe.healthLabels[3]}</a>
         </div>
        <a href="${data.hits[9].recipe.url}" class="btn btn-dkk1">View Recipe</a>
    </div>
    </div>

   
    `;
}

