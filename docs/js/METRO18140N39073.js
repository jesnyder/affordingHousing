var METRO18140N39073 = {
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
                563,
                582,
                568,
                548,
                563,
                557
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                576,
                586,
                571,
                551,
                567,
                561
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                681,
                695,
                682,
                696,
                734,
                738
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                991,
                1011,
                986,
                972,
                1016,
                1032
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1180,
                1205,
                1198,
                1079,
                1071,
                1054
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO18140N39073_plot"),{
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
                    563,
                    582,
                    568,
                    548,
                    563,
                    557
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    576,
                    586,
                    571,
                    551,
                    567,
                    561
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    681,
                    695,
                    682,
                    696,
                    734,
                    738
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    991,
                    1011,
                    986,
                    972,
                    1016,
                    1032
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1180,
                    1205,
                    1198,
                    1079,
                    1071,
                    1054
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO18140N39073: Hocking County, OH HUD Metro FMR Area"
        }
    }
});