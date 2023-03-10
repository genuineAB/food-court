import { Model } from 'nestjs-objection';
export declare class User extends Model {
    id: number;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
    role: string;
}
