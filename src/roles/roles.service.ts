import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { stat } from 'fs';
import { IsNull } from 'typeorm';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    try {
      const role = this.roleRepository.create({ ...createRoleDto });
      const savedRole = await this.roleRepository.save(role);
      return{
        message: 'Role created successfully',
        roleId: savedRole.idRole,
        name: savedRole.name,
        statusCode: 200
      }
    } catch (error) {
      console.error('Error creating role:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      const roles = await this.roleRepository.find({
        where: {
          deleteAt: IsNull(), 
        },
      });
      return roles
    } catch (error) {
      console.error('Error fetching roles:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const role = await this.roleRepository.findOne({ 
        where: { 
          idRole: id 
          }
        });
      return role;
    } catch (error) {
      
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    
  }

  async remove(id: number) {

  }
    
}
