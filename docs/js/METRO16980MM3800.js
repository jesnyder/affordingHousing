var METRO16980MM3800 = {
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
                565,
                573,
                585,
                678,
                694,
                708
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                670,
                676,
                689,
                790,
                798,
                810
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                890,
                899,
                911,
                1040,
                1052,
                1066
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1223,
                1209,
                1194,
                1353,
                1365,
                1383
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1437,
                1414,
                1372,
                1528,
                1547,
                1540
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16980MM3800_plot"),{
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
                    565,
                    573,
                    585,
                    678,
                    694,
                    708
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    670,
                    676,
                    689,
                    790,
                    798,
                    810
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    890,
                    899,
                    911,
                    1040,
                    1052,
                    1066
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1223,
                    1209,
                    1194,
                    1353,
                    1365,
                    1383
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1437,
                    1414,
                    1372,
                    1528,
                    1547,
                    1540
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16980MM3800: Kenosha County, WI HUD Metro FMR Area"
        }
    }
});