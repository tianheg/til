#include "reg52.h"

void Delay()
{
	unsigned int i;
	for(i=0;i<30000;i++);
}

void main(void)
{
	P2=0x02;
	while(1)
	{
		P0=0xFF;
		Delay();
		P0=0x00;
		Delay();
	}
}