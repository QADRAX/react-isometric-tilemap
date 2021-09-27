export function getElementFromMatrix<T>(
    matrix: T[][],
    row: number,
    col: number,
): T | undefined {
    let result: T | undefined;
    if (row >= 0 && col >= 0) {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (row == i && col == j) {
                    result = matrix[i][j];
                }
            }
        }
    }
    return result;
}