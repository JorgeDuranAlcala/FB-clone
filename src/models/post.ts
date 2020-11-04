export type Ipost = {
    _id: string;
    userImg: string;
    desc: string;
    img_path?: string;
    likes: number;
    num_comments: number;
    created_at: Date;
}