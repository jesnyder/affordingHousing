var METRO16180M16180 = {
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
                527,
                564,
                565,
                618,
                675,
                736
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                645,
                682,
                679,
                733,
                788,
                853
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                821,
                862,
                862,
                943,
                1023,
                1108
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1195,
                1254,
                1246,
                1360,
                1464,
                1574
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1447,
                1518,
                1514,
                1656,
                1771,
                1896
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO16180M16180_plot"),{
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
                    527,
                    564,
                    565,
                    618,
                    675,
                    736
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    645,
                    682,
                    679,
                    733,
                    788,
                    853
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    821,
                    862,
                    862,
                    943,
                    1023,
                    1108
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1195,
                    1254,
                    1246,
                    1360,
                    1464,
                    1574
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1447,
                    1518,
                    1514,
                    1656,
                    1771,
                    1896
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO16180M16180: Carson City, NV MSA"
        }
    }
});