const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
  
  const deleteStudent = await models.Student.deleteOne({_id: id})

  if(deleteStudent.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete Student.`);

};