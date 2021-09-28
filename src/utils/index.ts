export function getElementFromMatrix<T>(
    matrix: T[][],
    row: number,
    col: number,
): T | undefined {
    let result: T | undefined;
    try {
        result = matrix[row][col];
    } catch { }
    return result;
}