var METRO16700M16700 = {
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
                713,
                743,
                818,
                907,
                1000,
                1183
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                818,
                884,
                967,
                1035,
                1059,
                1204
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                973,
                1037,
                1118,
                1179,
                1207,
                1372
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1290,
                1376,
                1479,
                1535,
                1544,
                1721
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1665,
                1783,
                1938,
                2012,
                2010,
                2206
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16700M16700_plot"),{
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
                    713,
                    743,
                    818,
                    907,
                    1000,
                    1183
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    818,
                    884,
                    967,
                    1035,
                    1059,
                    1204
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    973,
                    1037,
                    1118,
                    1179,
                    1207,
                    1372
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1290,
                    1376,
                    1479,
                    1535,
                    1544,
                    1721
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1665,
                    1783,
                    1938,
                    2012,
                    2010,
                    2206
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16700M16700: Charleston-North Charleston, SC MSA"
        }
    }
});