new Chart(document.getElementById("1918799999_plot"),{
    "type": "line",
    "data": {
        "labels": [
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "datasets": [
            {
                "data": [
                    0.10351304347826087,
                    0.10262626262626262,
                    0.10200988467874794,
                    0.10028708133971292,
                    0.10201892744479495,
                    0.09484419263456091
                ],
                "label": "ratio",
                "fill": "false"
            }
        ]
    },
    "options": {
        "responsive": true,
        "interaction": {
            "mode": "index",
            "intersect": false
        },
        "stacked": false,
        "title": {
            "display": true,
            "text": "1918799999: Webster County, IA"
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