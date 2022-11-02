var METRO14540M14540 = {
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
                515,
                581,
                603,
                625,
                656,
                672
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                555,
                612,
                615,
                629,
                660,
                688
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                704,
                777,
                781,
                807,
                841,
                845
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                960,
                1054,
                1037,
                1035,
                1065,
                1063
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1151,
                1327,
                1368,
                1395,
                1418,
                1365
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14540M14540_plot"),{
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
                    515,
                    581,
                    603,
                    625,
                    656,
                    672
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    555,
                    612,
                    615,
                    629,
                    660,
                    688
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    704,
                    777,
                    781,
                    807,
                    841,
                    845
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    960,
                    1054,
                    1037,
                    1035,
                    1065,
                    1063
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1151,
                    1327,
                    1368,
                    1395,
                    1418,
                    1365
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14540M14540: Bowling Green, KY HUD Metro FMR Area"
        }
    }
});