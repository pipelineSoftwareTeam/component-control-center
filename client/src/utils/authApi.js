import Api from "./api"

class AuthApi extends Api {
  constructor() {
    super('/api/auth')
  }
}

const authApi = new AuthApi();

export default authApi;
