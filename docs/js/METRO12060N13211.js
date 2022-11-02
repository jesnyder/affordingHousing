var METRO12060N13211 = {
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
                587,
                678,
                739,
                784,
                706,
                701
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                616,
                697,
                758,
                806,
                726,
                706
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                711,
                801,
                868,
                918,
                872,
                929
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1035,
                1165,
                1223,
                1215,
                1134,
                1182
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1170,
                1253,
                1335,
                1612,
                1510,
                1590
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12060N13211_plot"),{
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
                    587,
                    678,
                    739,
                    784,
                    706,
                    701
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    616,
                    697,
                    758,
                    806,
                    726,
                    706
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    711,
                    801,
                    868,
                    918,
                    872,
                    929
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1035,
                    1165,
                    1223,
                    1215,
                    1134,
                    1182
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1170,
                    1253,
                    1335,
                    1612,
                    1510,
                    1590
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12060N13211: Morgan County, GA HUD Metro FMR Area"
        }
    }
});