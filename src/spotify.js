// contact API SPOTIFY AUTH
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Then redirect to this adress
const redirectUri = "http://localhost:3000/";

// Spotify client ID
const clientId = "6cc1c1fc21f64cb7a5e5178330285ae0";

// Spotify permissions to do following stuffs
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// pull the access Token out from the URL
export const getTokenFromUrl = () => {
  return window.location.hash.substring(1).split("&").reduce((initial, item)=> {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial;
  }, {});
};

// Go to sportify login page then log in and redirect to my website
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
