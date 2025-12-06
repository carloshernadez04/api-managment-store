import { User } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  idRole: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' }) 
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp' }) 
  updateAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true }) 
  deleteAt: Date;
  
  @OneToOne(() => User, (user) => user.role)
  user: User;
}
