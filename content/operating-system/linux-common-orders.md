# Linux Common Orders

Site: <https://tianheg.github.io/linux-command/>

- `man`: watch order docs
- `mv`, `cp`: move file, copy file
- `find`: find file better tool: `ack` other similar order: `grep`, `awk`
- `tar`: compress file
- `rsync`: a fast, versatile, remote (and local) file-copying tool
- `lsof -i:8000`: checking 8000 port usage
- `ps`: display running processes
- `kill -9 pid`: force a process to exit based on its pid
- pipe: A pipe can take the stdout output of the previous command and use it as the stdin input for the next command. With the pipeline character we can implement some slightly more complex automated scripting functions example: `ps | grep -i "node" | awk '{print $2}' | xargs kill -9`
- `tree`: show directory structure
- `time ls`: count the total time spent on the given command
- `ssh`: OpenSSH remote login client

## Useful Orders

1. create a file, which its name is `YYYY-MM-DD-title.md`

```sh
$ touch 2021/"$(date +"%F")-notes.md"
```

2. Add same content in many files

```sh
for file in $(find . -name "*.md"); do
  echo Processing $file

  cat beginning.txt $file > $file.modified

  mv $file.modified $file

done
```

ref: <https://stackoverflow.com/a/43460416/12539782>

3. `mkdir folder && cd $_`: Create folder and open it
4. `chmod +x script` make script executable
5. `wget -T 5 -t 10 -Q 500m -nH -r -E -l inf -k -p -np 'https://www.yidajiabei.xyz'` download a website [ref](https://bbs.archlinuxcn.org/viewtopic.php?pid=42852#p42852)
6. `curl -V | curl -F "c=@-" "https://fars.ee/"` <https://fars.ee/> 粘贴代码
7. `unrar x file.rar /path/to/file`
