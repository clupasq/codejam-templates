
def read_int():
    return int(input())

def read_int_array():
    return [int(ss) for ss in input().split()]

def solution():
    # code solution here
    pass

def main():
    t = read_int()

    for i in range(t):
        s = solution()
        print(f"Case #{ i + 1 }: {s}")


main()
