var METRO18140M18140 = {
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
                580,
                601,
                643,
                677,
                717,
                730
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                687,
                714,
                761,
                794,
                827,
                829
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                886,
                910,
                957,
                992,
                1031,
                1032
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1135,
                1165,
                1225,
                1262,
                1298,
                1281
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1328,
                1361,
                1424,
                1449,
                1468,
                1426
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO18140M18140_plot"),{
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
                    580,
                    601,
                    643,
                    677,
                    717,
                    730
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    687,
                    714,
                    761,
                    794,
                    827,
                    829
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    886,
                    910,
                    957,
                    992,
                    1031,
                    1032
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1135,
                    1165,
                    1225,
                    1262,
                    1298,
                    1281
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1328,
                    1361,
                    1424,
                    1449,
                    1468,
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
            "text": "METRO18140M18140: Columbus, OH HUD Metro FMR Area"
        }
    }
});