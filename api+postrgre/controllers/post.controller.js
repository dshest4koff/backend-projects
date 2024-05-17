import db from '../db.js'

class PostController{
    async createPost(req, res) {
        const {title, content, userId} = req.body;
        const post = await db.query(`INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`, [title, content, userId]);
        res.json(post.rows[0]);
    }

    async getPostByUser(req, res) {
        const id = req.query.id;
        const post = await db.query(`SELECT * FROM post WHERE user_id = $1`, [id]);
        res.json(post.rows);
    }
}

export default PostController;