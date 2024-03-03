#include <iostream>
using namespace std;

class Complex
{
private:
    int *rptr;
    int *iptr;

public:
    Complex()
    {
        cout << "Inside Parameterless Ctor" << endl;
        this->rptr = new int;
        this->iptr = new int;
        *this->rptr = 1;
        *this->iptr = 2;
    }
    Complex(int real, int imag)
    {
        cout << "Inside Parameterized Ctor" << endl;
        this->rptr = new int;
        this->iptr = new int;
        *this->rptr = real;
        *this->iptr = imag;
    }

    void displayComplex()
    {
        cout << "Real = " << *this->rptr << endl;
        cout << "Imag = " << *this->iptr << endl;
    }

    void setReal(int real)
    {
        *this->rptr = real;
    }
    ~Complex()
    {
        delete this->rptr;
        delete this->iptr;
    }
};

int main()
{
    Complex c1(10, 20); // parameterized ctor
    c1.displayComplex();

    Complex c2 = c1; // Default Copy Ctor
    c2.displayComplex();
    c2.setReal(100);

    cout << "After change in c2.real" << endl;
    c1.displayComplex();
    c2.displayComplex();

    return 0;
}