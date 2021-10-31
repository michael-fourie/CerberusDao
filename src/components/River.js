import '../style/River.css'

function River() {

    return (
        <div>
            <p className="river-title">Think of a river that never stops flowing...</p>
            <p className="river-text">The river being the powerful memes which have taken the crypto-sphere by storm, while dwarfing DeFi bluechips far and wide. A discrepancy with other OHM forks is the use of stable-coin pairs which are utilized as a singular treasury asset. CerebrusDAO will harness the unique power of the meme economy to fuel our treassury. What sets Cerebrus apart from Olympus and its forks is that it harnesses the limitless power of meme coins, rather than relying solely on stablecoins to fill its treasury.</p>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(102, 0, 0,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(102, 0, 0,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(102, 0, 0,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(102, 0, 0)" />
                </g>
            </svg>
        </div>
    )
}

export default River