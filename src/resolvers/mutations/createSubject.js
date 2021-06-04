const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newSubject = await models.Subject.create(input);
    return newSubject
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
