import { ApiError } from "@/shared/errors/ApiError.js";

export class BadRequestError extends ApiError {
  constructor(message = "Bad Request", internalCode?: string, details?: unknown) {
    super(message, 400, internalCode, details);
  }
}
