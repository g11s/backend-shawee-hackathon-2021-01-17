import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import User from '../entities/User';
// import knex from '../config/knex';

export class MysqlUsersRepository {
  async index() {
    const users = await User.fetchAll();
    // const users = await knex('users').select('*');

    return users;
  }

  async findById(uid) {
    const user = await User.where({ uid }).fetch();
    // const user = await knex('users').where('uid', uid).first();

    return user;
  }

  async save(user) {
    const data = await User.create(user);
    // const data = await knex('users').insert(user);

    if (!data) {
      return false;
    }

    return true;
  }

  async login(user) {
    // const data = await knex('users').where('email', user.email).first();
    const data = await User.where({ email: user.email }).fetch();

    if (!data || !await bcrypt.compare(user.password, data.get('password'))) {
      return false;
    }

    return true;
  }

  async register(user) {
    // const data = await knex('users').where('email', user.email).first();
    const data = await User.where({ email: user.email }).fetch();

    if (data) {
      return false;
    }

    const salt = await bcrypt.genSalt(10);

    user.uid = uuidv4();
    user.password = await bcrypt.hash(user.password, salt);

    // if (await knex('users').insert(user)) {
    //   return true;
    // }

    if (await User.create(user)) {
      return true;
    }

    return false;
  }

  async update(user) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // const data = await knex('users')
    //   .update({
    //     email: user.email,
    //     name: user.name,
    //     password: user.password,
    //     phone: user.phone,
    //   })
    //   .where('uid', user.uid);

    const model = await User.where({ uid: user.uid }).fetch();

    if (!model) {
      return false;
    }

    const data = await model.save(user, {
      method: 'update',
      patch: true,
    });

    if (!data) {
      return false;
    }

    return true;
  }

  async delete(uid) {
    // const data = await knex('users').where('uid', uid).del();
    const model = await User.where({ uid }).fetch();

    const data = model.destroy();

    if (!data) {
      return false;
    }

    return true;
  }
}
