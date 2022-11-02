var METRO15180M15180 = {
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
                529,
                541,
                559,
                592,
                586,
                598
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                536,
                545,
                563,
                596,
                590,
                631
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                695,
                697,
                718,
                760,
                753,
                803
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                917,
                934,
                964,
                1011,
                989,
                1043
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1080,
                1081,
                1104,
                1163,
                1138,
                1206
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO15180M15180_plot"),{
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
                    529,
                    541,
                    559,
                    592,
                    586,
                    598
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    536,
                    545,
                    563,
                    596,
                    590,
                    631
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    695,
                    697,
                    718,
                    760,
                    753,
                    803
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    917,
                    934,
                    964,
                    1011,
                    989,
                    1043
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1080,
                    1081,
                    1104,
                    1163,
                    1138,
                    1206
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO15180M15180: Brownsville-Harlingen, TX MSA"
        }
    }
});