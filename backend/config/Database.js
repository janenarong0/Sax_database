import { Sequelize } from "sequelize";

const db = new Sequelize('Sax_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;