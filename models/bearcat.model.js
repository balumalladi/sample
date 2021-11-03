module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "logins",
      mongoose.Schema(
        {
          username: String,
          password: String,
          message:String,
          ReenterPassword:String,
          Entermobileno:String,
          Enteremailid:String,
          isloggedin: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };