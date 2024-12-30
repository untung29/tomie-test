def isPalindrome(s: str):
    alpha_chars = ""
    for char in s:
        if (char.isalnum()):
            alpha_chars += char.lower()

    left = 0
    right = len(alpha_chars) - 1

    while left < right:
        if (alpha_chars[left] != alpha_chars[right]):
            return False
        
        left += 1
        right -= 1

    return True

s = "Was it a car or a cat I saw?"
print(isPalindrome(s))