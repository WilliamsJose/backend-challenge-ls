import 'reflect-metadata'
import { APIGatewayProxyEvent } from 'aws-lambda'
import { AgendamentoController } from './controller/agendamento.controller'
import { container } from 'tsyringe'

export const handler = async (event: APIGatewayProxyEvent) => {
  // eslint-disable-next-line no-console
  console.log('Event received:', event.requestContext.identity.userAgent)
  const controller = container.resolve(AgendamentoController)
  return await controller.handlePostSchedule(event.body ? JSON.parse(event.body) : {})
}
