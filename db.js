import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('superheros','postgres','root', {
  host:'localhost',
  dialect:'postgres',
  define:{
    timestamps:false
  }
})

const Superhero = sequelize.define('superhero',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey: true,
      allowNull:false
    },
    name: {
      type: Sequelize.STRING,
      allowNull:false
    },
    strength: {
      type: Sequelize.INTEGER,
      allowNull:false
    },
    dexterity: {
      type: Sequelize.INTEGER,
      allowNull:false
    },
    intellect: {
      type: Sequelize.INTEGER,
      allowNull:false
    },
    isInvincible:{
      type: Sequelize.BOOLEAN,
      allowNull:false
    },

    heroImage:{
      type: Sequelize.STRING,
      allowNull: true
    }
})

sequelize.sync().then(result=>{
    console.log('Superheros synced...');
})
    .catch(err=> console.log(err));

export {sequelize, Superhero}