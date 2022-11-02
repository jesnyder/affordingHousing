var METRO10540M10540 = {
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
                557,
                584,
                646,
                721,
                794,
                808
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                661,
                689,
                761,
                832,
                860,
                865
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                878,
                916,
                1006,
                1096,
                1133,
                1138
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1278,
                1332,
                1453,
                1562,
                1591,
                1584
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1491,
                1512,
                1663,
                1824,
                1888,
                1859
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO10540M10540_plot"),{
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
                    557,
                    584,
                    646,
                    721,
                    794,
                    808
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    661,
                    689,
                    761,
                    832,
                    860,
                    865
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    878,
                    916,
                    1006,
                    1096,
                    1133,
                    1138
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1278,
                    1332,
                    1453,
                    1562,
                    1591,
                    1584
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1491,
                    1512,
                    1663,
                    1824,
                    1888,
                    1859
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO10540M10540: Albany, OR MSA"
        }
    }
});