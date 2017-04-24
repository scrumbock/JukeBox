function Jukebox() {
	// this.artist = artist;
	this.playSong = playsong;
	this.pauseSong = pauseSong;
	this.stopSong = stopSong;
	this.getSong = getSong;
	this.shuffleSong = shuffle;
	this.switchSong = switchSong;
}

var audio = document.getElementsByClassName("audio")[0];
audio.src = "lush.mp3"
// Do i need variables (instances) for the above functions?(methods?)



var song =('<source src=')+(songTitle)+('>')


// var playButton = document.getElementsByClassName("play")[0];
// var lushLight = document.getElementsByClassName("light")[1];
// playButton.addEventListener("click", lushLight.play);

var suzannJukebox = new Jukebox();

function Song(fileName, artist) {
	this.fileName = fileName;
	this.artist = artist;
}

var hypocrite = new Song("hypocrite.mp3", "Lush")
var light = new Song("lush.mp3")

playButton.addEventListener("click", playSong)
function playSong() {
	audio.play();
}

function Playlist(playlistName) {
	this.playlistName = playlistName;
	this.songList = [];
	this.addSong = addSong;
}


function addSong(fileName) {
	this.songList.push(Song);
}


addSong("lush.mp3")



var lush = new Playlist("lush.mp3"); 


