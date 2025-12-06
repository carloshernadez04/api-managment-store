import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  createAt: string;

  updateAt: string;

  deleteAt: string;
}
