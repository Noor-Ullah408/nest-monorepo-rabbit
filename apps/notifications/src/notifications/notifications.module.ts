import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from 'apps/prisma.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TICKETS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'tickets',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService, PrismaService],
})
export class NotificationsModule {}
