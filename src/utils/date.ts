export function differenceInYears(dateLeft: Date, dateRight: Date): number {
    let years = dateLeft.getFullYear() - dateRight.getFullYear();
    const leftMonth = dateLeft.getMonth();
    const rightMonth = dateRight.getMonth();
    if (
        leftMonth < rightMonth ||
        (leftMonth === rightMonth && dateLeft.getDate() < dateRight.getDate())
    ) {
        years--;
    }
    return years;
}
