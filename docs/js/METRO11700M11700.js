var METRO11700M11700 = {
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
                709,
                655,
                794,
                1039,
                1096,
                1188
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                713,
                660,
                799,
                1045,
                1099,
                1209
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                891,
                829,
                993,
                1255,
                1279,
                1378
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1194,
                1120,
                1356,
                1717,
                1751,
                1879
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1553,
                1460,
                1744,
                2203,
                2213,
                2359
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO11700M11700_plot"),{
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
                    709,
                    655,
                    794,
                    1039,
                    1096,
                    1188
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    713,
                    660,
                    799,
                    1045,
                    1099,
                    1209
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    891,
                    829,
                    993,
                    1255,
                    1279,
                    1378
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1194,
                    1120,
                    1356,
                    1717,
                    1751,
                    1879
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1553,
                    1460,
                    1744,
                    2203,
                    2213,
                    2359
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO11700M11700: Asheville, NC HUD Metro FMR Area"
        }
    }
});