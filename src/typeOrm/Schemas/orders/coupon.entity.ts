import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum DiscountType {
  PERCENTAGE = 'PERCENTAGE',
  FIXED_AMOUNT = 'FIXED_AMOUNT',
}

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column({
    type: 'enum',
    enum: DiscountType,
    default: DiscountType.PERCENTAGE,
  })
  discountType: DiscountType;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number; // مقدار تخفیف (مثلاً 10 یا 20000)

  @Column({ nullable: true })
  expiryDate: Date;

  @Column({ default: 1 })
  usageLimit: number; // تعداد دفعات قابل استفاده

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  usedCount: number; // تعداد دفعات استفاده شده

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
