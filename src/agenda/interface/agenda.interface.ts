import { IControllerResponse } from '../../domains/interfaces/controller-response.interface'

export interface IAgendaController {
  handleFindAllSchedules(): Promise<IControllerResponse>
}
