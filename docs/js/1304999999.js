new Chart(document.getElementById("1304999999_plot"),{
    "type": "line",
    "data": {
        "labels": [
            2017,
            2018,
            2019,
            2020,
            2021,
            2022
        ],
        "datasets": [
            {
                "data": [
                    0.10204379562043796,
                    0.111985559566787,
                    0.10933797909407665,
                    0.11563258232235701,
                    0.12223463687150837,
                    0.12967032967032968
                ],
                "label": "ratio",
                "fill": "false"
            }
        ]
    },
    "options": {
        "responsive": true,
        "interaction": {
            "mode": "index",
            "intersect": false
        },
        "stacked": false,
        "title": {
            "display": true,
            "text": "1304999999: Charlton County, GA"
        },
        "scales": {
            "y": {
                "type": "linear",
                "display": true,
                "position": "left"
            },
            "y1": {
                "type": "linear",
                "display": true,
                "position": "right"
            }
        }
    }
});