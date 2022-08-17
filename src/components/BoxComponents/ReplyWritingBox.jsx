
const ReplyWritingBox = () => {
   return (
      <div className="form-group col-9">
         <label className="m-2" htmlFor="exampleInputEmail1"> Your Reply</label>
         <div style={{height : 200}}>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
         </div>
         <small className="form-text text-muted"> Please do not enter your real name</small>
      </div>
   );
}

export default ReplyWritingBox;