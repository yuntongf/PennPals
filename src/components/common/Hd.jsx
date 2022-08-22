
const Hd = ({ message }) => {
   //console.log(message);
   return (
      <div className="flex-column justify-content-between">
         <h4> {message.title} </h4>
      </div>
   );
}

export default Hd;