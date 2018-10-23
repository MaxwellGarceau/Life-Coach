const users = [{
  id: 1,
  login: 'bruce@waynecorp.com',
  firstName: 'Bruce',
  lastName: 'Wayne'
}, {
  id: 2,
  login: 'clark.kent@dailyplanet.com',
  firstName: 'Clark',
  lastName: 'Kent'
}];

module.exports = class UserRepository {
  findAll () {
    return users;
  }
  findOneById (id) {
    return users.find((user) => user.id === id)
  }
  create (args) {
    // const { login, firstName, lastName } = args;
    // return {

    // }
    console.log(args);
    return args;
  }
}
