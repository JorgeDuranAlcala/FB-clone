
export type typeCommentUser = {
    userImg?: string;
    username?: string;
}

export interface IReply {
    _id?: string;
    user: typeCommentUser;
    commentBody: string;
    likes?: number;
    created_at?: Date;
}


export interface IComment {
    _id?: string;
    user: typeCommentUser;
    commentBody: string;
    likes?: number;
    replies?: IReply[];
    created_at?: Date;
}