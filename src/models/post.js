const Post = (sequelize, DataTypes) => {
  const post = sequelize.define('posts', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: "user",
        key: "id"
      },
      allowNull: false,
    },

  }, {});

  post.associate = (models) => {};

  return post;
};

export default Post;