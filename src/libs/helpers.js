export const dateParser = (date = new Date(), locale = 'en-uk') => {
    date = new Date(date);

    return new Intl.DateTimeFormat(locale).format(date);
};
