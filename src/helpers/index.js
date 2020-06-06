const integersColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const makeComparison = (column, comparison, value, element) => {
  switch (comparison) {
    case 'maior que':
      return Number(element[column]) > Number(value);
    case 'menor que':
      return Number(element[column]) < Number(value);
    case 'igual a':
      return Number(element[column]) === Number(value);
    default:
      return [];
  }
};

const orderIntegerAsc = (data, column) => data.sort((a, b) => {
  if (a[column] === 'unknown') return -1;
  if (b[column] === 'unknown') return 1;
  return Number(a[column]) - Number(b[column]);
});
const orderStringAsc = (data, column) => data.sort((a, b) => {
  if (a[column] < b[column]) return -1;
  if (a[column] > b[column]) return 1;
  return 0;
});

const orderColumns = (data, column, order) => {
  const sortedData = integersColumns.includes(column)
    ? orderIntegerAsc(data, column)
    : orderStringAsc(data, column);
  if (order === 'DESC') return sortedData.reverse();
  return sortedData;
};

export { makeComparison, orderColumns };