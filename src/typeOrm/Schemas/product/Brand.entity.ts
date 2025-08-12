import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './Product.entity';

@Entity({
  name: 'Brand',
})
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  title: string;

  @Column()
  image?: string;

  @OneToMany(() => Product, (item) => item.brand)
  Products: Product[];
}
