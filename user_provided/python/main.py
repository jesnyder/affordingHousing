import numpy as np

from build_dataset import build_dataset
from analyze_dataset import analyze_dataset
from build_charts import build_charts


def main():
    """
    Objective
    Map clinical trials
    """

    tasks = [0, 1]

    if 0 not in tasks: build_dataset()
    if 1 not in tasks: analyze_dataset()
    if 2 not in tasks: build_charts()

if __name__ == "__main__":
    main()
