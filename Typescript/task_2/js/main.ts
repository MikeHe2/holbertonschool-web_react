interface DirectorInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    wordDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    wordDirectorTasks(): string;
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeBreak(): string {
        return "Getting a coffee break"
    }

    wordDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }

    getCoffeBreak(): string {
        return "Cannot have a break"
    }

    wordDirectorTasks(): string {
        return "Getting to work"
    }

    }


    function createEmployee(salary: number | string): Director | Teacher {
        if (typeof salary === 'number' && salary < 500){
            return new Teacher();
        } else {
            return new Director();
        }
    }


console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director
