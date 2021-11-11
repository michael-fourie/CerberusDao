
import StatComponent from "./StatComponent"

function Stats() {

    return(
        <div style={{
            display: 'flex', 
            flexDirection: 'row',
            textAlign: 'center',
            justifyContent: 'center',

        }}>
            <StatComponent title="Total 3DOG Staked" text="x%" />
            <StatComponent title="Treasury Balance" text="$x" />
            <StatComponent title="Total Value Locked" text="$x" />
            <StatComponent title="Current APY" text="x%" />
        </div>
    )
}

export default Stats