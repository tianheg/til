#include<reg52.h>
#include "intrins.h"

#define uchar unsigned char
#define uint unsigned int

void DelayMs(uint n)
{
	uchar j;
	while(n--)
	{
		for(j=0; j<123; j++);
	}
}

void main(void)
{
	uchar i, temp;
	P2=0x02;
	
	while(1)
	{
		temp = 0x01;
		for(i=0; i<8; i++)
		{
			P0 = temp;
			DelayMs(500);
			temp = _crol_(temp, 1);
		}
		temp = 0x80;
		for(i=0; i<8; i++);
		{
			P0 = temp;
			DelayMs(500);
			temp = _cror_(temp, 1);
		}
	}
}