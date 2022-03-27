import { Store } from "pullstate";

export const MovieStore = new Store( {
  movies: [
    {
      "name": "King Kong",
      "own": true,
      "watched": false,
      "watchlist": false,
      "image": "https://www.gravatar.com/avatar/7e6655a9-4def-4ab2-a62b-ad182010202d?d=retro",
      "id": "yuyuku-7322e-4ac8-a7bb-c17d1d24be62"
  },
    {
      "name": "Spider-Man 3",
      "own": true,
      "watched": false,
      "watchlist": false,
      "image": "https://www.gravatar.com/avatar/7e6655a9-4def-4ab2-a62b-adrrr182010202d?d=retro",
      "id": "iiiuiui-7322e-4ac8-a7bb-c17d1d24be62"
  }
  ],
  movie:null
} );