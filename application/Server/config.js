const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "ec2-35-168-22-171.compute-1.amazonaws.com",
      user: "backendusr",
      password: "Fds43dfds38@4eddsie3",
      database: "SFStudentRent",
      connectTimeout: 60000,
      port: 3306
    },
    listPerPage: 10,
  };
  module.exports = config;