import { Logger } from '@aws-lambda-powertools/logger'
import { IControllerResponse } from '../domains/interfaces/controller-response.interface'
import { ParseError } from '@aws-lambda-powertools/parser'

const logger = new Logger({
  serviceName: 'AgendamentoLambda',
})

export const errorHandler = (req: any): IControllerResponse => {
  logger.error('Erro ao processar requisicao', { req })

  if (req.error instanceof ParseError) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Dados inválidos',
        errors: req.error.cause,
      }),
    }
  }

  return {
    statusCode: 500,
    body: JSON.stringify({
      message: 'Erro interno do servidor',
      error: req.error?.message,
    }),
  }
}
