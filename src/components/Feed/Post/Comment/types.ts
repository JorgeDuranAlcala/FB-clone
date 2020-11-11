import { IComment } from "../../../../models/comment"

export type EssentialProps = React.HTMLProps<HTMLDivElement>

type ICommentProps =  EssentialProps & IComment

export default ICommentProps