var METRO16300M16300 = {
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
                485,
                494,
                522,
                506,
                524,
                541
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                575,
                582,
                614,
                590,
                602,
                619
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                764,
                774,
                812,
                777,
                794,
                814
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1088,
                1095,
                1155,
                1104,
                1134,
                1156
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1168,
                1207,
                1266,
                1221,
                1272,
                1358
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16300M16300_plot"),{
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
                    485,
                    494,
                    522,
                    506,
                    524,
                    541
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    575,
                    582,
                    614,
                    590,
                    602,
                    619
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    764,
                    774,
                    812,
                    777,
                    794,
                    814
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1088,
                    1095,
                    1155,
                    1104,
                    1134,
                    1156
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1168,
                    1207,
                    1266,
                    1221,
                    1272,
                    1358
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16300M16300: Cedar Rapids, IA HUD Metro FMR Area"
        }
    }
});