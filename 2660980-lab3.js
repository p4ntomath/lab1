function getMusicTitlesByYear(tracks) {
    if (tracks.length === 0 || !Array.isArray(tracks)) {
        throw new Error('Empty Array or Invalid Data Input');
    }
    let music = {};
    tracks.forEach(track => {
        if (!track.title || !track.artist || !track.year) {}
        else if (typeof track.year !== 'number') {}
        else{
            if (music[track.year]) {
                music[track.year].push(track.title);
            } else {
                music[track.year] = [track.title];
            }
        }
    });

    for (let year in music) {
        music[year].sort();
    }

    return music;
}
module.exports = { getMusicTitlesByYear };