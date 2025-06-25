import z from 'zod'

const dateTimeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/

export const agendamentoSchema = z
  .object({
    agendamento: z.object({
      medico: z.string().min(5, 'Nome do médico é obrigatório'),
      paciente: z.string().min(5, 'Nome do paciente é obrigatório'),
      data_horario: z
        .string()
        .regex(dateTimeRegex, 'Use "AAAA-MM-DD HH:mm"')
        .refine((v) => {
          // converte para ISO para conferir se é data válida
          const iso = v.replace(' ', 'T') + ':00'
          return !Number.isNaN(Date.parse(iso))
        }, 'Data/hora inválida'),
    }),
  })
  .strict()
