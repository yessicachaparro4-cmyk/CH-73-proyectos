export function rubricPerfect(score) {
    score = Number(score);

    if (score === 11) {
        return "Perfect";
    } else if (score > 8) {
        return "Excellent";
    } else if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}