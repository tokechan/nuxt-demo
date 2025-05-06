export default defineEventHandler(async (_event) => {
    const posts = await PostSchema.find().populate("parent");
    const postsDesc = posts.toReversed();

    return postsDesc;
});