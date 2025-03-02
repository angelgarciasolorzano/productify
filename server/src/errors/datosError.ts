class DatosError extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "DatosError";
    this.statusCode = 400;
  };
};

export default DatosError;