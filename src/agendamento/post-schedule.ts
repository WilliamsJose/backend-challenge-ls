import 'reflect-metadata'
import { AgendamentoController } from './controller/agendamento.controller'
import { container } from 'tsyringe'
import { parser } from '@aws-lambda-powertools/parser/middleware'
import { z } from 'zod'
import { agendamentoSchema } from '../domains/schemas/agendamento.schema'
import { IControllerResponse } from '../domains/interfaces/controller-response.interface'
import { ApiGatewayEnvelope } from '@aws-lambda-powertools/parser/envelopes'
import { JSONStringified } from '@aws-lambda-powertools/parser/helpers'

import middy from '@middy/core'
import { errorHandler } from '../utils/error-handler'

type Agendamento = z.infer<typeof agendamentoSchema>

const baseHandler = async (event: Agendamento): Promise<IControllerResponse> => {
  const controller = container.resolve(AgendamentoController)
  return await controller.handlePostSchedule(event)
}

export const handler = middy(baseHandler)
  .use(parser({ schema: JSONStringified(agendamentoSchema), envelope: ApiGatewayEnvelope }))
  .onError(errorHandler)
