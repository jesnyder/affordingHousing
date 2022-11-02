var METRO13820M13820 = {
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
                665,
                692,
                706,
                804,
                817,
                765
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                751,
                768,
                763,
                861,
                871,
                820
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                866,
                882,
                873,
                986,
                1002,
                943
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1163,
                1176,
                1154,
                1291,
                1303,
                1220
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1298,
                1315,
                1282,
                1425,
                1409,
                1316
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO13820M13820_plot"),{
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
                    665,
                    692,
                    706,
                    804,
                    817,
                    765
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    751,
                    768,
                    763,
                    861,
                    871,
                    820
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    866,
                    882,
                    873,
                    986,
                    1002,
                    943
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1163,
                    1176,
                    1154,
                    1291,
                    1303,
                    1220
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1298,
                    1315,
                    1282,
                    1425,
                    1409,
                    1316
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO13820M13820: Birmingham-Hoover, AL HUD Metro FMR Area"
        }
    }
});