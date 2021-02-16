def is_prime(number):
    for i in range(2, 4):
        if number % i == 0:
            return False
    return True
