import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Car } from './Car';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @OneToMany(() => Car, (car) => car.brand)
  cars: Car[];
}
