interface Teacher {
    readonly firstName: string;  // can only be set during initialization
    readonly lastName: string;   // can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // ? is for optional
    location: string;
    [propName: string]: any;     // allows additional properties of any type
}


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);