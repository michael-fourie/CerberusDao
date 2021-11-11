import "../style/StatComponent.css"

function StatComponent(props) {

    const title = props.title;
    const text = props.text

    return(
        <div className="stat-component">
            <p style={{
                color: "white",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "200",
                fontSize: "20px",
            }}>{title}</p>
            <p style={{
                color: "white",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "30px",
            }}>{text}</p>
        </div>
    )

}

export default StatComponent