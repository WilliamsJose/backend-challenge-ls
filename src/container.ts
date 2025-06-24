import 'reflect-metadata'
import { container } from 'tsyringe'
import { AgendaService } from './agenda/service/agenda.service'

container.register(AgendaService, { useClass: AgendaService })

export { container }
