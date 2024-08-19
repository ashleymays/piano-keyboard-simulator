declare namespace Express {
  export interface Response {
    sendSuccess(statusCode: number, data: unknown): void;
    sendError(statusCode: number, error: string): void;
  }
}
