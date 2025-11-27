import { Role } from 'src/roles/entities/role.entity';
import { Sale } from 'src/sales/entities/sale.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  address?: string;

  @Column()
  phone?: string;

  @Column()
  email: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: string;

  @Column({ type: 'timestamp' })
  updateAt: string;

  @Column({ type: 'timestamp' })
  deleteAt: string;

  @ManyToOne(() => Sale, (sale) => sale.users)
  sales: Sale[];

  @Column({ nullable: false })
  saleId: number;

  @OneToOne(() => Role, (role) => role.user)
  role: Role;

  @Column({ nullable: false })
  roleId: number;
}
