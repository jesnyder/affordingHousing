new Chart(document.getElementById("2106999999_plot"),{
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
                    0.12,
                    0.11098121085594989,
                    0.11006211180124223,
                    0.10029850746268656,
                    0.10575139146567718,
                    0.09803389830508474
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
            "text": "2106999999: Fleming County, KY"
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