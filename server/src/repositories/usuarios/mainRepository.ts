import authRepository from "./authRepository";
import baseRepository from "./baseRepository";

class MainRepository {
  public base = baseRepository;
  public auth = authRepository;
};

export default new MainRepository();