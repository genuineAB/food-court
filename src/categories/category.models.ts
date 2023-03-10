import { Model, Column, Table, columnTypes } from 'nestjs-objection';

@Table({ tableName: 'categories' })
export class Category extends Model {
  @Column({ type: columnTypes.increments })
  id: number;
  @Column({ type: columnTypes.string })
  name: string;
  @Column({ type: columnTypes.string })
  brand_id: number;
}
