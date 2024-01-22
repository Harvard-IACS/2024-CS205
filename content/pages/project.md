Title: Project
Slug: project
Date: 2021-12-28


## <a id="pobjective"></a><a class="anchor-link" href="#pobjective">Project Objective</a>

The CS205 project objective is to apply the techniques learned in class on a
concrete real application to gain hands-on experience with writing and
optimizing parallel code.  Your project should be oriented on a compute
intensive problem, either from your research area or something you come up with
from scratch (given that it fits into the time frame offered by the class).  The
final report is written in the form of a proposal that can be submitted to a
high performance computing center to request compute hours on a supercomputer
used for your project application.  The teaching staff is in the role of the HPC
admission committee and will evaluate and grade your proposal.

You will start with a sequential baseline implementation that serves as the
reference benchmark.  This benchmark will be used as the reference case for the
subsequent implementation that must run in parallel (shared memory, distributed
memory or both) and is ideally optimized on the node level.  The target platform
are the computing resources offered by [FASRC](https://www.rc.fas.harvard.edu/).
A successful project will present a performance analysis with respect to the
reference case and presents results for parallel scaling and throughput.

> Each project group is responsible for planning and fostering the project
> progress and to meet the project deadlines outlined in the
> <a href="./schedule_static.html">schedule</a>.


### <a id="project-requirements"></a><a class="anchor-link" href="#project-requirements">Project Requirements</a>

Your project should involve the following considerations:

* You should have a sequential baseline code of your application that you can
  use as a reference when benchmarking and performance analysis.
* Demonstrate that there is potential for a parallel implementation of your
  chosen project application.  This may include bottleneck identification and a
  roofline analysis of the sequential baseline code.
* Parallelize the problem using the techniques discussed in class.
* It may either be a non-trivial shared memory code, distributed
  memory or both paradigms.
* Additional node-level optimizations may be implemented (vectorization, code
  fusion to improve instruction-level parallelism)
* Demonstrate performance (roofline analysis) and parallel scaling (weak and
  strong scaling) capabilities of the parallel and optimized code.
* Identify possible limitations and further improvements of the
  parallel/optimized code.

Projects that do include more of the listed items above or incorporate a higher
level of difficulty will be weighted accordingly.  The only strict requirement
is that the project code is implemented using either the `C`, `C++` or `Fortran`
programming languages.


## <a id="project-milestones"></a><a class="anchor-link" href="#project-milestones">Project Milestones</a>

There are five milestones for your final project.  The deadlines for each
milestone are shown in the <a href="./schedule_static.html">schedule</a>.

> 1. <a href="./project.html#M1">Team formation</a>
> 2. <a href="./project.html#M2">High-level project description</a>
> 3. <a href="./project.html#M3">In-class presentation of project proposal</a>
> 4. <a href="./project.html#M4">In-class presentation of parallel design</a>
> 5. <a href="./project.html#M5">Submission of final project deliverables and final project presentation</a>
>
> **Note:** There is enough time to plan ahead for each project milestone. No
> extensions will be granted for any milestone.  Projects submitted after the
> final due date will not be graded.


### <a id="M1"></a><a class="anchor-link" href="#M1">Team Formation</a>

Students are required to form teams and to partition the work among the team
members. The final project must be done in teams with 3-4 members each. You are
free to form teams and you can use the <a href="../#class-forum">class
forum</a> to find prospective team members. You may also find and discuss
project ideas through the forum.

In general, we do not anticipate that the grades for each team member will be
different. However, we reserve the right to assign different grades to each
group member if it becomes apparent that one of them put in a vastly different
amount of effort than the others.

#### <a id="M1-deliverable"></a><a class="anchor-link" href="#M1-deliverable">Deliverables</a>

> 1. Report your team members and request a team ID from
>    [`cs205-staff@g.harvard.edu`](mailto:cs205-staff@g.harvard.edu).
>    Your team ID will be `team01` if you are team 1 or `team10` if you are team
>    10 and so on.
> 2. The project code will be hosted in _private_ repositories in the [CS205
>    organization](https://code.harvard.edu/CS205/) at `code.harvard.edu`. Once
>    you have received your team ID from item 1, a member of your team creates a
>    private repository in the CS205 organization named after your team ID
>    (e.g. `team01` if you are team 1) and adds its team members to the
>    repository (you do not need to add the teaching staff, we will have access
>    already).

<!-- TODO: [fabianw@seas.harvard.edu; 2021-12-28] example team_00 repo (internal) -->


### <a id="M2"></a><a class="anchor-link" href="#M2">High-Level Project Description</a>

A short `pdf` summary that describes your project application and briefly
explains which parts of the application you plan to parallelize.  This milestone
is intended as an orientation for the teaching staff such that we can get an
idea of your plans and provide feedback in an early stage of the project.  The
summary should be **at most** 1 page in text length.  Please use graphs or other
visuals if they support your discussion.  Things you should consider in your
report:

* What forms of parallelism does your project idea offer?  Make sure you have an
  idea what is the computational bottleneck of your problem and aim to
  parallelize this part.  There might be multiple possibilities that you can
  propose to attack.
* How do you plan to exploit this parallelism?  Will you focus on shared memory
  models or distributed memory models or maybe a combination of both?  Which
  machine model do you think you will need for your problem (MIMD, SIMD, or
  both?)
* To answer the first part of the previous item you should describe the size of
  the problem you are planning to work on and provide an estimate of how much
  memory it will require.  From lab 1 you know how much memory there is per node
  on the compute cluster and based on your memory estimate you should argue
  whether the chosen size of you problem is reasonable for the given amount of
  resources we have.
* If your problem requires to run many simulations to generate data or other
  means, how long do you estimate a single run will take?  Will the solution to
  your problem depend on a high volume of I/O (input/output)?


#### <a id="M2-deliverable"></a><a class="anchor-link" href="#M2-deliverable">Deliverables</a>

> 1. Short `pdf` summary committed to your team repository. File location
>    `milestone/2/hl_summary.pdf`.


### <a id="M3"></a><a class="anchor-link" href="#M3">In-class Presentation of Project Proposal</a>

Your team needs to present a project proposal that covers the following
sections:

* What problem are you trying to solve with your application?
* Describe the mathematical model and/or the data for your application in
  detail.  Example questions that could be answered:
    + What are the limitations of the model?
    + In what context do you apply the model?
    + Where does the data come from?
    + How is the data transformed?
* Justify the effort required to parallelize the application.  Why do you need a
  parallel implementation of this application?
* Provide a draft of how you plan to parallelize the application.  What are the
  work packages you plan to follow? Will you be targeting a shared memory
  model, distributed memory model or both?  Explain the "why" here as well.

You will have **exactly 6 minutes** to present your proposal. You have to
prepare about 4 slides for your presentation (rule of thumb is 1.5 minutes per
slide).  Each of your team member should speak once.  _The 6 minute time limit
will be strictly enforced_.

This presentation is a chance for you to get feedback. We may suggest
modifications if necessary. Our main concern is the amount of effort a given
project will require; either too much or too little is unacceptable.


#### <a id="M3-deliverable"></a><a class="anchor-link" href="#M3-deliverable">Deliverables</a>

> 1. Presentation slides in `pdf` format committed to your team repository
>    _before_ the presentation.  File location `milestone/3/presentation.pdf`.


### <a id="M4"></a><a class="anchor-link" href="#M4">In-class Presentation of Parallel Design</a>

Your team needs to present the design of your parallel application that covers
the following sections:

* You should have a sequential baseline of your application at this point for
  which you can present results for a simple test case.  Results may be
  presented using visuals such as simple graphs, contour plots, volume
  renderings or movies for example.
* Present a profiling of your sequential baseline to identify the bottlenecks
  and present a simple roofline analysis of the identified compute kernels.
* Based on your analysis above propose the forms of parallelism you want to
  exploit in your application and which parallel programming models you will
  use.  (This may deviate from the draft you presented in the <a
  href="./project.html#M3">previous presentation</a>.)
* Elaborate on how you plan to implement the parallel code in terms of logic.
  What is the sequence of computational steps?  Where are synchronization
  points?  Comment on the communication overhead you expect and whether you
  expect load imbalance issues.  Propose methods to hide these latencies.

You will have **exactly 6 minutes** to present your proposal. You have to
prepare about 4 slides for your presentation (rule of thumb is 1.5 minutes per
slide).  Each of your team member should speak once.  _The 6 minute time limit
will be strictly enforced_.

This is an important milestone/presentation.  The identification of parallelism
and the methods how you exploit it is very essential for a successful parallel
application.  A poor design choice may not scale at all or may even run slower
than the sequential version in the worst case.

> This presentation is not a proposal but a design document.  You should be
> concrete and specific rather than abstract and general, and include real
> performance estimates supported by numbers.

It is also a chance for you to get feedback from the teaching staff and to come
up with ways around roadblocks you encounter.  The presentation is important for
the teaching staff such that we can ensure that the project is on track and that
your proposed work is manageable within the remaining time frame.


#### <a id="M4-deliverable"></a><a class="anchor-link" href="#M4-deliverable">Deliverables</a>

> 1. Presentation slides in `pdf` format committed to your team repository
>    _before_ the presentation.  File location `milestone/4/presentation.pdf`.


### <a id="M5"></a><a class="anchor-link" href="#M5">Final Project Deliverables and Presentation</a>

The final project deliverables are:

> 1. <a href="./project.html#M5-report">Final report</a> written in the
>    form of a project proposal used to request compute hours in a high
>    performance computing center. The report should be committed in `pdf`
>    format to the team repository. File location `milestone/5/report.pdf`.
> 2. Running <a href="./project.html#M5-code">code</a> for parallel
>    application (including sequential baseline) with test cases and necessary
>    input data.  Committed to the team repository (you are free to choose a
>    directory layout of your code base).
> 3. <a href="./project.html#M5-presentation">Final presentation</a> to the
>    teaching staff. The presentation slides should be committed to the team
>    repository in `pdf` format _before_ the presentation. File location
>    `milestone/5/presentation.pdf`.


#### <a id="M5-report"></a><a class="anchor-link" href="#M5-report">Final Report</a>

The final project report is written in the form of a proposal that can be
submitted to a high performance computing center to request compute hours for a
(research) project on one of their supercomputers. The report must be typeset
using [LaTeX](https://en.wikipedia.org/wiki/LaTeX).  A template for
a final report with additional instructions is given in this [`pdf`
file]({attach}./cs205_project_report_template.pdf). The corresponding `tex`
file can be [downloaded here]({attach}./cs205_project_report_template.tex).
A short LaTeX tutorial can be found
[here](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes).  Note
that collaborating with `tex` files that are tracked in a `git` repository can
be troublesome due to different formatting settings of the individual
contributors which will confuse `git` and result in many merge conflicts.  An
alternative to work on the collaborative project report could be
[papeeria.com](https://papeeria.com/landing).


#### <a id="M5-code"></a><a class="anchor-link" href="#M5-code">Project Code</a>

Your final project can be implemented using any of the shared memory models
and/or distributed memory models discussed in class.  You may use additional
parallel programming models if you like.  The project must be implemented using
either `C`, `C++` or `Fortran`.  Your code must be hosted in the team repository
that has been created in the <a href="./project.html#M1">team formation</a>
milestone. Include a README file that describes the code and application files,
and how your program should be run.  You must include detailed instructions on
how to compile and run your code. If we cannot run your application from the
instructions included with your submission, we will not be able to grade this
portion of your project. Your performance results should be reproducible, so you
should provide all the information of the system and the environment needed to
reproduce your tests.  Ideally you include the benchmark scripts you have used
in your repository. Special evaluation data sets and test cases should also be
available in the repository. An appropriate license should be present for the
code.  Complex sections in the code should be commented extensively for
comprehension and suitable software development techniques should be employed
for maintainability of the code base.


#### <a id="M5-presentation"></a><a class="anchor-link" href="#M5-presentation">Final Presentation</a>

You will be given a maximum of 12 minutes to present your final project results
followed by 3 minutes of discussion time. Please prepare a suitable number of
slides (rule of thumb is 1.5 minutes per slide). We will enforce the 12 minute
time limit. _Your presentation should be a minimum of 10 minutes_. Focus the
majority of your presentation on your main contributions and the achieved
parallel performance of your application (node-level performance with roofline,
parallel scaling, I/O performance).  These will be topics that follow up on the
<a href="./project.html#M4">milestone 4 presentation</a>. _In addition, you
should briefly elaborate on future work and what insights you gained while
working on the project and how they can be useful to you in the future_.


## <a id="project-grading"></a><a class="anchor-link" href="#project-grading">Project Grading</a>

The final project grades are dependent on the following criteria:

* Difficulty: Some projects are harder than others. For example, a project based
  off of one of the homework assignments is easier than a completely new
  application.  Adding <a href="./project.html#project-requirements">more
  of the project requirements</a> results in a more difficult project.  For
  example you may or may not choose to implement vectorized compute kernels in
  your project.
* Did you meet your presented goals? An important grading criteria is
  functionality: A running program that produces correct results will always
  garner the majority of available points; no credit will be given for
  non-working programs. A modest solution that works correct will be considered
  of higher value than a very ambitious solution that randomly runs into
  segmentation faults.
* Your report must contain a thorough performance and scaling analysis of your
  application.

The project will be graded on the depth of work undertaken and how results are communicated (report, presentations, documentation in code, clarity):

> |                                                                           | Total Weight |
> |---------------------------------------------------------------------------|--------------|
> | <a href="./project.html#M3">In-class presentation of project proposal</a> | 10%          |
> | <a href="./project.html#M4">In-class presentation of parallel design</a>  | 10%          |
> | <a href="./project.html#M5-presentation">Final project presentation</a>   | 15%          |
> | <a href="./project.html#M5-code">Source code</a>                          | 10%          |
> | <a href="./project.html#M5-report">Section 1 and 2 in final report</a>    | 10%          |
> | <a href="./project.html#M5-report">Section 3 in final report</a>          | 20%          |
> | <a href="./project.html#M5-report">Section 4 in final report</a>          | 20%          |
> | <a href="./project.html#M5-report">Section 5 in final report</a>          | 5%           |

Bonus points may be earned for the correct use and inclusion of advanced
features like:

* Advanced functions of models explained in class (MPI I/O, complex collective
  communications in MPI, NUMA considerations).
* Advanced techniques to hide latencies (overlap of communication and
  computation).
* Use of I/O libraries not covered in class (HDF5, NetCDF).
* Programming models not explained thoroughly in class (CUDA for GPU
  programming, note that we do not have access to GPUs on the academic cluster).


## <a id="project-examples"></a><a class="anchor-link" href="#project-examples">Example Projects</a>

You are encouraged to suggest work on your own research code.  Here are a few
other examples:

* 2D or 3D flow solvers for compressible or incompressible fluids
* Multigrid solver for the Poisson equation
* Particle methods for fluid flows
* Molecular dynamics simulations (N-body problems)
* Astrophysical simulations (N-body problems)
* Protein folding
* Parallel linear algebra (matrix-vector, matrix-matrix products)
* Machine learning applications
* Sampling algorithms
* Data compression algorithms
* Parallel graph algorithms
* Parallel data processing
* Parallel visualization techniques (ray-casting for volume rendering in medical
  image processing, ray-tracing)
