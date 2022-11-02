var METRO11500M11500 = {
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
                437,
                477,
                457,
                468,
                482,
                562
            ],
            "label": "Efficiency",
            "fill": "false"
        },
        {
            "data": [
                474,
                511,
                513,
                531,
                549,
                565
            ],
            "label": "One-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                630,
                679,
                676,
                700,
                723,
                744
            ],
            "label": "Two-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                818,
                887,
                886,
                910,
                944,
                988
            ],
            "label": "Three-Bedroom",
            "fill": "false"
        },
        {
            "data": [
                918,
                1035,
                1031,
                1072,
                1094,
                1111
            ],
            "label": "Four-Bedroom",
            "fill": "false"
        }
    ]
}

new Chart(document.getElementById("METRO11500M11500_plot"),{
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
                    437,
                    477,
                    457,
                    468,
                    482,
                    562
                ],
                "label": "Efficiency",
                "fill": "false"
            },
            {
                "data": [
                    474,
                    511,
                    513,
                    531,
                    549,
                    565
                ],
                "label": "One-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    630,
                    679,
                    676,
                    700,
                    723,
                    744
                ],
                "label": "Two-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    818,
                    887,
                    886,
                    910,
                    944,
                    988
                ],
                "label": "Three-Bedroom",
                "fill": "false"
            },
            {
                "data": [
                    918,
                    1035,
                    1031,
                    1072,
                    1094,
                    1111
                ],
                "label": "Four-Bedroom",
                "fill": "false"
            }
        ]
    },
    "options": {
        "title": {
            "display": "true",
            "text": "METRO11500M11500: Anniston-Oxford-Jacksonville, AL MSA"
        }
    }
});