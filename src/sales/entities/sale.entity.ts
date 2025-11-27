import { Product } from 'src/products/entities/product.entity';
import { SaleDetail } from 'src/sale_detail/entities/sale_detail.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  idSale: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column('decimal', { precision: 10, scale: 2 })
  recived: number;

  @Column('decimal', { precision: 10, scale: 2 })
  change: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: string;

  @Column({ type: 'timestamp' })
  updateAt: string;

  @Column({ type: 'timestamp' })
  deleteAt: string;

  @OneToMany(() => User, (user) => user.sales)
  @JoinColumn({ name: 'userId' })
  users: User;

  @Column({ nullable: false })
  userId: number;

  @OneToMany(() => SaleDetail, (saleDetail) => saleDetail.sale,{cascade: true})
  salesDetails: SaleDetail[];
}
