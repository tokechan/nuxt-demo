// export default defineEventHandler(async (_event) => {
//     const posts = await PostSchema.find().populate("parent");
//     const postsDesc = posts.toReversed();

//     return postsDesc;
// });

import { PostSchema } from "~/server/models/post.schema";

export default defineEventHandler(async (event) => {
    const posts = await PostSchema.find().populate("parent");
    const postsDesc = posts.toReversed();

    return postsDesc;
});