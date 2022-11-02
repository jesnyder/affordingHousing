var METRO15380M15380 = {
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
                658,
                641,
                671,
                674,
                743,
                774
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                666,
                660,
                695,
                703,
                772,
                812
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                810,
                799,
                838,
                843,
                920,
                963
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1029,
                1002,
                1050,
                1051,
                1144,
                1190
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                1189,
                1163,
                1204,
                1190,
                1284,
                1334
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO15380M15380_plot"),{
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
                    658,
                    641,
                    671,
                    674,
                    743,
                    774
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    666,
                    660,
                    695,
                    703,
                    772,
                    812
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    810,
                    799,
                    838,
                    843,
                    920,
                    963
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1029,
                    1002,
                    1050,
                    1051,
                    1144,
                    1190
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    1189,
                    1163,
                    1204,
                    1190,
                    1284,
                    1334
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO15380M15380: Buffalo-Cheektowaga-Niagara Falls, NY MSA"
        }
    }
});