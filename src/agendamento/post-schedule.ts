import 'reflect-metadata'
import { AgendamentoController } from './controller/agendamento.controller'
import { container } from 'tsyringe'
import { Logger } from '@aws-lambda-powertools/logger'
import { parser } from '@aws-lambda-powertools/parser/middleware'
import { z } from 'zod'
import { agendamentoSchema } from '../domains/schemas/agendamento.schema'
import { IControllerResponse } from '../domains/interfaces/controller-response.interface'
import { ApiGatewayEnvelope } from '@aws-lambda-powertools/parser/envelopes'
import { JSONStringified } from '@aws-lambda-powertools/parser/helpers'

import middy from '@middy/core'

const logger = new Logger({
  serviceName: 'AgendamentoLambda',
})

type Agendamento = z.infer<typeof agendamentoSchema>

const baseHandler = async (event: Agendamento): Promise<IControllerResponse> => {
  try {
    const controller = container.resolve(AgendamentoController)
    return await controller.handlePostSchedule(event)
  } catch (error) {
    logger.error('Erro ao processar requisição', { error, event })
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro interno do servidor' }),
    }
  }
}

export const handler = middy(baseHandler).use(
  parser({ schema: JSONStringified(agendamentoSchema), envelope: ApiGatewayEnvelope })
)
