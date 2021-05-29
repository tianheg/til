# Jekyll Error Building Page Related To Kramdown Parser

When running GitHub action, [error](https://github.com/tianheg/english/runs/2311559049?check_suite_focus=true#step:4:61):

```bash
Dependency Error: Yikes! It looks like you don't have kramdown-parser-gfm or one of its dependencies installed. In order to use Jekyll as currently configured, you'll need to install this gem. The full error message from Ruby is: 'cannot load such file -- kramdown-parser-gfm' If you run into trouble, you can find helpful resources at jekyllrb.com/help/! 
  Conversion error: Jekyll::Converters::Markdown encountered an error while converting '_posts/2020-01-01-accordion.md':
                    kramdown-parser-gfm
             ERROR: YOUR SITE COULD NOT BE BUILT:
                    ------------------------------------
                    kramdown-parser-gfm
```

Just add sth. to `Gemfile`:

```bash
gem "kramdown-parser-gfm"
```
