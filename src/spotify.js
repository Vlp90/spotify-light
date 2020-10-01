// contact API SPOTIFY AUTH
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Then redirect to this adress
const redirectUri = "http://localhost:3000/";

// PROD VERSION
// const redirectUri = "https://spotify-light.web.app/";

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

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;