import axios from 'axios';


class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true
    })
  }

  getNextStopOver(id)  {
    return this.api.get(`/${id}/nexstopover`)
    .then(({ data }) => data);
  }

}

const authService = new AuthService();

export default authService;