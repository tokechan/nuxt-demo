export default defineEventHandler(async (event) => {
    const post = await PostSchema.findOne({
        _id: event.context.params?.id,
    }).populate("parent");

    return post;
});