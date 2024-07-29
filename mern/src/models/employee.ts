// import mongoose, { Document, Schema } from 'mongoose';

// export interface IEmployee extends Document {
//   name: string;
//   email: string;
//   mobile: string;
//   designation: string;
//   gender: string;
//   course: string;
//   image: string;
// }

// const EmployeeSchema: Schema = new Schema({
//   image: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   mobile: {
//     type: String,
//     required: true,
//   },
//   designation: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   course: {
//     type: String,
//     required: true,
//   }
// });

// export default mongoose.model<IEmployee>('Employee', EmployeeSchema);


import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
  name: string;
  email: string;
  mobile: string;
  designation: string;
  gender: string;
  course: string[];
  image: string;
}

const EmployeeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  course: {
    type: [String],  
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);

