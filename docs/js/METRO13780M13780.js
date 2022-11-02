var METRO13780M13780 = {
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
                558,
                609,
                606,
                632,
                634
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                597,
                607,
                640,
                634,
                654,
                668
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                767,
                781,
                830,
                820,
                846,
                855
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1038,
                1029,
                1086,
                1070,
                1117,
                1136
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1192,
                1157,
                1236,
                1224,
                1284,
                1255
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO13780M13780_plot"),{
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
                    558,
                    609,
                    606,
                    632,
                    634
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    597,
                    607,
                    640,
                    634,
                    654,
                    668
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    767,
                    781,
                    830,
                    820,
                    846,
                    855
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1038,
                    1029,
                    1086,
                    1070,
                    1117,
                    1136
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1192,
                    1157,
                    1236,
                    1224,
                    1284,
                    1255
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO13780M13780: Binghamton, NY MSA"
        }
    }
});