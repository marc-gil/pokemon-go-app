import "./Table.css"

function Table(props) {

    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>Great League</th>
                    <th>Ultra League</th>
                    <th>Master League</th>
                </tr>
                <tr>
                    <th>Rank</th>
                    <td className={props.greatLeagueCpCap ? "red" : ""}>{props.greatRank}</td>
                    <td className={props.ultraLeagueCpCap ? "red" : ""}>{props.ultraRank}</td>
                    <td className={props.masterLeagueCpCap ? "red" : ""}>{props.masterRank}</td>
                </tr>
                <tr>
                    <th>Level</th>
                    <td className={props.greatLeagueCpCap ? "red" : ""}>{props.greatLevel}</td>
                    <td className={props.ultraLeagueCpCap ? "red" : ""}>{props.ultraLevel}</td>
                    <td className={props.masterLeagueCpCap ? "red" : ""}>{props.masterLevel}</td>
                </tr>
                <tr>
                    <th>CP</th>
                    <td className={props.greatLeagueCpCap ? "red" : ""}>{props.greatCp}</td>
                    <td className={props.ultraLeagueCpCap ? "red" : ""}>{props.ultraCp}</td>
                    <td className={props.masterLeagueCpCap ? "red" : ""}>{props.masterCp}</td>
                </tr>
            </tbody>
        </table>
    )

}

export default Table;