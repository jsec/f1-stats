import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        username: null,
        password: null,
        database: 'f1statstest',
        host: '127.0.0.1',
        dialect: 'postgres',
      });

      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
