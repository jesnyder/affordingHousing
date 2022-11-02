var METRO15260M15260 = {
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
                602,
                580,
                633,
                653,
                680,
                728
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                606,
                583,
                637,
                657,
                684,
                732
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                805,
                752,
                793,
                786,
                830,
                894
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1114,
                1050,
                1114,
                1094,
                1160,
                1230
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1180,
                1091,
                1142,
                1159,
                1272,
                1426
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO15260M15260_plot"),{
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
                    602,
                    580,
                    633,
                    653,
                    680,
                    728
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    606,
                    583,
                    637,
                    657,
                    684,
                    732
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    805,
                    752,
                    793,
                    786,
                    830,
                    894
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1114,
                    1050,
                    1114,
                    1094,
                    1160,
                    1230
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1180,
                    1091,
                    1142,
                    1159,
                    1272,
                    1426
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO15260M15260: Brunswick, GA MSA"
        }
    }
});