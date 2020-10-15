export const dateParser = (
    date: Date = new Date(),
    locale: string = 'en-gb'
): string => {
    return new Intl.DateTimeFormat(locale).format(new Date(date));
};

const capitalizeWord = (word: string): string =>
    (word = `${word.substr(0, 1).toUpperCase()}${word.substr(1)}`);

export const titleCase = (sentence: string): string =>
    sentence.split(' ').map(capitalizeWord).join(' ');

