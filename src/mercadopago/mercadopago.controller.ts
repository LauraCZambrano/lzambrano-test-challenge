import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MercadopagoService } from './mercadopago.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

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
        return this.mercadopagoService.getCustomers();
    }

    @Get('customers/:id')
    @ApiOperation({ summary: 'Get one customer' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiResponse({
        status: 200,
        description: 'Return one customers.',
    })
    async getOneCustomer(@Param('id') id: string) {
        return this.mercadopagoService.getCustomerById(id);
    }

    @Post('customers')
    @ApiOperation({ summary: 'Create a new customer' })
    @ApiResponse({
        status: 201,
        description: 'The customer has been successfully created.',
    })
    async creaTeCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        return this.mercadopagoService.createCustomer(createCustomerDto);
    }

    @Put('customers/:id')
    @ApiOperation({ summary: 'Update a customer' })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiResponse({
        status: 200,
        description: 'The customer has been successfully updated.',
    })
    async updateCustomer(
        @Param('id') id: string,
        @Body() updateCustomerDto: UpdateCustomerDto,
    ) {
        return this.mercadopagoService.updateCustomer(id, updateCustomerDto);
    }
}
