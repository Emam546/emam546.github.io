export function getRandomNum(num: number) {
    return Math.floor(num * Math.random());
}
export function getRandomValue<T>(arr: Array<T>): T {
    return arr[getRandomNum(arr.length)];
}
export function getRandomValues<T>(
    arr: T[],
    num = arr.length,
    random = true
): T[] {
    const res: T[] = new Array();
    for (let i = 0; i < (random ? getRandomNum(num) : num); i++) {
        // to avoid repeating
        let larr = getRandomValue(arr);

        while (larr == res.at(-1)) larr = getRandomValue(arr);

        res.push(larr);
    }
    return res;
}
export function getRandomValuesNoRepeat<T>(
    arr: T[],
    num = arr.length,
    random = true,
    filter: T[] = []
): T[] {
    const res: T[] = new Array();
    let cur = [...arr];
    const max = Math.min(
        cur.length - filter.length,
        random ? getRandomNum(num) : num
    );
    for (let i = 0; i < max; i++) {
        // to avoid repeating
        let i = getRandomNum(cur.length);
        while (filter.includes(cur[i])) i = getRandomNum(cur.length);
        res.push(cur[i]);
        cur = cur.filter((_, ci) => ci != i);
    }
    return res;
}
