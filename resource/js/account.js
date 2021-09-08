var tv = document.getElementById('tv');
var account = document.getElementById('account_name');
var balance = document.getElementById('deposit');


var acccountinfoList = [];

(function() {

    document.getElementById('create').onclick = function() {

        call(account.value, balance.value)
    }

    function call($account_vaule, $balance_value) {
        var new_account = {
            acccount_type: $account_vaule,
            balance: $balance_value
        }

        var old = tv.value;
        acccountinfoList.push(new_account);
        tv.value = old.concat("\n ", "Account name : ", new_account.acccount_type, " Balance :", new_account.balance);

    }




})();