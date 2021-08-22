
Gatsby
======

Change Default Package Manager
------------------------------



   vim ~/.config/gatsby/config.json

Change:

.. code:: json

   "cli": {
           "packageManager": "npm"
   }

to:

.. code:: json

   "cli": {
           "packageManager": "yarn"
   }

`source <https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-change-your-default-package-manager-for-your-next-project>`_

Set Up Development Environment
------------------------------

Install Node.js(nvm), Git



   sudo apt update
   sudo apt -y upgrade
   sudo apt-get install curl
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
   npm install -g gatsby-cli

source:


#. https://www.gatsbyjs.com/docs/tutorial/part-zero/#ubuntu-debian-and-other-apt-based-distros
#. https://github.com/nvm-sh/nvm#install--update-script
