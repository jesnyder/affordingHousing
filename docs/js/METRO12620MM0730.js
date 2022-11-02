var METRO12620MM0730 = {
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
                623,
                666,
                690,
                637,
                708,
                742
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                678,
                740,
                784,
                743,
                826,
                855
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                860,
                938,
                996,
                943,
                1057,
                1103
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1084,
                1176,
                1248,
                1175,
                1315,
                1368
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1369,
                1589,
                1749,
                1631,
                1729,
                1671
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12620MM0730_plot"),{
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
                    623,
                    666,
                    690,
                    637,
                    708,
                    742
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    678,
                    740,
                    784,
                    743,
                    826,
                    855
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    860,
                    938,
                    996,
                    943,
                    1057,
                    1103
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1084,
                    1176,
                    1248,
                    1175,
                    1315,
                    1368
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1369,
                    1589,
                    1749,
                    1631,
                    1729,
                    1671
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12620MM0730: Bangor, ME HUD Metro FMR Area"
        }
    }
});