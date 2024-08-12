function solution(A, B) {
    let result = "";
    while (A > 0 || B > 0) {
        if (A > B) {
            if (result.length >= 2 && result[result.length - 1] === 'a' && result[result.length - 2] === 'a') {
                result += 'b';
                B--;
            } else {
                result += 'a';
                A--;
            }
        } else {
            if (result.length >= 2 && result[result.length - 1] === 'b' && result[result.length - 2] === 'b') {
                result += 'a';
                A--;
            } else {
                result += 'b';
                B--;
            }
        }
    }
    return result;
}