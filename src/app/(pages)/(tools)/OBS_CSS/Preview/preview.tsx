import styles from "./textDecorator.module.css"
import comment from "./comment.module.css"


export default function Preview()
{

    return (
        <>
            <p>プレビューテスト中</p>
            <hr/>

            <div>
                <div className = { comment.CommentBlock}>
                    <p>00:00</p>
                    <p>Badge</p>
                    <p>OwnerName</p>
                    <p>Comment</p>
                </div>

                <div className = { comment.CommentBlock}>
                    <p>00:00</p>
                    <p>Badge</p>
                    <p>UserName</p>
                    <p>Comment</p>
                </div>

                <div className = { comment.CommentBlock}>
                    <p>00:00</p>
                    <p>Badge</p>
                    <p>ModeratorName</p>
                    <p>Comment</p>
                </div>

                <div className = { comment.CommentBlock}>
                    <p>00:00</p>
                    <p>Badge</p>
                    <p>MenbershipName</p>
                    <p>Comment</p>
                </div>

            </div>
        </>
    )
}
