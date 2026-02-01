import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Brand } from './Brand';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Brand, (brand) => brand.cars)
  brand: Brand;
}
