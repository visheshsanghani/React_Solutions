import axios from 'axios';

export default axios.create({
  baseURL : "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 3ee48c0db7de1ca41054d37e57f0856b8e6d223b1c3c3cd0442239e3041d643f"
  }
});
