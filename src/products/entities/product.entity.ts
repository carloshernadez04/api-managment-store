import { SaleDetail } from 'src/sale_detail/entities/sale_detail.entity';
import { Sale } from 'src/sales/entities/sale.entity';
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  idPrducts: number;

  @Column({ nullable: false })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  image?: string;

  @Column()
  code: string;

  @Column()
  stock: number;

  @Column()
  description?: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createAt: string

  @Column({type: 'timestamp'})
  updateAt: string

  @Column({type: 'timestamp'})
  deleteAt: string

  @Column({default: true})
  state: boolean

  @OneToMany(() => SaleDetail, (saleDetail) => saleDetail.product)
  saleDetails: SaleDetail[];
 
}
