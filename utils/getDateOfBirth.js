import intervalToDuration from 'date-fns/intervalToDuration';
import differenceInDays from 'date-fns/differenceInDays';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInWeeks from 'date-fns/differenceInWeeks';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
import differenceInYears from 'date-fns/differenceInYears';

const getDateOfBirth = (from, to) => {
  const diff = intervalToDuration({
    start: from,
    end: to,
  });

  let milliseconds = differenceInMilliseconds(from, to);
  let seconds = differenceInSeconds(from, to);
  let minutes = differenceInMinutes(from, to);
  let hours = differenceInHours(from, to);
  let days = differenceInDays(from, to);
  let weeks = differenceInWeeks(from, to);
  let months = differenceInMonths(from, to);
  let years = differenceInYears(from, to);

  let dob = `You are age is `;
  dob += diff.years.toString();
  dob += diff.years > 1 ? ' years, ' : ' year, ';
  dob += diff.months.toString();
  dob += diff.months > 1 ? ' months and ' : ' month and ';
  dob += diff.days.toString();
  dob += diff.days > 1 ? ' days' : ' day.';

  return {
    milliseconds,
    seconds,
    minutes,
    months,
    hours,
    weeks,
    years,
    days,
    dob,
  };
};

export default getDateOfBirth;
