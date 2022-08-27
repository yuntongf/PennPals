const ReportButton = ({ message, handleReport }) => {
   const handleReportMessage = () => {
      let msg = message;
      msg.reported++;
      msg.deleted = true;
      return handleReport(msg);
   }
   return (
      <btn className="btn btn-sm btn-outline-light" onClick={() => handleReport(message)}>
         <div style={{ color: "#607D8B" }} className="text-decoration-none text-color-none" ><i>&#x2193;</i></div>
      </btn>
   );
}

export default ReportButton;