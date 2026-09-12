import { ApiError } from "@/shared/errors/ApiError.js";

export class ConflictError extends ApiError {
  constructor(message = "Conflict", internalCode?: string, details?: unknown) {
    super(message, 409, internalCode, details);
  }
}
