import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'knowledge' })
export class Knowledge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt?: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}
