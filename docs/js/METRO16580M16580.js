var METRO16580M16580 = {
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
                544,
                615,
                678,
                725,
                734,
                824
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                668,
                695,
                696,
                730,
                739,
                829
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                829,
                849,
                836,
                862,
                868,
                977
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1041,
                1076,
                1069,
                1108,
                1108,
                1252
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1387,
                1386,
                1330,
                1305,
                1230,
                1325
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16580M16580_plot"),{
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
                    544,
                    615,
                    678,
                    725,
                    734,
                    824
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    668,
                    695,
                    696,
                    730,
                    739,
                    829
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    829,
                    849,
                    836,
                    862,
                    868,
                    977
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1041,
                    1076,
                    1069,
                    1108,
                    1108,
                    1252
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1387,
                    1386,
                    1330,
                    1305,
                    1230,
                    1325
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16580M16580: Champaign-Urbana, IL MSA"
        }
    }
});