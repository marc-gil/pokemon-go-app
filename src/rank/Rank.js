import Table from "../table/Table";
import "./Rank.css";

function Rank(props) {
    return (
        <div className="rank">
            <img alt="" className="picture" src={props.image}></img>
            <Table greatRank={props.greatRank} 
                   ultraRank={props.ultraRank} 
                   masterRank={props.masterRank}
                   greatLevel={props.greatLevel}
                   ultraLevel={props.ultraLevel}
                   masterLevel={props.masterLevel}
                   greatCp={props.greatCp}
                   ultraCp={props.ultraCp}
                   masterCp={props.masterCp}/>
        </div>
    )
}

export default Rank;