var METRO16020M16020 = {
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
                551,
                527,
                563,
                542,
                537,
                536
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                554,
                530,
                565,
                587,
                612,
                622
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                735,
                703,
                748,
                773,
                807,
                807
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1017,
                1008,
                1078,
                1115,
                1155,
                1146
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1117,
                1119,
                1184,
                1188,
                1216,
                1248
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16020M16020_plot"),{
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
                    551,
                    527,
                    563,
                    542,
                    537,
                    536
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    554,
                    530,
                    565,
                    587,
                    612,
                    622
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    735,
                    703,
                    748,
                    773,
                    807,
                    807
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1017,
                    1008,
                    1078,
                    1115,
                    1155,
                    1146
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1117,
                    1119,
                    1184,
                    1188,
                    1216,
                    1248
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16020M16020: Cape Girardeau, MO-IL MSA"
        }
    }
});