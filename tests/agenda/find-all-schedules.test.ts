import { handler } from '../../src/agenda/find-all-schedules'
import * as containerDi from '../../src/container.di'
import { AgendaController } from '../../src/agenda/controller/agenda.controller'

// Mock do controller
jest.mock('../../src/agenda/controller/agenda.controller')

describe('handler find-all-schedules', () => {
  it('deve chamar o controller e retornar o resultado', async () => {
    const mockHandle = jest.fn().mockResolvedValue({ statusCode: 200, body: 'ok' })

    const MockedAgendaController = AgendaController as jest.Mock

    MockedAgendaController.mockImplementation(() => ({
      handleFindAllSchedules: mockHandle,
    }))

    jest.spyOn(containerDi.container, 'resolve').mockReturnValue(new AgendaController({} as any))

    const event = { requestContext: { identity: { userAgent: 'jest' } } } as any
    const result = await handler(event)

    expect(mockHandle).toHaveBeenCalled()
    expect(result.statusCode).toBe(200)
  })
})
