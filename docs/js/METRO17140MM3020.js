var METRO17140MM3020 = {
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
                514,
                630,
                629,
                639,
                672
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                557,
                587,
                634,
                649,
                690,
                728
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                740,
                781,
                799,
                776,
                786,
                829
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1077,
                1136,
                1155,
                1119,
                1125,
                1168
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1162,
                1259,
                1388,
                1362,
                1361,
                1419
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO17140MM3020_plot"),{
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
                    514,
                    630,
                    629,
                    639,
                    672
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    557,
                    587,
                    634,
                    649,
                    690,
                    728
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    740,
                    781,
                    799,
                    776,
                    786,
                    829
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1077,
                    1136,
                    1155,
                    1119,
                    1125,
                    1168
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1162,
                    1259,
                    1388,
                    1362,
                    1361,
                    1419
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO17140MM3020: Grant County, KY HUD Metro FMR Area"
        }
    }
});