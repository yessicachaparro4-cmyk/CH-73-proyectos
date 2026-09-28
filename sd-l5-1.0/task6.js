export function rubricExcellent(score) {
    score = Number(score);

    if (score > 8) {
        return "Excellent";
    } else if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}