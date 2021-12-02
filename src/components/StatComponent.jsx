import "../style/StatComponent.css"
import { Skeleton } from "@material-ui/lab";

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
            { text ? (
              <p style={{
                color: "white",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "30px",
              }}>{text}</p>
            ) : (
              <Skeleton width={150} height={50} data-testid="apy-loading" />
            ) }

        </div>
    )

}

export default StatComponent
