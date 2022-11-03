new Chart(document.getElementById("2300943578_plot"),{
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
                    0.12392603129445234,
                    0.12467966573816155,
                    0.11658415841584159
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
            "text": "2300943578: Hancock County, ME"
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