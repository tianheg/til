---
title: typeerror-cannot-unpack-non-iterable-nonetype-object
date: 2021-05-01 10:19:14
permalink: /pages/b8ab30/
categories:
  - python
tags:
  - 
---
# TypeError: Cannot Unpack Non-iterable NoneType Object

[File location](https://github.com/tianheg/run/blob/8d96ae99b838923dd2a2b64ba75e8931cfddc1ab/scripts/keep_sync.py)

Error log:

```bash
Traceback (most recent call last):
  File "scripts/keep_sync.py", line 217, in <module>
    run_keep_sync(options.phone_number, options.password, options.with_gpx)
  File "scripts/keep_sync.py", line 198, in run_keep_sync
    new_tracks = get_all_keep_tracks(email, password, old_tracks_ids, with_download_gpx)
  File "scripts/keep_sync.py", line 134, in get_all_keep_tracks
    s, headers = login(s, email, password)
TypeError: cannot unpack non-iterable NoneType object
```

It works, but I didn't do anything.
