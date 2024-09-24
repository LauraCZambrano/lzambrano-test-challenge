import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MercadopagoModule } from './mercadopago/mercadopago.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Hace que ConfigModule esté disponible en toda la aplicación
        }),
        MercadopagoModule,
    ],
})
export class AppModule {}
