const songsReducer = () => {
  return [
    { title: 'Aankh Marey', duration: '4:05' },
    { title: 'Tum Hi Ho', duration: '3:10' },
    { title: 'Dil Chori', duration: '2:15' },
    { title: 'BackStreet Boys', duration: '4:15' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;

    default:
      return selectedSong;
  }
};
