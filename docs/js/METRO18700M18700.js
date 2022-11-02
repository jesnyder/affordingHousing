var METRO18700M18700 = {
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
                619,
                680,
                767,
                869,
                932,
                1000
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                750,
                801,
                886,
                991,
                1031,
                1065
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                930,
                976,
                1066,
                1177,
                1217,
                1272
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1354,
                1420,
                1541,
                1698,
                1742,
                1807
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1639,
                1719,
                1872,
                2066,
                2107,
                2177
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO18700M18700_plot"),{
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
                    619,
                    680,
                    767,
                    869,
                    932,
                    1000
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    750,
                    801,
                    886,
                    991,
                    1031,
                    1065
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    930,
                    976,
                    1066,
                    1177,
                    1217,
                    1272
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1354,
                    1420,
                    1541,
                    1698,
                    1742,
                    1807
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1639,
                    1719,
                    1872,
                    2066,
                    2107,
                    2177
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO18700M18700: Corvallis, OR MSA"
        }
    }
});