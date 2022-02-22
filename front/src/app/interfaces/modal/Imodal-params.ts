import { IlabelInput } from "./Ilabel-input";
import { IlabelSelect } from "./Ilabel-select";

export interface IModalParams {
  hidden:boolean,
  title:string,
  id:string,
  formParams:{
    inputs:IlabelInput[],
    selects:IlabelSelect[],
  },
  footer:string
}
