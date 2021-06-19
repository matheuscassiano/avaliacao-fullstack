import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Knowledge } from '../../knowledge/entities/knowledge.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'state' })
  isValid: boolean;

  @ManyToMany(() => Knowledge, { cascade: true, eager: true })
  @JoinTable({
    name: 'user_knowledge',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'knowledge_id', referencedColumnName: 'id' },
  })
  knowledge: Knowledge[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt?: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}
