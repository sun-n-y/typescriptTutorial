type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type StringOrNumber = string | number;

//challenge

type Employee = { id: number; name: String; department: string };
type Manager = { id: number; name: String; employees: Employee[] };

type Staff = Manager | Employee;

function printStaffDetails(p1: Staff) {
  if ('employees' in p1) {
    console.log(
      `This person is a Manager, with ${p1.employees.length} employees`
    );
  } else {
    console.log(`${p1.name} is an Employee in ${p1.department} department`);
  }
}

const james: Employee = { id: 1, name: 'james', department: 'shoes' };
const kim: Employee = { id: 1, name: 'kim', department: 'tech' };
const boss: Manager = { id: 1, name: 'kim', employees: [james, kim] };

printStaffDetails(james);
printStaffDetails(kim);
printStaffDetails(boss);
