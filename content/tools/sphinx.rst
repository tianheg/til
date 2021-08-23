Sphinx
======

https://www.sphinx-doc.org/

reStructured Text Syntax
------------------------

可使用的段落标记：

.. todo::

   This function is not suitable for sending spam e-mails.

.. note::

   This function is not suitable for sending spam e-mails.

.. warning::

   This function is not suitable for sending spam e-mails.

.. versionadded:: 2.5

   The *spam* parameter.

.. versionchanged:: 2.6

   The *spam* parameter.

.. deprecated:: 2.7

   The *spam* parameter.

.. seealso::

   Module :py:mod:`zipfile`
      Documentation of the :py:mod:`zipfile` standard module.

   `GNU tar manual, Basic Tar Format <http://link>`_
      Documentation for tar archive files, including GNU tar extensions.

.. seealso:: modules :py:mod:`zipfile`, :py:mod:`tarfile`

.. rubric:: title

This directive creates a paragraph heading that is not used to create a table of contents node.

.. centered:: LICENSE AGREEMENT

.. hlist::
   :columns: 2

   * A list of
   * short items
   * that should be
   * displayed
   * horizontally

>>> 1 + 1
2

+------------------------+------------+----------+
| Header row, column 1   | Header 2   | Header 3 |
+========================+============+==========+
| body row 1, column 1   | column 2   | column 3 |
+------------------------+------------+----------+
| body row 2             | Cells may span        |
+------------------------+-----------------------+

See :download:`this example script <https://github.com/tianheg/blog/archive/refs/heads/main.zip>`.

Since Pythagoras, we know that :math:`a^2 + b^2 = c^2`.

.. math::

   (a + b)^2 = a^2 + 2ab + b^2

   (a - b)^2 = a^2 - 2ab + b^2

.. math::
   :nowrap:

   \begin{eqnarray}
      y    & = & ax^2 + bx + c \\
      f(x) & = & x^2 + 2xy + y^2
   \end{eqnarray}

.. productionlist::
   try_stmt: try1_stmt | try2_stmt
   try1_stmt: "try" ":" `suite`
            : ("except" [`expression` ["," `target`]] ":" `suite`)+
            : ["else" ":" `suite`]
            : ["finally" ":" `suite`]
   try2_stmt: "try" ":" `suite`
            : "finally" ":" `suite`

``计算机网络``

:abbr:`LIFO (last-in, first-out)`

:command:`rm`

:manpage:`git`

:menuselection:`Start --> Programs`

|name|

.. |name| replace:: replacement *text*

.. code:: python

   print('Hello World!')

.. glossary::

   environment
      A structure where information about all documents under the root is
      saved, and used for cross-referencing.  The environment is pickled
      after the parsing stage, so that successive runs only need to read
      and parse new and changed documents.

   source directory
      The directory which, including its subdirectories, contains all
      source files for one Sphinx project.

.. sectionauthor:: Guido van Rossum <guido@python.org>

.. code:: rst

   .. image:: images/life-structure.png

   ----

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

   .. [1] A footnote contains body elements, consistently
      indented by at least 3 spaces.

   .. [CIT2002] Just like a footnote, except the label is
      textual.

   .. _Python: http://www.python.org

   .. _example:

   The "_example" target above points to this paragraph.

   .. |symbol here| image:: symbol.png

ref:

1. https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html
2. https://docutils.sourceforge.io/docs/user/rst/quickref.html

Error
-----

Source parser for markdown not registered

AttributeError: 'str' object has no attribute 'supported'

Error::

    Could not lex literal_block as "sh". Highlighting skipped

之所以出现 ``Hightlighting skipped`` 错误，是因为被高亮的代码不符合对应语言规则。参考 `No syntax errors <https://docs.typo3.org/m/typo3/docs-how-to-document/master/en-us/WritingReST/Codeblocks.html#:~:text=Please%3A-,No%20syntax%20errors,-!>`_
