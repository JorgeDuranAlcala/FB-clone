import { Ipost } from "./post";

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

export type Response = BasicResponse & getPostsResponse & updatePostResponse