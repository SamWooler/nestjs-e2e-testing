import { join } from 'path';

import { DataSource, DataSourceOptions } from 'typeorm';
import { Brand } from './entities/Brand';
import { Car } from './entities/Car';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres_password',
  database: 'cars',
  entities: [Brand, Car],
  migrations: [join(__dirname, './migrations/**/*{.js,.ts}')],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
