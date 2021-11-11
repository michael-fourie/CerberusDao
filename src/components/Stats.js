
import StatComponent from "./StatComponent"
import "../style/Stat.css"

function Stats() {

    return(
        <div className ="stat-div">
            <StatComponent title="Total 3DOG Staked" text="Coming Soon" />
            <StatComponent title="Treasury Balance" text="Coming Soon" />
            <StatComponent title="Total Value Locked" text="Coming Soon" />
            <StatComponent title="Current APY" text="Coming Soon" />
        </div>
    )
}

export default Stats