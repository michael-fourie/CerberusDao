import '../style/ElevatorPitch.css'
import bank from '../media/bank.png'

function ElevatorPitch() {

    return(
        <div style={{ width: '100%', height: 'fit-content'}}>
            <div className='pitch'>
                <img src={bank} className="bank"/>
                <p className="pitch-title" >
                    The CerberusDAO Treasury  
                </p>
                <p className="pitch-body">
                Cerberus will assemble the mightiest meme coins and bond them into its treasury, offering them a permanent den while tapping the boundless energy of the communities that drive them.
                </p>
            </div>
        </div>
    )

}

export default ElevatorPitch