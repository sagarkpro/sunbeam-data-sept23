#include <iostream>
#include <vector>
using namespace std;

void display(vector<int> &v1)
{
    for (int i = 0; i < v1.size(); i++)
        cout << "value at index " << i << " = " << v1.at(i) << endl;
}
int main()
{
    vector<int> v1;
    v1.push_back(10);
    v1.push_back(20);
    v1.push_back(30);
    v1.push_back(40);
    v1.push_back(50);
    v1.push_back(60);
    v1.push_back(70);

    display(v1);

    v1.pop_back();
    v1.pop_back();
    cout << "After removing last element - " << endl;
    display(v1);
    return 0;
}