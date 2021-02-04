import { helper } from '@ember/component/helper';

export default helper(function formatPercent(params/*, hash*/) {
  let [value] = params;
  return value * 100 + '%';
});
