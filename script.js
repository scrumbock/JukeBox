
var suzannJukebox = new Jukebox();

var audio = document.getElementsByClassName("audio")[0];
var playButton = document.getElementsByClassName("play")[0];
var pauseButton = document.getElementsByClassName("pause")[0];
var stopButton = document.getElementsByClassName("stop")[0];
var nextButton = document.getElementsByClassName("next")[0];
var myAudio = document.getElementsByClassName("audio")[0];
var myArt = document.getElementsByClassName("album-art")[0];


var light = new Song("light.mp3");
var ladykillers = new Song("ladykillers.mp3");
var hypocrite = new Song("hypocrite.mp3"); 

var lushone = new Art("lushbandone.png");
var lushtwo = new Art("lushbandtwo.png");
var lushthree = new Art("lushbandthree.png");


playButton.addEventListener("click", suzannJukebox.playSong);
pauseButton.addEventListener("click", suzannJukebox.pauseSong);
stopButton.addEventListener("click", suzannJukebox.stopSong);
nextButton.addEventListener("click", suzannJukebox.nextSong);

window.addEventListener("load", suzannJukebox.playSong);

suzannJukebox.addSong(hypocrite);
suzannJukebox.addSong(ladykillers);
suzannJukebox.addSong(light);

suzannJukebox.addArt(lushone);
suzannJukebox.addArt(lushtwo);
suzannJukebox.addArt(lushthree);

function Jukebox() {
	// this.artist = artist;
	this.songList = [];
	this.currentSong = 0;
	this.playSong = playSong;
	this.pauseSong = pauseSong;
	this.stopSong = stopSong;
	this.nextSong = nextSong;
	this.artList = [];
	this.currentArt = 0;
	// this.getSong = getSong;
	// this.shuffleSong = shuffle;
	// this.switchSong = switchSong;
	
	this.addSong = addSong;
	this.addArt = addArt;

	function addArt(fileName) {
		this.artList.push(fileName);
	}

	function addSong(fileName) {
		this.songList.push(fileName);
	}

	function playSong() {
		var count = suzannJukebox.currentSong;
		myAudio.src = suzannJukebox.songList[count].fileName;
		myArt.innerHTML = suzannJukebox.artList[count].fileName;
		myAudio.play();
		}

	function pauseSong() {
		myAudio.pause();
		}

	function stopSong() {
		myAudio.load();
	}
	function nextSong() {
		suzannJukebox.currentSong += 1;
		if (suzannJukebox.currentSong < suzannJukebox.songList.length) {
			suzannJukebox.playSong()
		} else {suzannJukebox.currentSong = 0; suzannJukebox.playSong()
		};
	}
}

function Song(fileName) {
	this.fileName = fileName;
	// this.artist = artist;
}

function Art(fileName) {
	this.fileName = fileName;
}



// var song =('<source src=')+(songTitle)+('>')


