var METRO16220M16220 = {
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
                651,
                656,
                592,
                612,
                593,
                605
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                746,
                718,
                702,
                780,
                737,
                728
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                918,
                871,
                846,
                924,
                868,
                856
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1266,
                1194,
                1176,
                1302,
                1242,
                1216
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1573,
                1509,
                1486,
                1622,
                1503,
                1465
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16220M16220_plot"),{
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
                    651,
                    656,
                    592,
                    612,
                    593,
                    605
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    746,
                    718,
                    702,
                    780,
                    737,
                    728
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    918,
                    871,
                    846,
                    924,
                    868,
                    856
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1266,
                    1194,
                    1176,
                    1302,
                    1242,
                    1216
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1573,
                    1509,
                    1486,
                    1622,
                    1503,
                    1465
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16220M16220: Casper, WY MSA"
        }
    }
});