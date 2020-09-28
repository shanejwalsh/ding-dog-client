export const dateParser = (
    date: Date = new Date(),
    locale: string = 'en-gb'
): string => {
    date = new Date(date);

    return new Intl.DateTimeFormat(locale).format(date);
};

export const titleCase = (sentence: string): string => {
    let words = sentence.split(' ');

    words = words.map(word => word = `${word.substr(0, 1).toUpperCase()}${word.substr(1)}`)
    return words.join(' ');
};
