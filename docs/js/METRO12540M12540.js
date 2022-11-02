var METRO12540M12540 = {
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
                623,
                672,
                700,
                711,
                734,
                763
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                650,
                695,
                711,
                726,
                743,
                772
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                844,
                904,
                926,
                946,
                970,
                1013
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1222,
                1303,
                1334,
                1365,
                1388,
                1439
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1470,
                1550,
                1587,
                1624,
                1679,
                1734
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO12540M12540_plot"),{
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
                    623,
                    672,
                    700,
                    711,
                    734,
                    763
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    650,
                    695,
                    711,
                    726,
                    743,
                    772
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    844,
                    904,
                    926,
                    946,
                    970,
                    1013
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1222,
                    1303,
                    1334,
                    1365,
                    1388,
                    1439
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1470,
                    1550,
                    1587,
                    1624,
                    1679,
                    1734
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO12540M12540: Bakersfield, CA MSA"
        }
    }
});