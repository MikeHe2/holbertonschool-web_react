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

const printTeacher: printTeacherFunction = (
    firstName: string,
    lastName: string
): string => {
    return `${firstName.charAt(0)}. ${lastName}`;

}

console.log(printTeacher("Jhon", "Doe"));

// const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
//   };

//   console.log(teacher3);

// const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     location: 'London',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
//   };
//   console.log(director1);
