type ReceiverProps={
  message:string,
  datetime:Date,
  imageURL:string
};

const CollapsibleSender = ({message,datetime,imageURL}:ReceiverProps) => {
  return ( 
  <div className="d-flex flex-row justify-content-start">
  <img
    src={imageURL}
    alt="avatar 1"
    style={{ width: "45px", height: "100%" }}
  />
  <div>
    <p
      className="small p-2 ms-3 mb-1 rounded-3"
      style={{ backgroundColor: "#3354a9",color:"#FFFFFF" }}
    >
      {message}
    </p>
    <p className="small ms-3 mb-3 rounded-3 text-muted">
      {datetime.toLocaleDateString()}
    </p>
  </div>
</div>
 );
  
}
 
export default CollapsibleSender;