import { IComment } from "./comment";

export type Ipost = {
    _id: string;
    userImg: string;
    desc: string;
    img_path?: string;
    likes: number;
    comments: IComment[] ;
    num_comments: number;
    created_at: Date;
}