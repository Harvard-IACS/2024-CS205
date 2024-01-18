<!-- vim-markdown-toc GFM -->

* [TODO](#todo)
* [CS205: High Performance Computing for Science and Engineering](#cs205-high-performance-computing-for-science-and-engineering)
    * [Grade deadlines](#grade-deadlines)
    * [Class Website](#class-website)
    * [Google Drive](#google-drive)
    * [Weekly Meetings](#weekly-meetings)
    * [Homework Responsibilities](#homework-responsibilities)
    * [Labs Responsibilities](#labs-responsibilities)
    * [Website Content Creation](#website-content-creation)

<!-- vim-markdown-toc -->

# TODO

* [ ] Setup class canvas
* [ ] Determine office hours for TFs
* [ ] Homework responsibilities
* [ ] Lab responsibilities
* [ ] Lab sections (my.harvard)

# CS205: High Performance Computing for Science and Engineering

Repository created with [`iacs-cli`](https://pypi.org/project/iacs-cli/).

This repository is **private** for the CS205 teaching staff.  Please push only
to this remote and treat its contents confidential.

## Grade deadlines

* Exam/presentation: **TBD**
* Grades: **TBD**

## Class Website

https://harvard-iacs.github.io/2023-CS205

## Google Drive

**TBD**

## Weekly Meetings

**TBD**

## Homework Responsibilities

**TBD**

## Labs Responsibilities

**TBD**

## Website Content Creation

The class website is generated with the
[pelican](https://docs.getpelican.com/en/latest/) python package.  All class
_content_ is located below the `content` directory in this repository.  Content
is modified by:

1. Markdown files
2. Jupyter notebooks (HW and PP)

The directory structure is a follows:
```bash
content
├── homeworks
├── labs
├── lectures
├── pages
└── project
```
The content of the home page is inside `content/index.md`.  The sub-directory
`pages` contains the website sub-sections that you can click on in the top right
navigation panel on the site.

Changing or adding content is not automatically translated to HTML to serve our
website.  Here are the steps you need to take to accomplish this:

0. **You only need to do this once.**  If you have `iacs-cli` installed on your
   system from previous TF at IACS, uninstall it with:
   ```bash
   python3 -m pip uninstall iacs-cli
   ```
   Then reinstall it with the following:
   ```bash
   python3 -m pip install iacs-cli pelican-jupyter
   ```
   You should now have the `iacs` tool available on your command line.  If not,
   make sure your `PATH` is set to point to the directory where Python installed
   the `iacs-cli` package.
1. Modify content inside the `content` directory
2. Verify your changes by launching a local web server.  In the root directory
   of the `git` repository, run this command:
   ```bash
   make preview
   ```
   The command will launch a python web server which you can browse at
   [http://0.0.0.0:8000](http://0.0.0.0:8000).  Check that all is fine on the
   local webpage and perform more changes if necessary.  After additional
   changes are made you have to rebuild the HTML sources.  You can do this with
   ```bash
   make docs
   ```
   **Note:** You may see some WARNING when you build the HTML.  This is ok due
   to some files that can not be found.  If you see ERROR in red, then something
   is wrong.
3. Once everything is fine, commit your changes (everything below `content`) and
   quickly describe what you did in the subject (and maybe commit message if it
   was complicated).
4. Create a separate commit of the new HTML sources by running:
   ```bash
   make webcommit
   ```
   This creates a new commit with the changes inside the `docs` directory only.
5. Push your modifications:
   ```bash
   git push
   ```
