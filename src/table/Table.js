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
                    <td>{props.greatRank}</td>
                    <td>{props.ultraRank}</td>
                    <td>{props.masterRank}</td>
                </tr>
                <tr>
                    <th>Level</th>
                    <td>{props.greatLevel}</td>
                    <td>{props.ultraLevel}</td>
                    <td>{props.masterLevel}</td>
                </tr>
                <tr>
                    <th>CP</th>
                    <td>{props.greatCp}</td>
                    <td>{props.ultraCp}</td>
                    <td>{props.masterCp}</td>
                </tr>
            </tbody>
        </table>
    )

}

export default Table;