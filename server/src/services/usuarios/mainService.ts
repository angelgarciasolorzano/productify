import authService from "./authService";

class MainService {
  public auth = authService;
};

export default new MainService();