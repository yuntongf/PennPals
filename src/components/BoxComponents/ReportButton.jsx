const ReportButton = ({ message, handleReport }) => {
   return (
      <btn className="btn btn-sm btn-outline-light" onClick={() => handleReport(message, 'm')}>
         <a style={{ color: "#F57774" }} className="text-decoration-none text-color-none" href="/MessageBoard">Report</a>
      </btn>
   );
}

export default ReportButton;