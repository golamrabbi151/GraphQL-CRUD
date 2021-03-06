const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
  
  const deleteSubject = await models.Subject.deleteOne({_id: id})

  if(deleteSubject.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete Subject.`);

};