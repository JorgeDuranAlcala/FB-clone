import { PopupState } from "material-ui-popup-state/core";
import { IReply } from "../../../../../models/comment"
import styles from "../styles";

export type EssentialProps = React.HTMLProps<HTMLDivElement>

export type OtherProps = {
    reply: IReply
    postId?: string
    commentId?: string
    popupState: PopupState
}

type IReplyProps = EssentialProps & OtherProps
export default IReplyProps