var METRO14540N21003 = {
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
                442,
                502,
                482,
                493,
                520,
                542
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                490,
                529,
                485,
                497,
                524,
                546
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                620,
                666,
                642,
                654,
                690,
                718
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                883,
                898,
                865,
                869,
                910,
                911
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1005,
                1106,
                1128,
                1104,
                1147,
                1130
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO14540N21003_plot"),{
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
                    442,
                    502,
                    482,
                    493,
                    520,
                    542
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    490,
                    529,
                    485,
                    497,
                    524,
                    546
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    620,
                    666,
                    642,
                    654,
                    690,
                    718
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    883,
                    898,
                    865,
                    869,
                    910,
                    911
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1005,
                    1106,
                    1128,
                    1104,
                    1147,
                    1130
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO14540N21003: Allen County, KY HUD Metro FMR Area"
        }
    }
});