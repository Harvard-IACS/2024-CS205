Title: Schedule
Slug: schedule_static
Date: 2022-12-10


<!-- 0. Fix column widths to
<colgroup>
<col style="width:8%">
<col style="width:30%">
<col style="width:30%">
<col style="width:12%">
<col style="width:20%">
</colgroup>
-->
<!-- 1. remove page spanning <section> tags and corresponding tables. Make one
        continuous table -->
<!-- 2. set all font-size=100% -->
<!-- Use this command: :%s/font-size:[0-9]\+%/font-size:100%/g -->

Due events are indicated in <span style="color:tomato">red</span> in the column
on the right.  All due events **with a given date are due on 11:59pm that day**.

<!-- Syllabus page 1 {{{2 -->
<table style="width:100%;font-size:100%">
<!-- Table config {{{3 -->

<colgroup>
<col style="width:8%">
<col style="width:30%">
<col style="width:30%">
<col style="width:12%">
<col style="width:20%">
</colgroup>

<thead>
<tr>
<th>Week</th>
<th>Tuesday</th>
<th>Thursday</th>
<th>Labs</th>
<th>Events</th>
</tr>
</thead>
<!-- 3}}} -->
<tbody>
<!-- Week 1 {{{3 -->
<tr style="font-size:100%">
<td><strong style="color:orange">1(4)</strong></td>
<td><strong><em>Lecture 1:</em></strong> <em>2023-01-24</em>
<br>
<ul style="font-size:100%">
<li>Class introduction/organization</li>
<li>Moore's Law</li>
<li>Transistor density and power limit</li>
<li>Parallel computing</li>
<li>Flynn's taxonomy</li>
<li>Overview of parallelism treated in
    class: DLP, ILP, TLP, shared memory
    and distributed memory</li>
</ul>
</td>
<td>
<strong><em>Lecture 2:</em></strong> <em>2023-01-26</em>
<br>
<ul style="font-size:100%">
<li>Computer architecture</li>
<li>von Neumann architecture</li>
<li>Memory pyramid</li>
<li>Linux process anatomy</li>
<li>Introduction to compute cluster:
    access, job submission
</li>
<li><strong><em>Reading:</em></strong> Leiserson paper</li>
</ul>
</td>
<td style="background-color: rgba(101, 123, 131, 0.1);">
<strong><em>Sign-up:</em></strong>
<p
style="margin-top:0;margin-bottom:0;font-size:100%">
Select one of the offered lab session days according to
your schedule
</p>
</td>
<td style="background-color: rgba(154, 205, 50, 0.1);">
<strong><em>Note:</em></strong>
<p
style="margin-top:0;margin-bottom:0;font-size:100%">
The "<strong><em>Reading</em></strong>"
assignments are relevant for the lecture and due <strong><em>on the day
    of the lecture!</em></strong>
Questions may be asked to
individual students.
</p>
<ol style="font-size:100%">
<li><span style="color:tomato">
           Lab section preferences
           submitted on <a
           href="https://my.harvard.edu/"
           target="_blank">my.harvard</a>
           <br>(2023-01-27)
    </span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 2 {{{3 -->
<tr style="font-size:100%">
<td><strong style="color:orange">2(5)</strong></td>
<td><strong><em>Lecture 3:</em></strong> <em>2023-01-31</em>
<br>
<ul style="font-size:100%">
<li>Cache memories: why are they there, how they work</li>
<li>Cache lines and the 3 C's</li>
<li>What is temporal and spatial locality</li>
<li>Cache associativity: fully, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span aria-hidden="true" class="katex-html"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">n</span></span></span></span>-way, direct mapped</li>
<li>Memory access patterns (differences row-major / column-major)</li>
</ul>
</td>
<td><strong><em>Lecture 4:</em></strong> <em>2023-02-02</em>
<br>
<ul style="font-size:100%">
<li>Shared memory introduction</li>
<li>Examples of concurrency and concurrent memory access</li>
<li>Why is shared memory programming
    hard: what is a race condition and why/how does it happen</li>
<li><strong><em style="color:tomato">Quiz 1</em></strong></li>
</ul>
</td>
<td style="background-color: rgba(101, 123, 131, 0.1);">
<strong><em>Lab 1:</em></strong>
<p
style="margin-top:0;margin-bottom:0;font-size:100%">Accessing
cluster, SLURM, Linux, compiler and C++
tutorials.</p>
</td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:yellowgreen">HW1
        release<br>(2023-01-31)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 3 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">3(6)</strong>
</td>
<td><strong><em>Lecture 5:</em></strong> <em>2023-02-07</em>
<br>
<ul style="font-size:100%">
<li>Memory model for shared memory
    programming and its implications on
compilers</li>
<li>Sequential consistency</li>
<li>Mutual exclusion / critical sections / locks</li>
<li>Overview of thread libraries</li>
</ul>
</td>
<td><strong><em>Lecture 6:</em></strong> <em>2023-02-09</em>
<br>
<ul style="font-size:100%">
<li>Introduction to OpenMP: why OpenMP and how to use it in new or existing codes</li>
<li>OpenMP: fork/join parallel regions</li>
<li>OpenMP: work sharing constructs</li>
<li><strong><em>Reading:</em></strong> OpenMP specification 5.1
    Chap. 1 (until 1.4 inclusive)</li>
</ul>
</td>
<td></td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">
        Lab 1
        due<br>(2023-02-10)</span></li>
<li><span style="color:tomato">Project
        team formation 
        due<br>(2023-02-07)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 4 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">4(7)</strong>
</td>
<td><strong><em>Lecture 7:</em></strong> <em>2023-02-14</em>
<br>
<ul style="font-size:100%">
<li>OpenMP: data environment</li>
<li>OpenMP: synchronization constructs</li>
<li>OpenMP: library routines</li>
<li>OpenMP: environment variables</li>
</ul>
</td>
<td><strong><em>Lecture 8:</em></strong> <em>2023-02-16</em>
<br>
<ul style="font-size:100%">
<li>OpenMP: data environment</li>
<li>OpenMP: synchronization constructs</li>
<li>OpenMP: library routines</li>
<li>OpenMP: environment variables</li>
<li><strong><em style="color:tomato">Quiz 2</em></strong></li>
</ul>
</td>
<td style="background-color: rgba(101, 123, 131, 0.1);">
<strong><em>Lab 2:</em></strong>
<p
style="margin-top:0;margin-bottom:0;font-size:100%">
OpenMP locks, critical sections and atomic
clauses.
</p>
</td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">HW1
        due<br>(2023-02-14)</span></li>
<li><span style="color:yellowgreen">HW2
        release<br>(2023-02-14)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 5 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">5(8)</strong>
</td>
<td><strong><em>Lecture 9:</em></strong> <em>2023-02-21</em>
<br>
<ul style="font-size:100%">
<li>UMA/NUMA memory architectures and processor affinity</li>
<li>What is cache coherency and why is it required in shared memory programming</li>
<li>Cache coherency protocols (focus on MESI)</li>
<li>False sharing</li>
</ul>
</td>
<td><strong><em>Lecture 10:</em></strong> <em>2023-02-23</em>
<br>
<ul style="font-size:100%">
<li>Performance analysis (single node)</li>
<li>Relationship of compute performance (flop) to memory bandwidth</li>
<li>Roofline model</li>
<li><strong><em>Reading:</em></strong> Williams paper</li>
</ul>
</td>
<td style="background-color: rgba(101, 123, 131, 0.1);">
<strong><em>Lab 3:</em></strong>
<p
style="margin-top:0;margin-bottom:0;font-size:100%">
False sharing and cache thrashing.
</p>
</td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">
        Lab 2
        due<br>(2023-02-24)</span></li>
<li><span style="color:tomato">Project
        high-level description
        due<br>(2023-02-21)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- 1}}} -->
<!-- Syllabus page 2 {{{2 -->
<!-- Table config {{{3 -->
<!-- Week 6 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">6(9)</strong>
</td>
<td><strong><em>Lecture 11:</em></strong> <em>2023-02-28</em>
<br>
<ul style="font-size:100%">
<li>Introduction to distributed programming (recap Flynn's taxonomy)</li>
<li>What is the Message Passing Interface (MPI)</li>
<li>Simple parallel MPI program example</li>
</ul>
</td>
<td><strong><em>Lecture 12:</em></strong> <em>2023-03-02</em>
<br>
<ul style="font-size:100%">
<li>MPI: blocking point-to-point</li>
<li>MPI: blocking collective</li>
<li><strong><em>Reading:</em></strong>
    MPI 4.0 Standard 3.1, 3.2, 3.4, 3.5</li>
</ul>
</td>
<td></td>
<td></td>
</tr>
<!-- 3}}} -->
<!-- Week 7 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">7(10)</strong>
</td>
<td><strong><em>Lecture 13:</em></strong>
<em>2023-03-07</em>
<br>
<ul style="font-size:100%">
<li>MPI: non-blocking point-to-point</li>
<li>MPI: non-blocking collective</li>
<li><strong><em>Reading:</em></strong>
    MPI 4.0 Standard 3.7, 6.1</li>
</ul>
</td>
<td><strong><em>Lecture 14:</em></strong>
<em>2023-03-09</em>
<br>
<ul style="font-size:100%">
<li>MPI: I/O file management</li>
<li>MPI: I/O read and write routines</li>
<li>Parallel I/O for data compression example</li>
<li><strong><em style="color:tomato">Quiz 3</em></strong></li>
</ul>
</td>
<td style="background-color: rgba(101, 123, 131, 0.1);">
<strong><em>Lab 4:</em></strong>
<p
style="margin-top:0;margin-bottom:0;font-size:100%">
MPI reductions and scans.
</p>
</td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">HW2
        due<br>(2023-03-07)</span></li>
<li><span style="color:yellowgreen">HW3
        release<br>(2023-03-07)</span></li>
<li><span style="color:tomato">
        Lab 3
        due<br>(2023-03-10)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 8 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">8(11)</strong>
</td>
<td style="background-color: rgba(174, 129, 255, 0.1);">
<strong style="color:rgba(174, 129, 255,
1)"><em>Spring break:</em></strong> <em>2023-03-14</em>
</td>
<td style="background-color: rgba(174, 129, 255, 0.1);">
<strong style="color:rgba(174, 129, 255,
1)"><em>Spring break:</em></strong> <em>2023-03-16</em>
</td>
<td></td>
<td>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 9 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">9(12)</strong>
</td>
<td style="background-color: rgba(135, 206, 235, 0.1);">
<strong style="color:skyblue"><em>Presentations for project
    proposals:</em></strong><br>
<em>2023-03-21</em>
</td>
<td style="background-color: rgba(135, 206, 235, 0.1);">
<strong style="color:skyblue"><em>Presentations for project
    proposals:</em></strong><br>
<em>2023-03-23</em>
</td>
<td></td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">
        Lab 4
        due<br>(2023-03-24)</span></li>
<li><span style="color:tomato">Project
        proposals due
    </span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 10 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">10(13)</strong>
</td>
<td><strong><em>Lecture 15:</em></strong> <em>2023-03-28</em>
<br>
<ul style="font-size:100%">
<li>Parallel scaling analysis</li>
<li>Strong scaling / Amdahl's law</li>
<li>Weak scaling</li>
<!-- <li style="color:gray">Hybrid MPI and OpenMP (tentative)</li> -->
<!-- <li style="color:gray">Overhead associated with sending messages (tentative)</li> -->
<!-- <li style="color:gray">Message packing (tentative)</li> -->
</ul>
</td>
<td><strong><em>Lecture 16:</em></strong> <em>2023-03-30</em>
<br>
<ul style="font-size:100%">
<li>Instruction set architecture (ISA) / RISC / CISC</li>
<li>Processor pipelining (ILP)</li>
<li><strong><em>Reading:</em></strong>
    Hennessy and Patterson Turing
    lecture
</li>
</ul>
</td>
<td style="background-color: rgba(101, 123, 131, 0.1);">
<strong><em>Lab 5:</em></strong>
<p
style="margin-top:0;margin-bottom:0;font-size:100%">
Linking your code with third party
libraries.  Examples for BLAS and LAPACK.
</p>
</td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">HW3
        due<br>(2023-03-28)</span></li>
<li><span style="color:yellowgreen">HW4
        release<br>(2023-03-28)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 11 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">11(14)</strong>
</td>
<td><strong><em>Lecture 17:</em></strong> <em>2023-04-04</em>
<br>
<ul style="font-size:100%">
<li>Assembly language (<code>x86-64</code>)</li>
<li>Recap Flynn's taxonomy: SIMD</li>
<li>Instruction set architecture extensions</li>
<li>What is vectorization and why is it important </li>
<li>Floating-point operations in <code>x86-64</code></li>
</ul>
</td>
<td><strong><em>Lecture 18:</em></strong> <em>2023-04-06</em>
<br>
<ul style="font-size:100%">
<li>Memory alignment and relation to cache lines</li>
<li>Manual vectorization</li>
<li>Intel intrinsics</li>
</ul>
</td>
<td></td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">
        Lab 5
        due<br>(2023-04-07)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 12 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">12(15)</strong>
</td>
<td style="background-color: rgba(135, 206, 235, 0.1);">
<strong style="color:skyblue"><em>Presentations for project
    designs:</em></strong><br><em>2023-04-11</em>
</td>
<td style="background-color: rgba(135, 206, 235, 0.1);">
<strong style="color:skyblue"><em>Presentations for project
    designs:</em></strong><br><em>2023-04-13</em>
</td>
<td></td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">Project
        designs due
    </span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 13 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">13(16)</strong>
</td>
<td><strong><em>Lecture 19:</em></strong> <em>2023-04-18</em>
<br>
<ul style="font-size:100%">
<li>Intel intrinsics</li>
<li>Compiler auto vectorization</li>
<li>Examples for vectorization
    and performance impact (DLP in
    roofline)</li>
</ul>
</td>
<td><strong><em>Lecture 20:</em></strong> <em>2023-04-20</em>
<br>
<ul style="font-size:100%">
<li>SPMD programming model</li>
<li>Intel ISPC compiler</li>
<li><strong><em>Reading:</em></strong> Pharr paper</li>
<li><strong><em style="color:tomato">Quiz 4</em></strong></li>
</ul>
</td>
<td style="background-color: rgba(101, 123, 131, 0.1);">
<strong><em>Lab 6:</em></strong>
<p
style="margin-top:0;margin-bottom:0;font-size:100%">
Understanding machine instructions by
learning how to debug code.
</p>
</td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">HW4
        due<br>(2023-04-18)</span></li>
<li><span style="color:yellowgreen">HW5
        release<br>(2023-04-18)</span></li>
</ol>
</td>
</tr>

<!-- Week 14 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">14(17)</strong>
</td>
<td><strong><em>Lecture 21:</em></strong> <em>2023-04-25</em>
<br>
<ul style="font-size:100%">
<li>GPU computing (outlook):
    <ul>
        <li>Streaming processors</li>
        <li>Main difference between CPU and GPU
            architectures</li>
        <li>SIMD and SIMT</li>
        <li>Streaming multiprocessor and
        Little's Law</li>
        <li>Introduction to CUDA</li>
        <li>CUDA warps and threads</li>
    </ul>
</li>
<li>Class summary</li>
</ul>
</td>
<td style="background-color: rgba(0, 128, 128, 0.1);">
<strong style="color:teal"><em>Reading period:</em></strong> <em>2023-04-27</em></td>
<td></td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">HW5
        due<br>(2023-04-30)</span></li>
<li><span style="color:tomato">
        Lab 6
        due<br>(2023-04-28)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- 2}}} -->
<!-- Syllabus page 3 {{{2 -->
<!-- Table config {{{3 -->
<!-- Week 15 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">15(18)</strong>
</td>
<td style="background-color: rgba(0, 128, 128, 0.1);">
<strong style="color:teal"><em>Reading
    period:</em></strong> <em>2023-05-02</em></td>
<td style="background-color: rgba(64, 224, 208, 0.1);">
<strong style="color:turquoise"><em>Exam
    period:</em></strong> <em>2023-05-04</em>
<br>
<ul style="font-size:100%">
<li>Project final presentations:
<ul>
    <li>
        2023-05-04
    </li>
    <li>
        2023-05-05
    </li>
</ul>
</li>
</ul>
</td>
<td></td>
<td>
<br>
<ol style="font-size:100%">
<li><span style="color:tomato">Project
        deliverables due
        <br>(2023-05-04 8:00AM)</span></li>
<li><span style="color:tomato">Project
        final presentations due
        <br>(2023-05-04/05)</span></li>
</ol>
</td>
</tr>
<!-- 3}}} -->
<!-- Week 16 {{{3 -->
<tr style="font-size:100%">
<td>
<strong style="color:orange">16(19)</strong>
</td>
<td style="background-color: rgba(64, 224, 208, 0.1);">
<strong style="color:turquoise"><em>Exam period:</em></strong> <em>2023-05-09</em>
</td>
<td style="background-color: rgba(64, 224, 208, 0.1);">
<strong style="color:turquoise"><em>Exam period:</em></strong> <em>2023-05-11</em>
</td>
<td></td>
<td></td>
</tr>
<!-- 3}}} -->
</table>
<!-- 2}}} -->
