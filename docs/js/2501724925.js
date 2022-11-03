new Chart(document.getElementById("2501724925_plot"),{
    "type": "line",
    "data": {
        "labels": [
            2017,
            2018,
            2019,
            2020
        ],
        "datasets": [
            {
                "data": [
                    0.13856866537717602,
                    0.13948051948051948,
                    0.14764342453662843,
                    0.17294117647058824
                ],
                "label": "ratio",
                "fill": "false"
            }
        ]
    },
    "options": {
        "stacked": false,
        "title": {
            "display": "true",
            "text": "2501724925: Boston-Cambridge-Quincy, MA-NH HUD Metro FMR Area"
        },
        "scales": {
            "y": {
                "type": "linear",
                "display": true,
                "position": "left"
            },
            "y1": {
                "type": "linear",
                "display": true,
                "position": "right"
            }
        }
    }
});