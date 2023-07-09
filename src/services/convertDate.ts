export default function convertDate(date: string) {
    const simpleDate = date.substring(0, 10);
    const brazilianDate = simpleDate.split("-").reverse().join("/");

    return brazilianDate;
}