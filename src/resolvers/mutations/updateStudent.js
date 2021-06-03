const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const studentToUpdate = await models.Student.findOne({_id: id});

    if(!studentToUpdate) throw new ApolloError(`Could not find Student with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      studentToUpdate[value] = input[value];
    });

    const updateStudent = await studentToUpdate.save();

    return updateStudent
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  