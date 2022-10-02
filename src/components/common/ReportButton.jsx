const ReportButton = ({ message, handleReport }) => {
   return (
      <btn className="btn btn-sm btn-outline-light" onClick={() => handleReport(message)}>
         <div style={{ color: "#607D8B" }} className="text-decoration-none text-color-none" ><i>&#x2193;</i></div>
      </btn>
   );
}
export default ReportButton;