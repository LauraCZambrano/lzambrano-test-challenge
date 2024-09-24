import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MercadopagoService } from './mercadopago.service';
@ApiTags('mercadopago')
@Controller('mercadopago')
export class MercadopagoController {
    constructor(private readonly mercadopagoService: MercadopagoService) {}

    @Get('customers')
    @ApiOperation({ summary: 'Get all customers' })
    @ApiResponse({
        status: 200,
        description: 'Return all customers.',
    })
    async getCustomers() {
        return 'GET ALL CUSTOMERS';
    }

    @Get('customers/:id')
    @ApiOperation({ summary: 'Get one customer' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiResponse({
        status: 200,
        description: 'Return one customers.',
    })
    async getOneCustomer() {
        return 'GET ONE CUSTOMER';
    }

    @Post('customers')
    @ApiOperation({ summary: 'Create a new customer' })
    @ApiResponse({
        status: 201,
        description: 'The customer has been successfully created.',
    })
    async creaTeCustomer() {
        return 'CREATE CUSTOMER';
    }

    @Put('customers/:id')
    @ApiOperation({ summary: 'Update a customer' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiResponse({
        status: 200,
        description: 'The customer has been successfully updated.',
    })
    async updateCustomer() {
        return 'UPDATE CUSTOMER';
    }
}
