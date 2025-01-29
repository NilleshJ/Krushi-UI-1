"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const data = {
    datasets: [
        {
            data: [25, 15, 10],
            backgroundColor: [
                "#887cfd",
                "#16c8c7",
                "#cbd5e1",
            ],
            display: true,
            borderColor: "#D1D6DC",
        }
    ]
};

const HalfChart = () => {
    return (
        <div>
            <Doughnut
                data={data}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    rotation: -90,
                    circumference: 180,
                    cutout: "80%",
                    maintainAspectRatio: true,
                    responsive: true
                }}
            />
            {/* <div
                style={{
                    position: "absolute",
                    top: "55%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                }}
            >
                <div>Text Here</div>
            </div> */}
        </div>
    );
};

export default HalfChart;