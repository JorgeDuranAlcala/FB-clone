import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { IReply } from '../../../../../models/comment'
import Reply from '../Reply'
import { SubdirectoryArrowRight as ArrowRightIcon  } from "@material-ui/icons";

interface Props {
    replies: IReply[];
    postId: string;
    commentId: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    revealMoreReplies: {
        
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: '12px',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    arrowRightIcon: {
        marginRight: theme.spacing(0.8),
        fontSize: 12
    }
}))

export default function RepliesList({ replies, ...rest }: Props): ReactElement {
    
    const initialValueOfShowMore = replies.length > 2
    const [ShowMore, setShowMore] = React.useState<boolean>(initialValueOfShowMore)
    const classes = useStyles()

    return (
        <>
            { !ShowMore ? replies?.map(reply => (
                <Reply 
                    key={reply._id}
                    reply={{...reply}} 
                    {...rest}
                />
            )) : (
                <h3 onClick={() => setShowMore(!ShowMore)}  className={classes.revealMoreReplies}>
                    <ArrowRightIcon className={classes.arrowRightIcon} />
                    {replies.length} Replies
                </h3>
            ) }
        </>
    )
}
