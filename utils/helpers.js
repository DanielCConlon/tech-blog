module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    format_url: url => {
      return url
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }

      return word;
    }
};