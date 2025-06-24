import { injectable } from 'tsyringe'
import { AgendamentosRepository } from '../mocks/db'
import { NovaAgendaDto } from '../dto/nova-agenda.dto'
import { AgendamentoDto } from '../dto/agendamento.dto'

@injectable()
export class AgendamentoService {
  // Mock de dados do banco de dados
  private dbData = AgendamentosRepository

  async postNewSchedule(agendamento: AgendamentoDto): Promise<NovaAgendaDto> {
    // Simulando inserção no banco de dados e vamos fingir que retornou sucesso com os dados inseridos logo abaixo
    await this.dbData.push(agendamento)
    const newSchedule: NovaAgendaDto = {
      ...agendamento,
      mensagem: 'Agendamento realizado com sucesso',
    }
    return newSchedule
  }
}
