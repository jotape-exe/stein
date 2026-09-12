import { ApiError } from "@/shared/errors/ApiError.js";

export class ServiceUnavailableError extends ApiError {
  constructor(message = "Service Unavailable", internalCode?: string, details?: unknown) {
    super(message, 503, internalCode, details);
  }
}
