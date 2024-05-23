let person: [string, number] = ['john', 25];

let date: [number, number, number] = [1, 1, 25];

function getPerson(): [string, number] {
  return ['john', 25];
}

let randomPerson = getPerson();

enum ServerRespStatus {
  Success = 200,
  Error = 500,
}

console.log(ServerRespStatus);

interface ServerResponse {
  result: ServerRespStatus;
  data: string[];
}

function getServerResp(): ServerResponse {
  return { result: ServerRespStatus.Success, data: ['first', 'second'] };
}

const response: ServerResponse = getServerResp();

console.log(response);

enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
  Employee = 'Employee',
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(object: User): User {
  return object;
}

const result = createUser({
  id: 1,
  name: 'sunny',
  role: UserRole.Admin,
  contact: ['sd@gmail.com', '23423423'],
});

console.log(result);
