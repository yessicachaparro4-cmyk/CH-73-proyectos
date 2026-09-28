export function ageCalculator(year, month, day) {
    const today = new Date();
    const birthday = new Date(year, month, day);

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDifference = today.getMonth() - birthday.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthday.getDate())
    ) {
        age--;
    }

    return age;
}