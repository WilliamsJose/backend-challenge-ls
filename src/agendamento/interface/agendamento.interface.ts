import { IControllerResponse } from '../../domains/interfaces/controller-response.interface'
import { AgendamentoDto } from '../dto/agendamento.dto'

export interface IAgendamentoController {
  handlePostSchedule(agendamento: AgendamentoDto): Promise<IControllerResponse>
}
