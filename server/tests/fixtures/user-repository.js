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
  getOneById (id) {
    console.log(id);
    return users.find((user) => user.id === id)
  }
}
