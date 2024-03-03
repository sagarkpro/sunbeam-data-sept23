#include <iostream>
using namespace std;

class Person
{
private:
    string name;

public:
    Person()
    {
        this->name = "";
    }
    Person(string name)
    {
        this->name = name;
    }
    void acceptData()
    {
        cout << "Enter the name = ";
        cin >> this->name;
    }
    void displayData()
    {
        cout << "Name = " << this->name << endl;
    }
};

class Employee : public Person
{
private:
    int empid;
    double salary;

public:
    Employee()
    {
        this->empid = 0;
        this->salary = 0;
    }
    Employee(int empid, string name, double salary) : Person(name)
    {
        this->empid = empid;
        this->salary = salary;
    }
    void acceptData()
    {
        cout << "Enter the empid = ";
        cin >> this->empid;

        Person::acceptData();

        cout << "Enter the salary = ";
        cin >> this->salary;
    }

    void displayData()
    {
        cout << "Empid = " << this->empid << endl;
        Person::displayData();
        cout << "Salary = " << this->salary << endl;
    }
};

class Student : public Person
{
private:
    int rollno;
    double marks;

public:
    Student()
    {
        this->rollno = 0;
        this->marks = 0;
    }
    Student(int rollno, string name, double marks) : Person(name)
    {
        this->rollno = rollno;
        this->marks = marks;
    }

    void acceptData()
    {
        cout << "Enter the rollno = ";
        cin >> this->rollno;

        Person::acceptData();

        cout << "Enter the marks = ";
        cin >> this->marks;
    }

    void displayData()
    {
        cout << "Roll no = " << this->rollno << endl;
        Person::displayData();
        cout << "Marks = " << this->marks << endl;
    }
};

enum EMainMenu
{
    EXIT,
    EMPLOYEE,
    STUDENT
};

EMainMenu menu()
{
    int choice;
    cout << "0. EXIT" << endl;
    cout << "1. Employee Data" << endl;
    cout << "2. Student Data" << endl;
    cout << "Enter your choice = ";
    cin >> choice;
    return EMainMenu(choice);
}

int main()
{
    EMainMenu choice;
    Employee e;
    Student s;
    while ((choice = menu()) != EXIT)
    {
        switch (choice)
        {
        case EMPLOYEE:
            e.acceptData();
            e.displayData();
            break;
        case STUDENT:
            s.acceptData();
            s.displayData();
            break;
        default:
            cout << "Wrong choice.." << endl;
            break;
        }
    }

    return 0;
}