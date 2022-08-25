import react from "react";
import { SocialIcon} from 'react-social-icons';

function Socials(){
    return(
        <div className="flex mx-5 my-5 w-1/4 md:w-1/4 justify-between ">
            <li className="list-none">
            <SocialIcon network="facebook" href="" style={{height:18, width:18}}  />
            </li>
            <li className="list-none"> 
            <SocialIcon network="twitter" style={{height:18, width:18}} />
            </li>
            <li className="list-none">
            <SocialIcon network="instagram" style={{height:18, width:18}} />
            </li>
            <li className="list-none">
            <SocialIcon network="linkedin" style={{height:18, width:18}} />
            </li>
        </div>
    )
}
export default Socials;