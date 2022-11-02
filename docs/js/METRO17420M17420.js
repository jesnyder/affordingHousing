var METRO17420M17420 = {
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
                473,
                485,
                513,
                526,
                536,
                570
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                561,
                571,
                604,
                613,
                617,
                631
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                745,
                760,
                799,
                807,
                813,
                830
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                950,
                965,
                1024,
                1029,
                1056,
                1079
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1198,
                1213,
                1233,
                1214,
                1212,
                1224
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO17420M17420_plot"),{
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
                    473,
                    485,
                    513,
                    526,
                    536,
                    570
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    561,
                    571,
                    604,
                    613,
                    617,
                    631
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    745,
                    760,
                    799,
                    807,
                    813,
                    830
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    950,
                    965,
                    1024,
                    1029,
                    1056,
                    1079
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1198,
                    1213,
                    1233,
                    1214,
                    1212,
                    1224
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO17420M17420: Cleveland, TN MSA"
        }
    }
});