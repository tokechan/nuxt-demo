export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { name, text, parentId } = body;

    const post = new PostSchema({
        name,
        text,
        parent: parentId,
    });

    await post.save();

    return post;
});