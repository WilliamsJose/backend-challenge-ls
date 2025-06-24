import { HTTPStatusCode } from '../../domains/enums/http-status-code.enum'
import { IAgendaController } from '../interface/agenda.interface'
import { AgendaService } from '../service/agenda.service'
import { AgendaDto } from '../dto/agenda.dto'
import { inject, injectable } from 'tsyringe'

@injectable()
export class AgendaController implements IAgendaController {
  constructor(@inject(AgendaService) private service: AgendaService) {}

  async handleFindAllSchedules() {
    const schedules: AgendaDto[] = await this.service.findAllSchedules()
    return {
      statusCode: HTTPStatusCode.OK,
      body: JSON.stringify(schedules),
    }
  }
}
