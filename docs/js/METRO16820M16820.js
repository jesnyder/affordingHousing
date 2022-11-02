var METRO16820M16820 = {
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
                714,
                752,
                851,
                854,
                949,
                1024
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                976,
                1027,
                1146,
                1082,
                1077,
                1063
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1126,
                1179,
                1325,
                1262,
                1266,
                1264
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1409,
                1478,
                1660,
                1573,
                1575,
                1562
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1653,
                1772,
                2013,
                1942,
                1965,
                1959
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16820M16820_plot"),{
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
                    714,
                    752,
                    851,
                    854,
                    949,
                    1024
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    976,
                    1027,
                    1146,
                    1082,
                    1077,
                    1063
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1126,
                    1179,
                    1325,
                    1262,
                    1266,
                    1264
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1409,
                    1478,
                    1660,
                    1573,
                    1575,
                    1562
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1653,
                    1772,
                    2013,
                    1942,
                    1965,
                    1959
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16820M16820: Charlottesville, VA MSA"
        }
    }
});