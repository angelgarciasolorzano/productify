class DatosError extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  };
};

export default DatosError;