const DeleteButton = ({ message, handleDelete }) => {
   return (
      <btn className="btn btn-sm btn-outline-light" onClick={() => handleDelete(message)}>
         <a style={{ color: "#F57774" }} className="text-decoration-none text-color-none" href="/MessageBoard"> X </a>
      </btn>
   );
}

export default DeleteButton;