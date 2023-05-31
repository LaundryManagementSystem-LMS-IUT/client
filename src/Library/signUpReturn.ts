class returnSignUp{
  public success:boolean|null;
  public userType:string;
  constructor(success:boolean|null,userType:string){
    this.success=success;
    this.userType=userType;
  }
}

export default returnSignUp;