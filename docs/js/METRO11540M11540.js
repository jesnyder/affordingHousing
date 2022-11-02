var METRO11540M11540 = {
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
                462,
                559,
                566,
                598,
                592,
                643
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                575,
                641,
                598,
                624,
                619,
                686
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                728,
                822,
                774,
                810,
                803,
                881
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1060,
                1196,
                1104,
                1124,
                1103,
                1190
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1077,
                1208,
                1107,
                1128,
                1107,
                1195
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO11540M11540_plot"),{
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
                    462,
                    559,
                    566,
                    598,
                    592,
                    643
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    575,
                    641,
                    598,
                    624,
                    619,
                    686
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    728,
                    822,
                    774,
                    810,
                    803,
                    881
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1060,
                    1196,
                    1104,
                    1124,
                    1103,
                    1190
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1077,
                    1208,
                    1107,
                    1128,
                    1107,
                    1195
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO11540M11540: Appleton, WI MSA"
        }
    }
});