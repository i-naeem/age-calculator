import intervalToDuration from 'date-fns/intervalToDuration';

const getDateOfBirth = (from, to) => {
  const diff = intervalToDuration({
    start: from,
    end: to,
  });

  return diff;
};

export default getDateOfBirth;
