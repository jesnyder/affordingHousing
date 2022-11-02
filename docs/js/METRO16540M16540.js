var METRO16540M16540 = {
    "labels": [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022"
    ],
    "datasets": [
        {
            "data": [
                538,
                575,
                595,
                566,
                647,
                709
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                638,
                677,
                700,
                660,
                681,
                714
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                848,
                901,
                926,
                869,
                897,
                939
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1093,
                1149,
                1188,
                1129,
                1197,
                1269
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1177,
                1227,
                1252,
                1177,
                1227,
                1317
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16540M16540_plot"),{
    "type": "line",
    "data": {
        "labels": [
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
        ],
        "datasets": [
            {
                "data": [
                    538,
                    575,
                    595,
                    566,
                    647,
                    709
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    638,
                    677,
                    700,
                    660,
                    681,
                    714
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    848,
                    901,
                    926,
                    869,
                    897,
                    939
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1093,
                    1149,
                    1188,
                    1129,
                    1197,
                    1269
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1177,
                    1227,
                    1252,
                    1177,
                    1227,
                    1317
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16540M16540: Chambersburg-Waynesboro, PA MSA"
        }
    }
});