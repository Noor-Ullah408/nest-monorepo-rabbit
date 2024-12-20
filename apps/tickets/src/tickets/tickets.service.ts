import { Injectable } from '@nestjs/common';
import { Ticket } from '@prisma/client';
import { PrismaService } from 'apps/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}
  async createTicket(createTicketDto: Ticket) {
    const ticket = await this.prisma.ticket.create({
      data: {
        ticket_number: createTicketDto.ticket_number,
        user_id: createTicketDto.user_id,
      },
    });
    return ticket;
  }
}
