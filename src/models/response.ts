import { IComment, IReply } from "./comment";
import { Ipost } from "./post";
import { IUser } from "./user";

export type BasicResponse = {
    message: string;
}

export type getPostsResponse = {
    message: string;
    post_list: Ipost[]
}

export type updatePostResponse = {
    message: string;
    Updated_post: Ipost
}

export type newCommentResponse = {
    message: string;
    Updated_post?: IComment
}

export type ReplyResponse = {
    message: string;
    reply?: IReply
}

export type GetCookieResponse = {
    cookies?: {
        user_session?: string
    },
    user: IUser
}

export type Response = GetCookieResponse | ReplyResponse