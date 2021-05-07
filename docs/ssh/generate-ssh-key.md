# Generate SSH Key

```sh
ssh-keygen -t rsa -b 4096 -C "19855812775@163.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```
