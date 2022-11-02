var METRO15500M15500 = {
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
                652,
                587,
                561,
                601,
                636,
                619
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                668,
                601,
                637,
                659,
                682,
                698
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                838,
                754,
                812,
                847,
                885,
                891
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1143,
                1029,
                1071,
                1100,
                1126,
                1126
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1238,
                1142,
                1238,
                1248,
                1201,
                1208
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO15500M15500_plot"),{
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
                    652,
                    587,
                    561,
                    601,
                    636,
                    619
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    668,
                    601,
                    637,
                    659,
                    682,
                    698
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    838,
                    754,
                    812,
                    847,
                    885,
                    891
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1143,
                    1029,
                    1071,
                    1100,
                    1126,
                    1126
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1238,
                    1142,
                    1238,
                    1248,
                    1201,
                    1208
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO15500M15500: Burlington, NC MSA"
        }
    }
});