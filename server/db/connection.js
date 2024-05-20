import mongoose, { connect } from "mongoose";

const connectionDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);

  if (connection.STATES.connected) console.log("Connected to the Database.");

  if (connection.STATES.disconnected)
    console.log("Error connecting to the database.");

  return;
};


export default connectionDb; 
