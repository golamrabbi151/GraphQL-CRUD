const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const subjectToUpdate = await models.Subject.findOne({_id: id});

    if(!subjectToUpdate) throw new ApolloError(`Could not find Subject with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      subjectToUpdate[value] = input[value];
    });

    const updateSubject = await subjectToUpdate.save();

    return updateSubject
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  