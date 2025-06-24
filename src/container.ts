import 'reflect-metadata'
import { container } from 'tsyringe'
import { AgendaService } from './agenda/service/agenda.service'
import { AgendamentoService } from './agendamento/service/agendamento.service'

container.register(AgendaService, { useClass: AgendaService })
container.register(AgendamentoService, { useClass: AgendamentoService })

export { container }
