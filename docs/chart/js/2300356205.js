new Chart(document.getElementById("2300356205_plot"),{
    "type": "line",
    "data": {
        "labels": [
            2017,
            2018,
            2019,
            2020,
            2021
        ],
        "datasets": [
            {
                "data": [
                    0.14150442477876107,
                    0.11701067615658363,
                    0.12351005484460695,
                    0.11345454545454546,
                    0.10754098360655738
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
            "text": "2300356205: Aroostook County, ME"
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