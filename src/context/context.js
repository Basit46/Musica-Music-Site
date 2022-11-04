import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useCallback,
} from "react";

const songsContext = createContext();

const OurProvider = ({ children }) => {
  //states
  const audioRef = useRef();
  const searchInputRef = useRef(); //The state of the input of the search bar
  const [openMenu, setOpenMenu] = useState(false); //To close and open menu

  const [isloading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); //to know if a song is playing or not
  const [repeatSong, setRepeatSong] = useState(false); //to know if to repeat a song if it has finished
  const [isOnShuffle, setIsOnShuffle] = useState(false); //to know if shuffle is on
  const [searchedSong, setSearchedSong] = useState([]); //the result of the songs of a searched artist
  const [charts, setCharts] = useState(null); //the charts(playlist)
  const [chartToBeViewed, setChartToBeViewed] = useState(null); //the chart we are going to view in the viewchart page
  //songs is where the songs are stored
  const [songs, setSongs] = useState([
    {
      id: "popular-3",
      artist: "Burna Boy",
      title: "Last Last",
      cover: "https://musica-api.up.railway.app/cover/cover_13.jpg",
      audio: "https://musica-api.up.railway.app/audio/audio_13.mp3",
    },
  ]);

  //This is a clone of the songs state because the songs are edited when we want to play a playlist
  //So when we want to play a song not in playlist, we can just copy the initial songs from this state
  const [songsClone, setSongsClone] = useState([
    {
      id: "popular-3",
      artist: "Burna Boy",
      title: "Last Last",
      cover: "https://musica-api.up.railway.app/cover/cover_13.jpg",
      audio: "https://musica-api.up.railway.app/audio/audio_13.mp3",
    },
  ]);

  const [currentSong, setCurrentSong] = useState(songs[0]); //the current song we are going to play

  //Actions
  //--------
  //this is a function to add fetched songs to a the songs state and also the songsclone
  const addSongsToList = (newsong) => {
    if (
      songs.filter((song) => song?.id === newsong[newsong.length - 1]?.id)
        .length > 0
    ) {
      return;
    } else {
      setSongs([...songs, ...newsong]);
      setSongsClone([...songs, ...newsong]);
    }
  };

  const addChartsToSongs = (newcharts) => {};

  //This action run when we click a song
  const getSongToPlay = async (id) => {
    await setSongs(songsClone);
    await setIsPlaying(false);
    await setCurrentSong(songs.find((song) => song.id === id));
    setIsLoading(true);
    setIsPlaying(true);
  };

  //play next song this runs when a song finishes or we click the next button
  const getNextSong = (id) => {
    if (isOnShuffle) {
      shufflesong();
      setIsLoading(true);
    } else {
      const songIndex = songs.findIndex((song) => song.id === id);
      const nextSongIndex = songIndex + 1;
      if (repeatSong) {
        setCurrentSong(songs[songIndex]);
        setIsLoading(true);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        if (nextSongIndex > songs.length - 1) {
          setCurrentSong(songs[0]);
          setIsLoading(true);
        } else {
          setCurrentSong(songs[nextSongIndex]);
          setIsLoading(true);
        }
      }
    }
  };

  //to play previous song
  const getPreviousSong = (id) => {
    const songIndex = songs.findIndex((song) => song.id === id);
    const prevSongIndex = songIndex - 1;
    if (repeatSong) {
      setCurrentSong(songs[songIndex]);
      setIsLoading(true);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      if (prevSongIndex < 0) {
        setCurrentSong(songs[songs.length - 1]);
        setIsLoading(true);
      } else {
        setCurrentSong(songs[prevSongIndex]);
        setIsLoading(true);
      }
    }
  };

  //when the shuffle is on, we can get random songs with this function
  const shufflesong = () => {
    const randomSongIndex = Math.round(Math.random() * songs.length);
    setCurrentSong(songs[randomSongIndex]);
  };

  //to get songs for an artist w search in the searchbar
  const getSearchedSong = (artist) => {
    if (artist === "") {
      setSearchedSong([]);
    } else {
      const returnedSongs = songs.filter((song) =>
        song.artist.toLowerCase().includes(artist.toLowerCase())
      );
      setSearchedSong(returnedSongs);
    }
  };

  //This function returns the chart we are going to view in the viewchart
  const getChartToBeViewed = useCallback(
    (id) => {
      setChartToBeViewed(charts.find((chart) => chart.id === id));
    },
    [charts, setChartToBeViewed]
  );

  return (
    <songsContext.Provider
      value={{
        isloading,
        setIsLoading,
        openMenu,
        setOpenMenu,
        addSongsToList,
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        getSongToPlay,
        isPlaying,
        setIsPlaying,
        getNextSong,
        getPreviousSong,
        repeatSong,
        setRepeatSong,
        audioRef,
        shufflesong,
        isOnShuffle,
        setIsOnShuffle,
        searchInputRef,
        searchedSong,
        setSearchedSong,
        getSearchedSong,
        charts,
        setCharts,
        chartToBeViewed,
        getChartToBeViewed,
        addChartsToSongs,
      }}
    >
      {children}
    </songsContext.Provider>
  );
};

export default OurProvider;

export const useSongsContext = () => {
  return useContext(songsContext);
};
