export const dateParser = (
    date: Date = new Date(),
    locale: string = 'en-gb'
): string => {
    return new Intl.DateTimeFormat(locale).format(new Date(date));
};

export const titleCase = (sentence: string): string => {
    return sentence
        .split(' ')
        .map(
            word =>
                (word = `${word.substr(0, 1).toUpperCase()}${word.substr(1)}`)
        )
        .join(' ');
};

