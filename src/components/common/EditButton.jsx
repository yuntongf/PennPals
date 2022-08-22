const EditButton = ({ message, handleEdit }) => {
   const handleReportMessage = () => {
      let msg = message;
      msg.reported++;
      msg.edited = true;
      return handleEdit(msg);
   }
   return (
      <btn className="btn btn-sm btn-outline-light" onClick={() => handleReport(message)}>
         <div style={{ color: "#607D8B" }} className="text-decoration-none text-color-none" ><i>pencil</i>{message.edited ? "edited" : ""}</div>
      </btn>
   );
}

export default ReportButton;