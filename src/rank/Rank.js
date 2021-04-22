import Table from "../table/Table";
import "./Rank.css";

function Rank(props) {
    const {rank: greatRank, level: greatLevel, cp: greatCp, isCpCapReached: greatLeagueCpCap} = props.greatLeague;
    const {rank: ultraRank, level: ultraLevel, cp: ultraCp, isCpCapReached: ultraLeagueCpCap} = props.ultraLeague;
    const {rank: masterRank, level: masterLevel, cp: masterCp, isCpCapReached: masterLeagueCpCap} = props.masterLeague;
    console.log(greatRank);
    return (
        <div className="rank">
            <img alt="" className="picture" src={props.image}></img>
            <Table greatRank={greatRank} 
                   ultraRank={ultraRank} 
                   masterRank={masterRank}
                   greatLevel={greatLevel}
                   ultraLevel={ultraLevel}
                   masterLevel={masterLevel}
                   greatCp={greatCp}
                   ultraCp={ultraCp}
                   masterCp={masterCp}
                   greatLeagueCpCap={greatLeagueCpCap}
                   ultraLeagueCpCap={ultraLeagueCpCap}
                   masterLeagueCpCap={masterLeagueCpCap}
                   />
        </div>
    )
}

export default Rank;