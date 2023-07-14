//Capa de Dominio

import { User } from './user';

export interface UserRepository {
  findById(id: string): User | null;
  save(user: User): void;
}
