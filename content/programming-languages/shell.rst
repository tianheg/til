
Shell
=====

examples
--------

bash
^^^^



   #!/bin/bash
   echo "Hello World"



   #!/bin/bash
   echo "Printing text with newline"
   echo -n "Printing text widthout newline"
   echo -e "\nRemoving\tbackslash \t characters\n"

Single line comment:



   #!/bin/bash

   # Add two numeric value
   ((sum=12+13))

   # Print the result
   echo $sum

Multi-line comment:



   #!/bin/bash

   : '
   The following script calculates
   the square value of the number, 5.
   '
   ((area=5*6))
   echo $area

   <<LongComment
   kljljj
   LongComment

``while`` Loop:



   while [ condition ]
   do

       commands

   done



   #!/bin/bash

   n=1
   while [ $n -le 5 ]
   do

       echo "Running $n time"
       (( n++ ))

   done



   #!/bin/bash

   valid=true
   count=1
   while [ $valid ]
   do
   echo $count
   if [ $count -eq 15 ];
   then
   break
   fi
   ((count++))
   done



   #!/bin/bash

   # 使用 break 语句进行条件退出
   n=1
   while [ $n -le 6 ]
   do
   
       if [ $n == 6 ]
       then

           echo "Terminated"
           break

       fi
       echo "Position: $n"
       (( n++ ))

   done



   #!/bin/bash

   # 使用 continue 语句省略特定步骤
   n=0
   while [ $n -le 5 ]
   do

       (( n++ ))
       if [ $n == 3 ]
       then

           continue

       fi
       echo "Position $n"

   done



   #!/bin/bash

   # 创建无限循环
   n=1
   while :
   do

       printf "The current value of n=$n\n"
       if [ $n == 3 ]
       then

           echo "good"

       elif [ $n == 5 ]
       then

           echo "bad"

       elif [ $n == 7 ]
       then

           echo "ugly"

       elif [ $n == 10 ]
       then

           exit 0

       fi

       (( n++ ))

   done

``for`` Loop:



   for variable_name in lists
   do
   commands
   done



   #!/bin/bash

   for (( counter=22; counter>0; counter-- ))
   do
   echo -n "$counter "
   done
   printf "\n"



   #!/bin/bash

   # Reading static values
   for color in Blue Green Red White
   do
   echo "Color = $color"
   done



   #!/bin/bash

   # Reading Array Variable
   ColorList=("Blue Green Red White")
   for color in $ColorList
   do
   if [ $color == 'White' ]
   then
   echo "The color I hate the most is $color"
   fi
   done



   #!/bin/bash

   # Reading Command-line arguments
   for val in $*
   do
   echo "Argument: $val"
   done

   # exec: bash test.sh 12 3 12 31
   # Argument: 12
   # Argument: 3
   # Argument: 12
   # Argument: 31



   #!/bin/bash

   # Finding odd and even number using three expressions
   for (( n=1; n<=15; n++))
   do
   if (( $n%2==0 ))
   then
   echo "$n is even"
   else
   echo "$n is odd"
   fi
   done



   #!/bin/bash

   # Reading file content
   # weekday.txt: Sunday Monday Tuesday Wednesday Thursday Friday Saturday
   i=1
   for var in `cat weekday.txt`
   do
   echo "Weekday $i: $var"
   ((i++))
   done

``read``\ :

It's used to get user input.



   #!/bin/bash

   # Using simple read command
   echo "Enter your name"
   read name
   echo "Welcome $name to China"



   #!/bin/bash

   # Using read command with options
   read -p 'Username: ' user # -p 用来显示帮助输入的信息
   read -sp 'Password: ' pass # -s 隐藏输入内容

   if (( $user == "admin" && $pass == "1234" ))
   then

       echo -e "\nSuccessful login"

   else
       echo -e "\nUnsuccessful login"
       
   fi



   #!/bin/bash

   # Using read command to take multiple inputs
   echo "Type two names of your favorite programming languages"
   read lan1 lan2
   echo "$lan1 is your 1st choice"
   echo "$lan2 is your 2nd choice"



   #!/bin/bash

   # Using read command with the time limit
   read -t 5 -p "Type your favorite color : " color
   echo $color

``if``\ :

被用于比较的连接命令：\ ``-lt``\ ，\ ``-eq``\ (equality)，\ ``-ne``\ (not equality)，\ ``-gt``\ (greater than)。

将与（\ ``&&``\ ）或（\ ``||``\ ）应用于 ``if`` 语句中。

``elif``\ :



   #!/bin/bash

   echo "Enter your lucky number"
   read n

   if [ $n -eq 101 ];
   then
   echo "You got 1st prize"
   elif [ $n -eq 520 ];
   then
   echo "You got 2nd prize"
   elif [ $n -eq 999 ];
   then
   echo "You got 3rd prize"

   else
   echo "Sorry, try for the next time"
   fi

----

**References**\ :


#. https://linuxhint.com/30_bash_script_examples/

Set default value
~~~~~~~~~~~~~~~~~



   #!/bin/bash

   read -p "Enter your name [A]: " name
   name=${name:-A}
   echo $name
