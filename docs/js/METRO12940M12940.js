var METRO12940M12940 = {
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
                604,
                647,
                719,
                678,
                794,
                744
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                742,
                789,
                849,
                765,
                856,
                781
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                856,
                906,
                981,
                894,
                1013,
                917
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1084,
                1155,
                1259,
                1145,
                1290,
                1161
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1360,
                1459,
                1567,
                1429,
                1583,
                1447
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12940M12940_plot"),{
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
                    604,
                    647,
                    719,
                    678,
                    794,
                    744
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    742,
                    789,
                    849,
                    765,
                    856,
                    781
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    856,
                    906,
                    981,
                    894,
                    1013,
                    917
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1084,
                    1155,
                    1259,
                    1145,
                    1290,
                    1161
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1360,
                    1459,
                    1567,
                    1429,
                    1583,
                    1447
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12940M12940: Baton Rouge, LA HUD Metro FMR Area"
        }
    }
});