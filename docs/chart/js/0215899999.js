new Chart(document.getElementById("0215899999_plot"),{
    "type": "line",
    "data": {
        "labels": [
            2020,
            2021,
            2022
        ],
        "datasets": [
            {
                "data": [
                    0.20633766233766235,
                    0.19654054054054054,
                    0.1794059405940594
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
            "text": "0215899999: Kusilvak Census Area, AK"
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