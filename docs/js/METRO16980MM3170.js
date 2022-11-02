var METRO16980MM3170 = {
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
                776,
                698,
                843,
                873,
                887,
                910
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                779,
                813,
                849,
                879,
                893,
                916
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1036,
                1081,
                1123,
                1158,
                1177,
                1205
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1423,
                1467,
                1517,
                1492,
                1478,
                1514
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1428,
                1472,
                1518,
                1569,
                1596,
                1634
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16980MM3170_plot"),{
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
                    776,
                    698,
                    843,
                    873,
                    887,
                    910
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    779,
                    813,
                    849,
                    879,
                    893,
                    916
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1036,
                    1081,
                    1123,
                    1158,
                    1177,
                    1205
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1423,
                    1467,
                    1517,
                    1492,
                    1478,
                    1514
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1428,
                    1472,
                    1518,
                    1569,
                    1596,
                    1634
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16980MM3170: Grundy County, IL HUD Metro FMR Area"
        }
    }
});