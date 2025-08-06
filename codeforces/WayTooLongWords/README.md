# 002. Way Too Long Words (Codeforces)

## 🔗 Link:

[Codeforces - Way Too Long Words](https://codeforces.com/problemset/problem/71/A)

---

## ❓ Problem Description

Some words like "localization" or "internationalization" are so long that writing them repeatedly is tiresome.
We can use an abbreviation to represent these words. The abbreviation of a word is formed by taking the first letter of the word and the number of letters that are not the first letter. For example, the abbreviation of "localization" is "l10n" and the abbreviation of "internationalization" is "i18n".
A word is considered **too long** if its length is **strictly more than 10 characters**. All such words should be replaced with a special abbreviation.

## ✅ Input

-   First line: Integer `n` (1 ≤ n ≤ 100), the number of words.
-   Next `n` lines: Each contains a word (1 to 100 lowercase Latin letters).

## ✅ Output

-   For each input word, print the abbreviation or the word itself (if length ≤ 10).

---

### 🧪 Examples:

| Word                                          | Output |
| --------------------------------------------- | :----: |
| word                                          |  word  |
| localization                                  |  l10n  |
| internationalization                          |  i18n  |
| pneumonoultramicroscopicsilicovolcanoconiosis |  p43s  |

---

<details>
<summary> 💡 Solution Approach </summary>

1. For each word:
    - If its length ≤ 10 → Keep the word as is.
    - Else → Replace it with:
        - First letter
        - Number of characters between first and last letter
        - Last letter
          Example: "localization" → "l10n"
2. This can be done by using `word[0] + (word.length - 2) + word[word.length - 1]`.

</details>

---

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

---

## 🧠 Tags

`string` `brute force`
