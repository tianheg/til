# Add Registry Mirrors For Ubuntu

Docker > 1.10.0

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["url"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

source: from Aliyun
