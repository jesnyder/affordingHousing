new Chart(document.getElementById("5512599999_plot"),{
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
                    0.10990439770554493,
                    0.11725190839694656,
                    0.11144424131627056,
                    0.11686956521739131,
                    0.11502590673575129,
                    0.10656580937972769
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
            "text": "5512599999: Vilas County, WI"
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