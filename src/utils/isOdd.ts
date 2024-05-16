export function isOdd(num: number): boolean {
    // Type guard to check if 'num' is a finite number
    if (typeof num === "number" && isFinite(num)) {
        return num % 2 !== 0; // Check if the remainder is not zero (indicating an odd number)
    } else {
        return false; // Return false for non-numeric or infinite values
    }
}
