interface Teacher {
    readonly firstName: string;  // can only be set during initialization
    readonly lastName: string;   // can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // ? is for optional
    location: string;
    [propName: string]: any;     // allows additional properties of any type
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (
    firstName: string,
    lastName: string
    ): string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

//   console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
//   console.log(director1);




const printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string
): string => {
    return `${firstName.charAt(0)}. ${lastName}`;

}

// console.log(printTeacher("Jhon", "Doe"));

// Implement the StudentClass according to the interface
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage of task 4
const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
