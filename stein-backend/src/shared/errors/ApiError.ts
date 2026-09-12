export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly internalCode?: string | undefined;
  public readonly details?: unknown;

  constructor(message: string, statusCode: number, internalCode?: string, details?: unknown) {
      super(message);
      this.statusCode = statusCode;
      this.internalCode = internalCode;
      this.details = details;
      Object.setPrototypeOf(this, new.target.prototype);
      Error.captureStackTrace(this, this.constructor);
  }
}
