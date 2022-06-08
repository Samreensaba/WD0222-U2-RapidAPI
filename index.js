function search(query){
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + query, {
        method: "GET",
        headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': 'c9015832b7msh8f40a7285dd11fcp1153a1jsn65bb9d9642d7'
        },
        })
        .then(response => response.json())
        .then(body =>{
            console.log('resolved', body)
            if (body.data) {
                const title = query;
                const songs = body.data.slice(0, 24);
                let pageContent = document.querySelector(".page-content");
                let rowContent = "";
                let pageContentHTML = "";

                for (let i = 0; i < songs.length; i++) {
                const song = songs[i];
                console.log(songs.length);
                rowContent += SingleAlbum(song);
                }
                pageContentHTML = AlbumSection(title, rowContent);
        pageContent.innerHTML += pageContentHTML;

        // makes the unique btn visible if there are albums in the page
        const buttonsDiv = document.getElementById("buttons");
        buttonsDiv.classList.remove("d-none");
      } else {
        console.error("no data from fetch");

        //taking away the count unique btn if there are no albums in the page
        const buttonsDiv = document.getElementById("buttons");
        buttonsDiv.classList.add("d-none");

        let pageContent = document.querySelector(".page-content");
        pageContent.innerHTML = `<div class="alert alert-danger mx-5" role="alert">No data from fetch: <strong>${body.error.message}</strong>, please refresh to try again</div>`;
      }
    })
    .catch(err => {
      // rejected
      console.log("rejected");
      console.error(err);
    });
}

function SingleAlbum(song) {
    const title = song.title_short;
    const cover = song.album.cover_medium;
    const id = song.album.id;
    return `
    <div class="col-12 col-sm-4 col-lg-2">
      <div id=${id} class="single-album card bg-dark">
        <img
          class="card-img"
          src=${cover}
          alt="album"
        />
        <p class="my-2">${title}</p>
      </div>
    </div>
    `;
}
function AlbumSection(sectionTitle, albumsHTML) {
    return `<div class="albums mt-5">
      <h2 class="mb-3 pl-5">${sectionTitle}</h2>
      <div class="album-cover row px-5">
         ${albumsHTML}
    </div>
  `;
  }
  
  window.onload = function () {
    search("Pink Floyd");
    search("Daft Punk");
    search("Metallica");
  };
  
  function countUniqueAlbums() {
    const albums = document.querySelectorAll(".single-album");
    const ids = [];
  
    for (let i = 0; i < albums.length; i++) {
      const album = albums[i];
      let isUnique = true;
  
      //for every cycle of the top loop this checks every element in the ids array
      for (let j = 0; j < ids.length; j++) {
        const id = ids[j];
  
        // if the current album.id is equal to another one already pushed in the ids array the isUnique variable will be turned false
        if (album.id === id) {
          isUnique = false;
        }
      }
      console.log(ids);
      if (isUnique) {
        // and if isUnique is false this will not run and won't push any id that already exists in the ids array
        // if isUnique stays true it means the id is not yet present in the ids array and it will then be pushed
        ids.push(album.id);
      }
    }
  
    // this reads the number of unique albums present in the page
    console.log(`There is ${ids.length} unique albums on the page!`);
    alert(`There is ${ids.length} unique albums on the page!`);
  }
  
  function showAlbumList() {
    const albums = document.querySelectorAll(".single-album");
    const ul = document.querySelector(".modal-body ul");
  
    for (let i = 0; i < albums.length; i++) {
      const song = albums[i];
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.innerText = song.innerText;
      ul.appendChild(li);
    }
  }