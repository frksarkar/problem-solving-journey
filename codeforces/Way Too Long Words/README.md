# 002. Way Too Long Words (Codeforces)

## 🔗 Link:

[Codeforces - Way Too Long Words](https://codeforces.com/problemset/problem/71/A)

---

## ❓ Problem Description

Some words like "localization" or "internationalization" are so long that writing them repeatedly is tiresome.

A word is considered **too long** if its length is **strictly more than 10 characters**. All such words should be replaced with a special abbreviation.

### 🔤 Abbreviation Rule:

-   Take the **first** letter.
-   Count the **number of characters between** the first and last letter.
-   Take the **last** letter.
-   Combine them: `first + count + last`

### 🧪 Examples:

| Word                                          | Output |
| --------------------------------------------- | :----: |
| word                                          |  word  |
| localization                                  |  l10n  |
| internationalization                          |  i18n  |
| pneumonoultramicroscopicsilicovolcanoconiosis |  p43s  |

---

## ✅ Input

-   First line: Integer `n` (1 ≤ n ≤ 100), the number of words.
-   Next `n` lines: Each contains a word (1 to 100 lowercase Latin letters).

## ✅ Output

-   For each input word, print the abbreviation or the word itself (if length ≤ 10).

---

## 🧪 Sample Input

    4
    word
    localization
    internationalization
    pneumonoultramicroscopicsilicovolcanoconiosis

## ✅ Sample Output

    word
    l10n
    i18n
    p43s

---

## 🕒 Time and Space Complexity

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)
