
import   Subject  from "./subject"
export class Teachers {

    constructor(
        public fullName :String,
        public userName :Number,
        public password :String,

        
        public Address :string,
        public phoneNumber :number,
        public nationalId :String,
        public salary :Number,

    
        public subjects?: Subject ,
        public DOH?:Date,

    ){}
}
