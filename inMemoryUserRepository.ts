//Capa de Infraestructura

import { User } from './user';
import { UserRepository } from './userRepository';

export class InMemoryUserRepository implements UserRepository {
  private users: Record<string, User> = {};

  findById(id: string): User | null {
    return this.users[id] || null;
  }

  save(user: User): void {
    this.users[user.id] = user;
  }
}
