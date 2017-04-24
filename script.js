function Jukebox(song, artist) {
	this.song = song;
	this.artist = artist;
	this.playSong = playsong;
	this.pauseSong = pauseSong;
	this.stopSong = stopSong;
	this.getSong = getSong;
	this.shuffleSong = shuffle;
	this.switchSong = switchSong;
}

function Playlist(artistName) {
	this.artistName = artistName;
	this.galaList = [];
}

var gala = new Playlist 