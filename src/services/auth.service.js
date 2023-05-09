import axios from "axios";

const API_URL = config.API_URL;

class AuthService {
  async login(url) {
    return axios
      .get(API_URL + url, {
        headers: authHeader(),
      })
      .catch((error) => {
        notify(error.message || "Error");
        logout();
      });
  }
}
export default new AuthService();
