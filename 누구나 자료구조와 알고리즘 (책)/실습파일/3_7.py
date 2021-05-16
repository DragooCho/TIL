def is_prime(number):
    for i in range(2, 4):
        if number % i == 0:
            return False
    return True

# a = [3, 8, 2, 6]


# def solve():
#     ans = 0
#     for i in a:
#         ans = ans + i
#     return ans
