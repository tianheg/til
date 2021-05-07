---
title: connection-broken-by-proxy-error
date: 2021-05-01 10:19:14
permalink: /pages/b1c65c/
categories:
  - python
tags:
---
# Connection Broken By Proxy Error

```bash
$ pip install polyline           
WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/polyline/
WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/polyline/
WARNING: Retrying (Retry(total=2, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/polyline/
WARNING: Retrying (Retry(total=1, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/polyline/
WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', OSError(0, 'Error'))': /simple/polyline/
ERROR: Could not find a version that satisfies the requirement polyline
ERROR: No matching distribution found for polyline
```

Python version: 3.8.5

Pip version: 20.1.1, 21.0.1

I tried input these in terminal [reference](https://stackoverflow.com/a/49979617):

```bash
set HTTP_PROXY=http://127.0.0.1:12333
set HTTPS_PROXY=https://127.0.0.1:12333
# or
set http_proxy=http://127.0.0.1:12333
set https_proxy=https://127.0.0.1:12333
```

```bash
$ pipenv install   
Pipfile.lock not found, creating...
Locking [dev-packages] dependencies...
Locking [packages] dependencies...
Building requirements...
Resolving dependencies...
✘ Locking Failed! 
Traceback (most recent call last):
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/urllib3/connectionpool.py", line 696, in urlopen
    self._prepare_proxy(conn)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/urllib3/connectionpool.py", line 964, in _prepare_proxy
    conn.connect()
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/urllib3/connection.py", line 359, in connect
    conn = self._connect_tls_proxy(hostname, conn)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/urllib3/connection.py", line 502, in _connect_tls_proxy
    ssl_context=ssl_context,
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/urllib3/util/ssl_.py", line 424, in ssl_wrap_socket
    ssl_sock = _ssl_wrap_socket_impl(sock, context, tls_in_tls)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/urllib3/util/ssl_.py", line 466, in _ssl_wrap_socket_impl
    return ssl_context.wrap_socket(sock)
  File "/home/tianheg/.pyenv/versions/3.7.10/lib/python3.7/ssl.py", line 423, in wrap_socket
    session=session
  File "/home/tianheg/.pyenv/versions/3.7.10/lib/python3.7/ssl.py", line 870, in _create
    self.do_handshake()
  File "/home/tianheg/.pyenv/versions/3.7.10/lib/python3.7/ssl.py", line 1139, in do_handshake
    self._sslobj.do_handshake()
OSError: [Errno 0] Error

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/requests/adapters.py", line 449, in send
    timeout=timeout
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/urllib3/connectionpool.py", line 756, in urlopen
    method, url, error=e, _pool=self, _stacktrace=sys.exc_info()[2]
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/urllib3/util/retry.py", line 573, in increment
    raise MaxRetryError(_pool, url, error or ResponseError(cause))
urllib3.exceptions.MaxRetryError: HTTPSConnectionPool(host='pypi.org', port=443): Max retries exceeded with url: /pypi/chardet/json (Caused by ProxyError('Cannot connect to proxy.', OSError(0, 'Error')))

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/resolver.py", line 764, in <module>
    main()
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/resolver.py", line 760, in main
    dev=parsed.dev)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/resolver.py", line 741, in _main
    resolve_packages(pre, clear, verbose, system, write, requirements_dir, packages, dev)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/resolver.py", line 709, in resolve_packages
    requirements_dir=requirements_dir,
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/resolver.py", line 692, in resolve
    req_dir=requirements_dir
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/utils.py", line 1403, in resolve_deps
    req_dir=req_dir,
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/utils.py", line 1111, in actually_resolve_deps
    results = resolver.clean_results()
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/utils.py", line 1017, in clean_results
    collected_hashes = self.collect_hashes(ireq)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/utils.py", line 900, in collect_hashes
    r = session.get(pkg_url, timeout=10)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/requests/sessions.py", line 555, in get
    return self.request('GET', url, **kwargs)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/requests/sessions.py", line 542, in request
    resp = self.send(prep, **send_kwargs)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/requests/sessions.py", line 655, in send
    r = adapter.send(request, **kwargs)
  File "/home/tianheg/.local/lib/python3.8/site-packages/pipenv/vendor/requests/adapters.py", line 510, in send
    raise ProxyError(e, request=request)
requests.exceptions.ProxyError: HTTPSConnectionPool(host='pypi.org', port=443): Max retries exceeded with url: /pypi/chardet/json (Caused by ProxyError('Cannot connect to proxy.', OSError(0, 'Error')))
```

Maybe urllib3's error.

Changes with the set proxy [reference](https://github.com/pypa/pip/issues/9216#issuecomment-741836058):

```bash
set HTTP_PROXY=http://127.0.0.1:12333
set HTTPS_PROXY=http://127.0.0.1:12333
```

Conclusion: No use

After I change the zsh proxy config from:

```bash
export http_proxy=http://127.0.0.1:12333
export https_proxy=https://127.0.0.1:12333

export http_proxy_user=user
export http_proxy_pass=pass

export https_proxy_user=user
export https_proxy_pass=pass
```

to:

```bash
export http_proxy=http://127.0.0.1:12333
export https_proxy=http://127.0.0.1:12333

export http_proxy_user=user
export http_proxy_pass=pass

export https_proxy_user=user
export https_proxy_pass=pass
```

It works!

---

**References**:

- [Pip 20.3+ break proxy connection](https://github.com/pypa/pip/issues/9216)
