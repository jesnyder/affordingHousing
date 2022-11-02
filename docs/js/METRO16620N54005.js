var METRO16620N54005 = {
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
                432,
                411,
                415,
                439,
                461,
                503
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                512,
                484,
                504,
                572,
                593,
                619
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                681,
                644,
                646,
                674,
                676,
                705
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                852,
                807,
                811,
                882,
                901,
                978
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                939,
                884,
                873,
                913,
                1027,
                1207
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16620N54005_plot"),{
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
                    432,
                    411,
                    415,
                    439,
                    461,
                    503
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    512,
                    484,
                    504,
                    572,
                    593,
                    619
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    681,
                    644,
                    646,
                    674,
                    676,
                    705
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    852,
                    807,
                    811,
                    882,
                    901,
                    978
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    939,
                    884,
                    873,
                    913,
                    1027,
                    1207
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16620N54005: Boone County, WV HUD Metro FMR Area"
        }
    }
});