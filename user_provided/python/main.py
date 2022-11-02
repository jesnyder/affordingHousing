import numpy as np

from build_dataset import build_dataset
from analyze_dataset import analyze_dataset


def main():
    """
    Objective
    Map clinical trials
    """

    tasks = [0]

    if 0 in tasks: build_dataset()
    if 1 in tasks: analyze_dataset()


if __name__ == "__main__":
    main()
