var METRO14020MM1020 = {
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
                659,
                678,
                697,
                646,
                681,
                706
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                688,
                709,
                736,
                689,
                748,
                803
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                884,
                920,
                945,
                879,
                927,
                971
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1183,
                1208,
                1241,
                1175,
                1274,
                1369
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1520,
                1620,
                1660,
                1543,
                1605,
                1662
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14020MM1020_plot"),{
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
                    659,
                    678,
                    697,
                    646,
                    681,
                    706
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    688,
                    709,
                    736,
                    689,
                    748,
                    803
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    884,
                    920,
                    945,
                    879,
                    927,
                    971
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1183,
                    1208,
                    1241,
                    1175,
                    1274,
                    1369
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1520,
                    1620,
                    1660,
                    1543,
                    1605,
                    1662
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14020MM1020: Bloomington, IN HUD Metro FMR Area"
        }
    }
});