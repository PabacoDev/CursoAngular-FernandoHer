
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;

}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {song: anotherSong, 
    songDuration: duration, 
    details
} = audioPlayer

const {author} = details;

// console.log('Song: ', anotherSong)
// console.log('Duration: ', duration)
// console.log('Author: ', author)

const [, , trunks]: string[] = ['Goku', 'Vegeta', 'Trunk'];

console.error('Personaje 3: ', trunks || 'Not Found');


export {};