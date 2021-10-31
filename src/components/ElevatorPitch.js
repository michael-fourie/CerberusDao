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
                Cerberus will assemble the mightiest meme coins and bond them into our treasury. The Cerberus Treasury will act as “the black hole of meme-coins”, and the powerful communities that drive them.
                </p>
            </div>
        </div>
    )

}

export default ElevatorPitch