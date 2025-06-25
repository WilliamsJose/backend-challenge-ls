import 'reflect-metadata'
import { container } from '../container.di'
import { AgendaController } from './controller/agenda.controller'
import { APIGatewayProxyEvent } from 'aws-lambda'

export const handler = async (event: APIGatewayProxyEvent) => {
  // eslint-disable-next-line no-console
  console.log('Event received:', event.requestContext.identity.userAgent)
  const controller = container.resolve(AgendaController)
  return await controller.handleFindAllSchedules()
}
