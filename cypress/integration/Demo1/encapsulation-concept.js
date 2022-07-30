class Bank {

    constructor(name, accountNo) {
        this.name = name;
        this.accountNo = accountNo;
    }

    getName() {
        return this.name;
    }


    getAccounNum() {
        return this.accountNo;
    }

    setName(newName) {
        this.name = newName;
    }

    setAccountNo(newAccountNo) {
        this.accountNo = newAccountNo;
    }

}

let bank = new Bank('Mohan', 1244568);
bank.setName('Shiva');
bank.setAccountNo(14334567)
console.log(bank.getName)
console.log(bank.getAccounNum)


