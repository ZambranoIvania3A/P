//Capa de infraesstructura

import { User } from './user';
import { UserService } from './userService';
import { InMemoryUserRepository } from './inMemoryUserRepository';

const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);

const user = userService.getUser('123');
console.log(user); // Imprimirá null

userService.createUser('John Doe'); //Cambia el nombre aqui
const newUser = userService.getUser('123');
console.log(newUser); // Imprimirá el usuario recién creado
