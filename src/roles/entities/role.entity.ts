import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  idRole: number;

  @Column()
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: string;

  @Column({ type: 'timestamp' })
  updateAt: string;

  @Column({ type: 'timestamp' })
  deleteAt: string;

  @OneToOne(() => User, (user) => user.role)
  user: User;

  @Column({ nullable: false })
  userId: number;
}
