import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateCustomerDto {
    @ApiProperty({
        description: 'The first name of the customer',
    })
    @IsString()
    first_name: string;

    @ApiProperty({
        description: 'The last name of the customer',
    })
    @IsString()
    last_name: string;

    @ApiProperty({
        description: 'The email of the customer',
    })
    @IsEmail()
    email: string;
}
