import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty({ message: 'user_id cannot be empty' })
    @IsString({ message: 'user_id should be a string' })
    user_id: string

    @IsNotEmpty({ message: 'avatar cannot be empty' })
    @IsString({ message: 'avatar should be a string' })
    avatar: string

    @IsNotEmpty({ message: 'name cannot be empty' })
    @IsString({ message: 'name should be a string' })
    name: string
}