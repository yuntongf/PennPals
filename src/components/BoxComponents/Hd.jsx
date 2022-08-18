
const Hd = ({message}) => {
   //console.log(message);
   return (
      <div className="flex-column justify-content-between">
         <h5> {message.title} </h5>
      </div>
   );
}

export default Hd;