var METRO15940M15940 = {
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
                484,
                473,
                506,
                500,
                495,
                510
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                576,
                539,
                586,
                579,
                570,
                584
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                761,
                717,
                775,
                763,
                751,
                768
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                972,
                916,
                989,
                972,
                958,
                976
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1049,
                977,
                1048,
                1034,
                1018,
                1041
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO15940M15940_plot"),{
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
                    484,
                    473,
                    506,
                    500,
                    495,
                    510
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    576,
                    539,
                    586,
                    579,
                    570,
                    584
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    761,
                    717,
                    775,
                    763,
                    751,
                    768
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    972,
                    916,
                    989,
                    972,
                    958,
                    976
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1049,
                    977,
                    1048,
                    1034,
                    1018,
                    1041
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO15940M15940: Canton-Massillon, OH MSA"
        }
    }
});