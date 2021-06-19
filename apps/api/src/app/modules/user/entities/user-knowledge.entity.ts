import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_knowledge' })
export class UserKnowledge {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @PrimaryColumn({ name: 'knowledge_id' })
  knowledgeId: number;
}
