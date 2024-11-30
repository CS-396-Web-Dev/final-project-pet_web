import React from "react";

export default function Bar({value, maxValue = 100, label}) {
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
        <div style={styles.textAndBar}>
            <p style={styles.label}>{label}</p>
            <div style={styles.barContainer}>
                <div 
                style={{
                    ...styles.bar,
                    width: `${percentage}%`,
                    backgroundColor: `${color}`
                }}
                ></div>
            </div>
            <p>{value}</p>
        </div>
    )
}

// css style of the bar
const styles = {
    label: {
        width: "80px",
        textAlign: "right",
    },

    textAndBar: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        width: "100%",
    },

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
        transition: "width 0.5s ease-in-out",
    }
}