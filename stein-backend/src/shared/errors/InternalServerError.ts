import { ApiError } from "@/shared/errors/ApiError.js";

export class InternalServerError extends ApiError {
  constructor(message = "Internal Server Error", internalCode?: string, details?: unknown) {
    super(message, 500, internalCode, details);
  }
}
