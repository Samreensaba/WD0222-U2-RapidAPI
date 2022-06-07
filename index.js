const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': 'c9015832b7msh8f40a7285dd11fcp1153a1jsn65bb9d9642d7'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    const grid = document.querySelector(".container > .row")

                    for (let i = 0; i < response.length; i++) {
                        const response = response[i]

                        const col = document.createElement("div")
                        col.className = "col-sm-6 col-md-4 col-lg-3"

                        col.innerHTML = `
                                    <div class="card">
                                        <img src=${data.md5_image} class="card-img-top" alt=${book.title}>
                                        <div class="card-body">
                                            <h5 class="card-title">${data.title}</h5>
                                            <p class="card-text">${data.duration}</p>
                                            <a href="#" class="btn btn-primary">button</a>
                                        </div>
                                    </div>
                    `

                        grid.appendChild(col)
                    }
        

