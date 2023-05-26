//linear time and space
function addToZero(numbers) {
    let map = []
    for (let index in numbers) {
        if (map[-numbers[index]]) {
            return true
        } else {
            map[numbers[index]] = true
        }
    }
    return false
}

//linear time and space
function hasUniqueChars(word) {
    let map = {}
    for (let index in word) {
        if (map[word[index]]) {
            return false
        } else {
            map[word[index]] = true
        }
    }
    return true
}

//linear time and constant space
function isPangram(sentence) {
    let remaining = 26
    let map = []
    for (let index in sentence) {
        let character = sentence[index].toUpperCase().charCodeAt()
        if (!map[character] && character < 91 && character > 64) {
            map[character] = true
            if (!--remaining) {
                return true
            }
        }
    }
    return false
}

//linear time and constant space
function findLongestWord(words) {
    let longest = 0
    for (let index in words) {
        if (words[index].length > longest) {
            longest = words[index].length
        }
    }
    return longest
}