import 'reflect-metadata'
import { AgendaController } from '../../../src/agenda/controller/agenda.controller'
import { AgendaService } from '../../../src/agenda/service/agenda.service'
import { HTTPStatusCode } from '../../../src/domains/enums/http-status-code.enum'

jest.mock('../../../src/agenda/service/agenda.service')

describe('AgendaController', () => {
  let controller: AgendaController
  let service: jest.Mocked<AgendaService>

  beforeEach(() => {
    service = new AgendaService() as jest.Mocked<AgendaService>
    controller = new AgendaController(service)
  })

  it('deve retornar status 200 e a lista de agendas', async () => {
    service.findAllSchedules.mockResolvedValue([
      { id: 1, nome: 'Dr. Laulau', especialidade: 'Laulau', horarios_disponiveis: ['2024-10-05 09:00'] },
    ])
    const response = await controller.handleFindAllSchedules()
    expect(response.statusCode).toBe(HTTPStatusCode.OK)
    expect(typeof response.body).toBe('string')
    const body = JSON.parse(response.body as string)
    expect(body[0].nome).toBe('Dr. Laulau')
  })
})
