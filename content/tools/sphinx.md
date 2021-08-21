# Sphinx

<https://www.sphinx-doc.org/>

## reStructured Text Syntax

```rst
h1
==

h2
--

*itlitic*

**bold**

- 1
- 2
- 3

1. 1
2. 2
3. 3

what
    Definition lists associate a term with a definition.

how
    The term is a one-line phrase, and the definition is one or more paragraphs or body elements, indented relative to the term.

:what: Field lists map field names to field bodies, like
       database records.  They are often part of an extension
       syntax.

:how: The field marker is a colon, the field name, and a
      colon.

      The field body may contain one or more body elements,
      indented relative to the field marker.

-a            command-line option "a"
-b file       options can have arguments
              and long descriptions
--long        options can be long also
--input=file  long options can also have
              arguments
/V            DOS/VMS-style options too

Literal blocks are either indented or line-prefix-quoted blocks,
and indicated with a double-colon ("::") at the end of the
preceding paragraph (right here -->)::

    if literal_block:
        text = 'is left as-is'
        spaces_and_linebreaks = 'are preserved'
        markup_processing = None

Block quotes consist of indented body elements:

    This theory, that is mine, is mine.

    -- Anne Elk (Miss)

>>> print 'Python-specific usage examples; begun with ">>>"'
Python-specific usage examples; begun with ">>>"
>>> print '(cut and pasted from interactive Python sessions)'
(cut and pasted from interactive Python sessions)

+------------------------+------------+----------+
| Header row, column 1   | Header 2   | Header 3 |
+========================+============+==========+
| body row 1, column 1   | column 2   | column 3 |
+------------------------+------------+----------+
| body row 2             | Cells may span        |
+------------------------+-----------------------+

.. [1] A footnote contains body elements, consistently
   indented by at least 3 spaces.

.. [CIT2002] Just like a footnote, except the label is
   textual.

.. _Python: http://www.python.org

.. _example:

The "_example" target above points to this paragraph.

.. image:: mylogo.png

.. |symbol here| image:: symbol.png

.. Comments begin with two dots and a space.  Anything may
   follow, except for the syntax of footnotes/citations,
   hyperlink targets, directives, or substitution definitions.
```

ref: <https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html>

## Error

Source parser for markdown not registered

AttributeError: 'str' object has no attribute 'supported'
