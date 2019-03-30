import axios from 'axios';


class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    })
  }

  getNextStopOverOfUser(userId) {
    return this.api.get(`/${userId}/next-stop-over`)
      .then(({ data }) => data);
  }

  getStopOvers(location, startDate, endDate) {
    return this.api.get(`/stopovers?location=${location}&startDate=${startDate}&endDate=${endDate}`)
      .then(({ data }) => data);
  }

  createMatch(users, startTime, endTime, location) {
    return this.api.post(`/create-match`, { users, startTime, endTime, location })
      .then(({ data }) => data);
  }

  getMatchesOfUser(userId) {
    return this.api.get(`/${userId}/matches`)
      .then(({ data }) => data);
  }

  createMessage(matchId, content, sender) {
    return this.api.post(`/create-message`, { matchId, content, sender })
      .then(({ data }) => data);
  }

  getMessagesOfMatch(matchId) {
    return this.api.get(`/${matchId}/messages`)
      .then(({ data }) => data);
  }
}

const authService = new AuthService();

export default authService;