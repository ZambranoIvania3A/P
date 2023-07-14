//Capa de Aplicacion

import { User } from './user';
import { UserRepository } from './userRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  getUser(id: string): User | null {
    return this.userRepository.findById(id);
  }

  createUser(name: string): void {
    const id = "1"; // Generar un ID único
    const user = new User(id, name);
    this.userRepository.save(user);
  }
}
