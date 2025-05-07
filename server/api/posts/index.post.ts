import  { PostSchema } from "~/server/models/post.schema";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {

      // ① 本番接続前に環境変数の中身を確認
    console.log('🛠️ [DEBUG] NUXT_MONGODB_URL =', JSON.stringify(process.env.NUXT_MONGODB_URL))

  // ② 既存の接続処理（#nuxt/mongoose モジュール任せなら omit して OK）
    await mongoose.connect(process.env.NUXT_MONGODB_URL!)
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