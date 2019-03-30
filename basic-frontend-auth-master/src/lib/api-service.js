import axios from 'axios';


class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    })
  }

  getNextStopOver(id)  {
    return this.api.get(`/${id}/next-stop-over`)
    .then(({ data }) => data);
  }

}

const authService = new AuthService();

export default authService;