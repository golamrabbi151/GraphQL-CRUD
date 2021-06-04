module.exports = async (_, {}, {models}) => {
    return await models.Subject.find();
  };
  
  
  