var METRO17300M17300 = {
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
                487,
                544,
                563,
                578,
                576,
                634
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                596,
                660,
                689,
                691,
                689,
                707
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                768,
                838,
                867,
                869,
                872,
                910
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1056,
                1169,
                1220,
                1239,
                1248,
                1293
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1173,
                1314,
                1404,
                1477,
                1510,
                1558
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO17300M17300_plot"),{
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
                    487,
                    544,
                    563,
                    578,
                    576,
                    634
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    596,
                    660,
                    689,
                    691,
                    689,
                    707
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    768,
                    838,
                    867,
                    869,
                    872,
                    910
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1056,
                    1169,
                    1220,
                    1239,
                    1248,
                    1293
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1173,
                    1314,
                    1404,
                    1477,
                    1510,
                    1558
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO17300M17300: Clarksville, TN-KY HUD Metro FMR Area"
        }
    }
});