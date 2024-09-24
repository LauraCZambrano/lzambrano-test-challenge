import { Injectable } from '@nestjs/common';
import { MercadoPagoConfig, Customer } from 'mercadopago';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class MercadopagoService {
    private client: MercadoPagoConfig;
    private customer: Customer;

    constructor() {
        this.client = new MercadoPagoConfig({
            accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
            options: { timeout: 5000 },
        });
        this.customer = new Customer(this.client);
    }

    async getCustomers() {
        try {
            const response = await this.customer.search({});
            return response;
        } catch (error) {
            throw new Error(`Failed to get customers: ${error.message}`);
        }
    }

    async getCustomerById(id: string) {
        try {
            const response = await this.customer.get({ customerId: id });
            return response;
        } catch (error) {
            throw new Error(`Failed to get customer: ${error.message}`);
        }
    }

    async createCustomer(createCustomerDto: CreateCustomerDto) {
        try {
            const response = await this.customer.create({
                body: createCustomerDto,
            });
            return response;
        } catch (error) {
            throw new Error(`Failed to create customer: ${error.message}`);
        }
    }

    async updateCustomer(
        customerId: string,
        updateCustomerDto: UpdateCustomerDto,
    ) {
        try {
            const response = await this.customer.update({
                customerId: customerId,
                body: updateCustomerDto,
            });
            return response;
        } catch (error) {
            throw new Error(`Failed to update customer: ${error.message}`);
        }
    }
}
