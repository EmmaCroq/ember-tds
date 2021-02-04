import { helper } from '@ember/component/helper';

export default helper(function plural(params/*, hash*/) {
  let [count, zero, one, other] = params;
  switch (count) {
    case 0:
      return zero;
    case 1:
      return count + ' ' + one;
  }
  return count + ' ' + other;
});
