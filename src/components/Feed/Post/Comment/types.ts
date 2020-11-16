import { IComment } from "../../../../models/comment"

export type EssentialProps = React.HTMLProps<HTMLDivElement>

type ICommentProps = EssentialProps & {comment: IComment, postId: string}

export default ICommentProps