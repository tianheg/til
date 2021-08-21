# https://www.sphinx-doc.org/en/master/usage/configuration.html
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))
project = 'Today I Learnt'
copyright = '2021, Jim Gao'
author = 'Jim Gao'

extensions = [
    # Stdlib extensions:
    'sphinx.ext.autodoc',
    'sphinx.ext.extlinks',
    'sphinx.ext.intersphinx',
    'sphinx.ext.napoleon',
    'sphinx.ext.githubpages',
    'sphinx.ext.mathjax',
    'sphinx.ext.todo',
    'sphinx.ext.viewcode',

    # Third-party extensions:
    'm2r2',
]

master_doc = 'index'
pygments_style = 'sphinx'
templates_path = ['_templates']
exclude_patterns = ['_build', 'CHANGELOG.rst', 'README.rst', 'references.rst']
html_theme = 'sphinx_rtd_theme' # furo
html_static_path = ['_static']
source_suffix = ['.rst', '.md']
todo_include_todos = True
extlinks = {
    "ghissue": ("https://github.com/tianheg/blog/issues/%s", "#"),
}
