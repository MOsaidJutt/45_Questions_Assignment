// Album: Write a function called make_album() that builds an object describing a music album.

function make_album(artist: string, albumTitle: string, tracks?: number) {
    let album = {
        artist: artist,
        title: albumTitle
    };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album('Pink Floyd', 'The Dark Side of the Moon'));
console.log(make_album('Led Zeppelin', 'Led Zeppelin IV'));
console.log(make_album('The Beatles', 'Abbey Road', 17));
