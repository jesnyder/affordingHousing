var METRO16980MM2050 = {
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
                612,
                635,
                645,
                683,
                705,
                714
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                691,
                720,
                733,
                769,
                805,
                811
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                918,
                958,
                963,
                996,
                1030,
                1044
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1273,
                1326,
                1373,
                1437,
                1474,
                1483
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1556,
                1592,
                1623,
                1692,
                1783,
                1787
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16980MM2050_plot"),{
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
                    612,
                    635,
                    645,
                    683,
                    705,
                    714
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    691,
                    720,
                    733,
                    769,
                    805,
                    811
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    918,
                    958,
                    963,
                    996,
                    1030,
                    1044
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1273,
                    1326,
                    1373,
                    1437,
                    1474,
                    1483
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1556,
                    1592,
                    1623,
                    1692,
                    1783,
                    1787
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16980MM2050: DeKalb County, IL HUD Metro FMR Area"
        }
    }
});