var METRO19060M19060 = {
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
                511,
                527,
                513,
                519,
                499,
                503
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                592,
                606,
                593,
                587,
                587,
                606
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                683,
                697,
                700,
                714,
                734,
                757
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                934,
                957,
                948,
                961,
                965,
                987
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1193,
                1228,
                1180,
                1192,
                1223,
                1261
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO19060M19060_plot"),{
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
                    511,
                    527,
                    513,
                    519,
                    499,
                    503
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    592,
                    606,
                    593,
                    587,
                    587,
                    606
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    683,
                    697,
                    700,
                    714,
                    734,
                    757
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    934,
                    957,
                    948,
                    961,
                    965,
                    987
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1193,
                    1228,
                    1180,
                    1192,
                    1223,
                    1261
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO19060M19060: Cumberland, MD-WV MSA"
        }
    }
});