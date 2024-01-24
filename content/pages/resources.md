Title: Resources
Category: Resources
Slug: resources
Date: 2021-12-30


<!-- hack to include week01.zip in website for shareable link -->
<!-- []({attach}./week01.zip) -->

## <a id="fasrc"></a><a class="anchor-link" href="#fasrc">HUIT Open OnDemand</a>

* [User guide](https://harvard-atg.github.io/huit-ondemand-user-docs/)

## <a id="general"></a><a class="anchor-link" href="#general">General Useful References</a>

* [Linux Productivity Tools (ORNL)]({attach}./linux_productivity_tools.pdf)
<!-- * [Unix Tutorial](http://www.ee.surrey.ac.uk/Teaching/Unix/) -->
* [Command Line Reference Cheat Sheet](https://files.fosswire.com/2007/08/fwunixref.pdf)
* [Bash scripting Cheat Sheet](https://devhints.io/bash)
* [Learn LaTeX in 30 Minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)
* [Git Reference](https://git-scm.com/docs)
* [Git Book](http://git-scm.com/book/en/v2) (recommended reading)
* [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
* [Git Atlassian Tutorial](https://www.atlassian.com/git/tutorials)
* [GCC Optimization Flags](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html)


## <a id="hpc-tutorials"></a><a class="anchor-link" href="#hpc-tutorials">HPC Tutorials</a>

* [Introduction to Parallel Computing (LLNL)](https://hpc.llnl.gov/training/tutorials/introduction-parallel-computing-tutorial)
* [Designing and Building Parallel Programs (ANL)](https://www.mcs.anl.gov/~itf/dbpp/)
* [The Landscape of Parallel Computing Research: A View from Berkeley](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2006/EECS-2006-183.html)


## <a id="c-cpp"></a><a class="anchor-link" href="#c-cpp">C/C++</a>

* [Slides for a `C`/`C++` Primer](https://code.harvard.edu/CS205/c_cpp_primer)
* [C Tutorial](https://www.tutorialspoint.com/cprogramming/index.htm)
* [C++ Reference](https://en.cppreference.com/w/)
* [C++ Tutorial](http://www.cplusplus.com/doc/tutorial/)
* [C++ Cheat Sheet](https://github.com/mortennobel/cpp-cheatsheet)


## <a id="openmp"></a><a class="anchor-link" href="#openmp">OpenMP</a>

* [OpenMP Specification](https://www.openmp.org/specifications/)
* [OpenMP Tutorial (LLNL)](https://hpc-tutorials.llnl.gov/openmp/)
* [OpenMP Examples](https://www.openmp.org/wp-content/uploads/openmp-examples-5.1.pdf)


## <a id="mpi"></a><a class="anchor-link" href="#mpi">MPI</a>

* [MPI Specification](https://www.mpi-forum.org/docs/)
* [MPI Tutorial (LLNL)](https://hpc-tutorials.llnl.gov/mpi/)
* [MPI Tutorial (ANL)](https://www.mcs.anl.gov/research/projects/mpi/tutorial/)
* [MPI Tutorial (Wes Kendall)](https://mpitutorial.com/)


## <a id="optimization"></a><a class="anchor-link" href="#optimization">Optimization</a>

* [Intel Intrinsics Guide](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html)


## <a id="windows"></a><a class="anchor-link" href="#windows">Windows Users</a>

* [Using Linux Subsystem on Windows 10]({attach}./linux_subsystem.pdf)
* [PuTTY SSH client for Windows](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)


## <a id="docker"></a><a class="anchor-link" href="#docker">Ubuntu Docker Image with OpenMPI</a>

You can get an Ubuntu based Docker container with

```bash
docker pull iacs/cs205_ubuntu
```

The container is hosted [here](https://hub.docker.com/r/iacs/cs205_ubuntu/tags).
The `Dockerfile` and `run_cs205_docker.sh` launch script can be found in the
[class repository](https://code.harvard.edu/CS205/main/tree/master/docker).
