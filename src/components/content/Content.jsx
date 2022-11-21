import "./Content.css";
import RowData from "../../constants/URLS";
import Row from "../row/Row";


export default function Content() {
  
  return <div className="content_wrapper">
    {RowData.map((ele)=>{
        return <Row title={ele.title} url={ele.url} />
    })}
    </div>;
}
