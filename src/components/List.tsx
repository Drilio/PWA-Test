import {isOdd} from "../utils/isOdd.ts";
import './List.css'
export default function List(){
    const myNames = ['THOMAS','YOANN','ALY'];
    return(
        <div>
            {myNames.map((name, index)=>{
                return <p key={index} className={isOdd(index) ? 'white' : 'blue'}>{name}</p>
            })}
        </div>
    )
}
