import { IReply } from "../../../../../models/comment"

export type EssentialProps = React.HTMLProps<HTMLDivElement>

export type OtherProps = {
    reply: IReply
    postId?: string
    commentId?: string
}

type IReplyProps = EssentialProps & OtherProps
export default IReplyProps