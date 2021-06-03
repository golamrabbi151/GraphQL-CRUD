const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newStudent = await models.Student.create(input);
    return newStudent
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
