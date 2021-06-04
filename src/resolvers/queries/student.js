module.exports = async (_, {}, {models}) => {
  return await models.Student.find()
  // return await models.Student.find().populate('subject').execPopulate();
};