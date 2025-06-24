import { HTTPStatusCode } from '../enums/http-status-code.enum'

export interface IControllerResponse {
  statusCode: HTTPStatusCode
  headers?: Record<string, string>
  body?: object | [] | string
}
