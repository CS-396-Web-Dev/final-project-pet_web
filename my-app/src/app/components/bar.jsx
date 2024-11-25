import React from "react";

export default function bar({value, maxValue = 100, label}) {
    const percentage = (value / maxValue) * 100;
    var color = "green";
    if (percentage > 66) {
        color = "#00CD18";
    } else if (percentage > 33){
        color = "#FBD230";
    } else {
        color = "#FB3030";
    }
    return (
        <div>
            <p>{label}</p>
            <div style={styles.barContainer}>
                <div 
                style={{
                    ...styles.bar,
                    width: `${percentage}%`,
                    backgroundColor: `${color}`
                }}
                ></div>
            </div>
        </div>
    )
}

// css style of the bar
const styles = {
    barContainer: {
        height: "35px",
        width: "200px",
        borderRadius: "30px",
        backgroundColor: "#e6e6e6",
        border: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        padding: "0 5px"
    },
    
    bar: {
        height: "24px",
        borderRadius: "30px",
    }
}