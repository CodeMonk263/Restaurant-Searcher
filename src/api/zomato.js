import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    user_key: "3eb92dda6e2bea5e59d357f6da1d7e06"
  }
});
