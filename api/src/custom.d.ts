declare namespace Express {
  export interface Response {
    dispatch(statusCode: number, data: unknown): void;
  }
}
