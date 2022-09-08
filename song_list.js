//song list
let All_song = [
   {
     name: "Another Love",
     path: "1.mp3",
     img: "main.jpg",
     singer: "// but I love you (",
     numbr: "1",
   },
   {
     name: "Can we kiss forever",
     path: "2.mp3",
     img: "main.jpg",
     singer: "// but I love you (",
     numbr: "2",
   },
   {
     name: "State of Mind",
     path: "3.mp3",
     img: "main.jpg",
     singer: "// but I love you (",
     numbr: "3",
   },
   {
     name: "Adventure",
     path: "4.mp3",
     img: "main.jpg",
     singer: "// but I love you (",
     numbr: "4",
   },
   {
     name: "Eminem - Stan",
     path: "5.mp3",
     img: "main.jpg",
     singer: "// but I love you (",
     numbr: "5",
   },
   {
    name: "Pacify Her",
    path: "6.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "6",
   },
   {
    name: "Let Me Down Slowly",
    path: "7.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "7",
  },
  {
    name: "Get Lucky",
    path: "8.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "8",
  },
  {
    name: "Relax",
    path: "9.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "9",
  },
  {
    name: "Ilon-Musk",
    path: "10.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "10",
  },
  {
    name: "Are you with me",
    path: "11.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "11",
  },
  {
    name: "Je te laissare",
    path: "12.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "12",
  },
  {
    name: "Я б забыла",
    path: "13.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "13",
  },
  {
    name: "Every-breath",
    path: "14.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "14",
  },
  {
    name: "Creep",
    path: "15.mp3",
    img: "main.jpg",
    singer: "// but I love you (",
    numbr: "15",
  },
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <a class="numbr">${All_song[i].numbr}</a>
      <img src="${All_song[i].img}"/>
      </div>
    
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
       
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"><img src="play.png"></i></button>
     
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/
