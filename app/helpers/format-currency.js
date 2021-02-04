import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params/*, hash*/) {
  let [value, symbol] = params;
  value + ',00 ' + symbol;
});
