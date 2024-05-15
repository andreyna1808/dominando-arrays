// Filtrar objetos com base em múltiplas condições

const employees = [
    { name: 'Alice', age: 25, department: 'HR', otherInfos: { hasVacation: true} },
    { name: 'Bob', age: 30, department: 'Engineering', otherInfos: { hasVacation: true} },
    { name: 'Charlie', age: 35, department: 'HR', otherInfos: { hasVacation: true} },
    { name: 'Clarice', age: 30, department: 'hR',  otherInfos: { hasVacation: false}  },
    { name: 'Harry', age: 20, department: 'Engineering', otherInfos: { hasVacation: false}  },
    { name: 'Dave', age: 40, department: 'Engineering', otherInfos: { hasVacation: false}  }
];

const filterHROld = employees.filter((data) => data.department.toLocaleLowerCase() === 'hr' && (data.age >= 35 || data.age <= 25))
console.log(filterHROld)

// Filtrar Objetos nas propriedades aninhadas

const filterHasVactionAndHR = employees.filter((data) => !data.otherInfos.hasVacation &&  data.department.toLocaleLowerCase() === 'hr')
console.log(filterHasVactionAndHR)

// Filtrar Objetos nas propriedades de arrays aninhadas

const employeesUpdate = [
    { name: 'Alice', otherInfos:[ { hasVacation: true, age: 18}] },
    { name: 'Bob', otherInfos:[ { hasVacation: true, age: 18}] },
    { name: 'Charlie', otherInfos:[ { hasVacation: true, age: 22}] },
    { name: 'Clarice', otherInfos: [{ hasVacation: false, age: 15}]  },
    { name: 'Harry', otherInfos: [{ hasVacation: false, age: 12}]  },
    { name: 'Dave', otherInfos: [{ hasVacation: false, age: 10}]  }
];

const getOldEmployees = employeesUpdate.filter((employeer) => employeer.otherInfos.filter((data) => data.age < 18)?.length)
console.log(getOldEmployees)