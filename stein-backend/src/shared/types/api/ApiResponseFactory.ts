import { ApiError } from "@/shared/errors/ApiError.js"
import type { ApiResponseError, ApiResponseSuccess } from "@/shared/types/api/ApiResponse.js"
import type { ApiErrorPayload } from "./ApiErrorPayload.js"

export class ApiResponseFactory {
    static success<T>(
        body: T,
        message = 'Success',
        status = 200
    ): ApiResponseSuccess<T> {
        return {
            success: true,
            status,
            message,
            body
        }
    }

    static error(
        error: ApiError
    ): ApiResponseError<ApiErrorPayload> {
        return {
            success: false,
            status: error.statusCode,
            message: error.message,
            error: {
                ...(error.internalCode !== undefined && { code: error.internalCode }),
                ...(error.details !== undefined && { details: error.details })
            }
        }
    }
}
