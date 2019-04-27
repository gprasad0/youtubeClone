import axios from "axios";

const KEY = "AIzaSyBL50G8zI0_7O_P5cWNj__ndxmX5Slpj6Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
