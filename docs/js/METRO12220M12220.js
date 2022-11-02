var METRO12220M12220 = {
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
                543,
                557,
                547,
                564,
                590,
                672
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                600,
                633,
                627,
                623,
                625,
                706
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                798,
                827,
                814,
                811,
                824,
                924
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1075,
                1107,
                1083,
                1066,
                1078,
                1222
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1302,
                1339,
                1285,
                1242,
                1227,
                1383
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12220M12220_plot"),{
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
                    543,
                    557,
                    547,
                    564,
                    590,
                    672
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    600,
                    633,
                    627,
                    623,
                    625,
                    706
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    798,
                    827,
                    814,
                    811,
                    824,
                    924
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1075,
                    1107,
                    1083,
                    1066,
                    1078,
                    1222
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1302,
                    1339,
                    1285,
                    1242,
                    1227,
                    1383
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12220M12220: Auburn-Opelika, AL MSA"
        }
    }
});