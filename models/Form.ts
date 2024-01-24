// models/Form.ts
import mongoose, { Schema } from 'mongoose';

const formSchema = new Schema({
     title: {
          type: String
     },
     fields: [
          {
               label: {
                    type: String
               },
               type: {
                    type: String
               }, // text, radio, checkbox, dropdown
               options: [{
                    type: String
               }],
               required: {
                    type: Boolean
               },
          },
     ],
});

const Form = mongoose.model('Form', formSchema);

export default Form;
