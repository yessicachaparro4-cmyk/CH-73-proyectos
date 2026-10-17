const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
  // Prueba 1: Agregar un usuario nuevo
test('agregar usuario que no existe', () => {
  const controller = new UserController();
  const user = new User(2001, "Ana", "ana@email.com");

  controller.add(user);

  expect(controller.getUsers()).toContain(user);
});

// Prueba 2: Eliminar un usuario que no está en la lista
test('eliminar usuario inexistente', () => {
  const controller = new UserController();
  const user = new User(2002, "Luis", "luis@email.com");

  controller.remove(user);

  expect(controller.getUsers()).not.toContain(user);
});

// Prueba 3: Buscar usuario por correo existente
test('buscar usuario por correo existente', () => {
  const controller = new UserController();
  const user = new User(2003, "Maria", "maria@email.com");

  controller.add(user);

  expect(controller.findByEmail("maria@email.com")).toBe(user);
});

// Prueba 4: Buscar correo inexistente
test('buscar usuario por correo inexistente', () => {
  const controller = new UserController();

  expect(controller.findByEmail("noexiste@email.com")).toBeUndefined();
});

// Prueba 5: Buscar usuario por ID existente
test('buscar usuario por ID existente', () => {
  const controller = new UserController();
  const user = new User(2004, "Pedro", "pedro@email.com");

  controller.add(user);

  expect(controller.findById(2004)).toBe(user);
});

// Prueba 6: Buscar usuario por ID inexistente
test('buscar usuario por ID inexistente', () => {
  const controller = new UserController();

  expect(controller.findById(9999)).toBeUndefined();
});
// Prueba 1: Agregar un usuario nuevo
test('agregar usuario que no existe', () => {
  const controller = new UserController();
  const user = new User(2001, "Ana", "ana@email.com");

  controller.add(user);

  expect(controller.getUsers()).toContain(user);
});

// Prueba 2: Eliminar un usuario que no está en la lista
test('eliminar usuario inexistente', () => {
  const controller = new UserController();
  const user = new User(2002, "Luis", "luis@email.com");

  controller.remove(user);

  expect(controller.getUsers()).not.toContain(user);
});

// Prueba 3: Buscar usuario por correo existente
test('buscar usuario por correo existente', () => {
  const controller = new UserController();
  const user = new User(2003, "Maria", "maria@email.com");

  controller.add(user);

  expect(controller.findByEmail("maria@email.com")).toBe(user);
});

// Prueba 4: Buscar correo inexistente
test('buscar usuario por correo inexistente', () => {
  const controller = new UserController();

  expect(controller.findByEmail("noexiste@email.com")).toBeUndefined();
});

// Prueba 5: Buscar usuario por ID existente
test('buscar usuario por ID existente', () => {
  const controller = new UserController();
  const user = new User(2004, "Pedro", "pedro@email.com");

  controller.add(user);

  expect(controller.findById(2004)).toBe(user);
});

// Prueba 6: Buscar usuario por ID inexistente
test('buscar usuario por ID inexistente', () => {
  const controller = new UserController();

  expect(controller.findById(9999)).toBeUndefined();
});
