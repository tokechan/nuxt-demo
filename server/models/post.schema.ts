// import { defineMongooseModel } from "#nuxt/mongoose";
// import { Schema } from "mongoose";

// export const PostSchema = defineMongooseModel({
//     name: "Post",
//     schema: {
//         name: {
//             type: String,
//         },
//         text: {
//             type: String,
//             required: true,
//         },
//         parent: {
//             type: Schema.Types.ObjectId,
//             ref: "Post",
//             },
//         },
//         options: {
//             timestamps: true,
//         },
//     });

//     export interface PostResponse {
//         _id: string;
//         name?: string;
//         text: string;
//         parent?: PostResponse;
//         createdAt: string;
//         updatedAt: string;
//     }
import { defineMongooseModel } from "#nuxt/mongoose";
import { Schema } from "mongoose";

export const PostSchema = defineMongooseModel({
  name: "Post",
  schema: {
    name: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  options: {
    timestamps: true,
  },
});

export interface PostResponse {
  _id: string;
  name?: string;
  text: string;
  parent?: PostResponse;
  createdAt: string;
  updatedAt: string;
}

