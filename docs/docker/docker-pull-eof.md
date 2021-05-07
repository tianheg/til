---
title: docker-pull-eof
date: 2021-05-01 10:19:14
permalink: /pages/d7cd98/
categories:
  - docker
tags:
---
# Docker Pull EOF

error log:

```bash
Unable to find image 'algolia/docsearch-scraper:latest' locally
latest: Pulling from algolia/docsearch-scraper
f08d8e2a3ba1: Downloading [=>                                                 ]  560.3kB/26.7MB
3baa9cb2483b: Downloading [>                                                  ]     422B/35.36kB
94e5ff4c0b15: Download complete
1860925334f9: Download complete
d49511f6bc25: Waiting
c2016a0d8b61: Waiting
4a18a117ffdb: Waiting
f9411a50d53d: Waiting
cd3a266f2552: Waiting
fb1f18755162: Waiting
11b872239c59: Waiting
163853c9d290: Waiting
f87eb78b6f77: Waiting
24f55aaae019: Waiting
8d4710a532c3: Waiting
aa05dbdee05a: Waiting
087f7c98891e: Waiting
39ceb0ec08fb: Waiting
9303bca05f26: Waiting
635caa4382e5: Waiting
830ba87015b1: Waiting
6ed16c000601: Waiting
6492b70e66b7: Waiting
0ee06da44985: Waiting
e3f112923122: Waiting
34a233ff0906: Waiting
11b9a2597fa2: Waiting
docker: error pulling image configuration: Get https://production.cloudflare.docker.com/registry-v2/docker/registry/v2/blobs/sha256/25/2525d47820b9b2830cf42ca0dd4254ddd0d9f0a8f3eecf27df2b36f02d3e568f/data?verify=1613641483-Yr3Gy3gmkRLnxHeiMpLfmkef%2BHE%3D: EOF.
See 'docker run --help'.
```

Get advice from [here](https://stackoverflow.com/a/62763902):

This was mainly because of weak network. Configured the **docker daemon** to reduce the **tcp packets**

```bash
$ dockerd --max-concurrent-downloads <int>
```

here **<int>** suggests the number of docker pull layers you want to download concurrently.(**default is 3**)

**For me**:

I run the order again, it didn't display this error.
