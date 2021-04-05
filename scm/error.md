# Error

## `requires ANSI-style prototype` or `missing function-prototype`

如果你没有对要使用的函数定义，或者定义的函数拼写错误，Build 时会出现错误：

```bash
Rebuild started: Project: water-lamp
Rebuild Project 'water-lamp' - Target 'Target 1'
compiling water-lamp.c...
C:\Users\tianheg\Documents\water-lamp\uv\water-lamp.c(27): warning C206: 'DelayMs': missing function-prototype
C:\Users\tianheg\Documents\water-lamp\uv\water-lamp.c(27): error C267: 'DelayMs': requires ANSI-style prototype
Target not created.
Build Time Elapsed:  00:00:00
```

错误程序段：

```c
void DeplayMs(uint n)
{
    uchar j;
    while(n--)
    {
        for(j=0; j<123; j++);
    }
}
```

`DeplayMs` 应该是 `DelayMs`。
