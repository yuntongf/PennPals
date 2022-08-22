import Board from './MessageBoard/Board'

const MessageBoard = ({ messages, handleLike, handleReport, handleDelete }) => {
    return (
        <div className="col-12 d-flex justify-content-center me-5 pe-5">
            <div className="col-9">
                <Board messages={messages} handleLike={handleLike} handleDelete={handleDelete} handleReport={handleReport} />
            </div>
        </div>
    );
}

export default MessageBoard;