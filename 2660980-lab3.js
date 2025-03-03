

function getMusicTitlesByYear(tracks){
    
    if(tracks.length == 0){
        throw new Error('Empty Array');
    }
    let music= {};
        tracks.forEach(track => {
            if(!track.title || !track.artist || !track.year){
                throw new Error('Missing properties');
            }
            else if(typeof track.year !== 'number'){
                throw new Error('Track year must be a number')
            }
            if (music[track.year]) {
                music[track.year].push(track.title);
            }
            else {
                music[track.year] = [track.title];
            }
        });
        for (let year in music) {
            music[year].sort();
        }
        return music;

}

const tracks = [
    { title: 'Levitating', artist: 'Dua Lipa',year:2019},
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
];

try {
    console.log(getMusicTitlesByYear(tracks));
} catch (error) {
    console.log(`${error}`)
}