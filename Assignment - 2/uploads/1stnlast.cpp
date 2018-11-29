#include<iostream>
#include<math.h>
using namespace std;
int main()
{
	int cases,num=0,last=0,first=0,j=0;
	cin>>cases;
	for(int i=0;i<cases;i++)
	{
		j=0;
		cin>>num;
		int temp = num;
		while(temp>0)
		{
			temp/=10;
			j++;
		}
		last = (num % 10);
		first = (num / pow(10,(j-1)));
		cout<<first+last<<endl;
	}
	return 0;
}