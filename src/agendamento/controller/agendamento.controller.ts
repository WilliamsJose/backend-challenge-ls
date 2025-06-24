import { HTTPStatusCode } from '../../domains/enums/http-status-code.enum'
import { IAgendamentoController } from '../interface/agendamento.interface'
import { AgendamentoService } from '../service/agendamento.service'
import { inject, injectable } from 'tsyringe'
import { AgendamentoDto } from '../dto/agendamento.dto'
import { NovaAgendaDto } from '../dto/nova-agenda.dto'

@injectable()
export class AgendamentoController implements IAgendamentoController {
  constructor(@inject(AgendamentoService) private service: AgendamentoService) {}

  async handlePostSchedule(agendamento: AgendamentoDto) {
    const newSchedule: NovaAgendaDto = await this.service.postNewSchedule(agendamento)
    return {
      statusCode: HTTPStatusCode.OK,
      body: JSON.stringify(newSchedule),
    }
  }
}
