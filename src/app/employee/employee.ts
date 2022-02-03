import { UserPersonal } from './../user-personal/user-personal';
import { EmployeeRole } from '../employee-role/emplyee-role';
export interface Employee {
    employeeId: number;
    user: UserPersonal;
    employee_role: EmployeeRole;
}
