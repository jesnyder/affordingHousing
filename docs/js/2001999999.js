new Chart(document.getElementById("2001999999_plot"),{
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
                    0.14145530145530147,
                    0.13884297520661157,
                    0.11933823529411765,
                    0.11282952548330404,
                    0.11532743362831858,
                    0.1052
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
            "text": "2001999999: Chautauqua County, KS"
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