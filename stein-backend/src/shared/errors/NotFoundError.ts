import { ApiError } from "@/shared/errors/ApiError.js";

export class NotFoundError extends ApiError {
  constructor(message = "Not Found", internalCode?: string, details?: unknown) {
    super(message, 404, internalCode, details);
  }
}
