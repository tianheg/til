# Use Bundler 2 Or Greater With This Lockfile

[source](https://github.com/jekyll/jekyll/issues/7463#issuecomment-451686361)

`warn_for_outdated_bundler_version': You must use Bundler 2 or greater with this lockfile. (Bundler::LockfileError)`

To use Bundler 2 in your lockfile:

```bash
# update Rubygems
gem update --system
# update bundler
gem install bundler
# update Gemfile.lock in your project
bundler update --bundler
```
