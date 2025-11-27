import { Product } from 'src/products/entities/product.entity';
import { Sale } from 'src/sales/entities/sale.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SaleDetail {
  @PrimaryGeneratedColumn()
  idSalesDetail: number;

  @Column('decimal', { precision: 10, scale: 2 })
  unitPrice: number;

  @Column({nullable: false})
  quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: string;

  @Column({ type: 'timestamp' })
  updateAt: string;

  @Column({ type: 'timestamp' })
  deleteAt: string;

  @Column()
  saleId: number;

  @ManyToOne(() => Sale, (sale) => sale.salesDetails)
  @JoinColumn({ name: 'saleId' })
  sale: Sale;

  @Column()
  productId: number;
  
  @ManyToOne(() => Product, (product) => product.saleDetails)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
