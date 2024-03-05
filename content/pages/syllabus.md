Title: Syllabus
Slug: syllabus
Date: 2024-01-21
## <a id="cobjective"></a><a class="anchor-link" href="#cobjective">Course Objective</a>

CS205 provides an introduction to parallel programming techniques and
programming models for applications in science, engineering as well as data
science.  The class starts with an overview of parallel "machines" based on
Flynn's taxonomy and then progresses closer to the computer hardware where
various forms of parallelism are identified and discussed through different
programming models and techniques.  The class focuses on shared memory and
distributed memory programming paradigms which are the most useful paradigms
when developing software that is targeted for high performance computing (HPC)
platforms.  CS205 is further concerned about the scaling and performance
analysis of parallel code.  Both of these analyses are important when writing
proposals for compute hours in HPC centers such as the
[Argonne](https://www.anl.gov/) or [Oak Ridge](https://www.olcf.ornl.gov/)
National Labs.  The class will discuss methods for performance analysis on the
node level and methods for parallel scaling analysis on both node and cluster
levels.

### <a id="lobjective"></a><a class="anchor-link" href="#lobjective">Learning Objective</a>

After completing this class, the student is capable of identifying various forms
of parallelism in algorithms and exploit them with appropriate techniques.  The
student will know about methods to analyze the performance and scaling of
parallel programs and knows how to further optimize software such that it can be
deployed on large scale HPC architectures.


## <a id="prerequisites"></a><a class="anchor-link" href="#prerequisites">Prerequisites</a>

The course assumes that the student is comfortable with reading and writing code
in the `C`, `C++` or `Fortran` programming languages. Homework, lab and examples
in class will be presented using `C++`.  Only simple `C++` language features
will be utilized for this class.  If your proficiency is in `C`, you should be
getting along without trouble.  Lecture material for a `C`/`C++` primer class
can be found [here](https://code.harvard.edu/CS205/c_cpp_primer). Familiarity
with Linux command line tools, `ssh`, `git` and tools to edit source code is
assumed. Prerequisite classes include CS50, CS61, CS107, CS161 or AC207.
<!-- TODO: Check c++ primer links  -->

> This class is not suited for first-year students.  CS205 will not teach basics of programming.



## <a id="textbooks"></a><a class="anchor-link" href="#textbooks">Textbooks</a>

The class does not follow a specific textbook. The following textbooks are
suitable for additional reference:
<ul>
<li><em>"Introduction to High Performance
Scientific Computing"</em>,<br>
V. Eijkhout, <a
href="https://web.corral.tacc.utexas.edu/CompEdu/pdf/stc/EijkhoutIntroToHPC.pdf"
target="_blank">free
pdf 3rd edition 2020</a>
</li>
<li><em>"Parallel Programming for Science and Engineering"</em>,<br>
V. Eijkhout, <a
href="https://web.corral.tacc.utexas.edu/CompEdu/pdf/pcse/EijkhoutParallelProgramming.pdf"
target="_blank">free
pdf 2nd edition 2020</a>
</li>
<li><em>"An Introduction to Parallel
Programming"</em>,<br>P. Pacheco, Morgan
Kaufmann 2011</li>
<li><em>"Introduction to High Performance
Computing for Scientists and
Engineers"</em>,<br>
G. Hager and G. Wellein, CRC Press 2011
</li>
<li><em>"Computer Organization and Design"</em>,<br>
D. Patterson and J. Hennessy, Morgan
Kaufmann 2018 (RISC-V edition)
</li>
<li><em>"Computer Architecture"</em>,<br>
J. Hennessy and D. Patterson, Morgan
Kaufmann 2019
</li>
<li><em>"Programming Massively Parallel
Processors"</em>,<br>
D. Kirk and W. Hwu, Morgan
Kaufmann 2017
</li>
</ul><!-- TODO: Check books pdfs  -->

## <a id="course-format"></a><a class="anchor-link" href="#course-format">Course Format</a>
The course contains six main components:

1. **Lectures:** Deliver the main content of the class. <a href="./syllabus.html#attendance-policy">Attendance is required.</a>
2. **Readings:** Accommodate lecture material. The reading assignments are discussed in class.
3. **Quizzes:** Graded asynchronous quizzes.
4. **Labs:** Lab sessions offer practice on topics addressed in class and help support homework assignments.  <a href="./syllabus.html#attendance-policy">Attendance is mandatory.</a>
5. **Homeworks:** Homework assignments deepen the lecture material and include coding exercises (skeleton codes are provided in `C++`).  Exercises may be of theoretical or practical nature, including applications such as simulations based on particle methods or stencil methods on structured grids.
6. **Projects:** The class is accompanied by a project (teams of 4-5 students) to practice the methods learned in class on a real application. Topics are proposed by the teams and may involve research problems of individual team members.


### <a id="homework"></a><a class="anchor-link" href="#homework">Homework</a>

There are **5 homeworks** where each contributes equally to the final grade. The homework is focused on the topics discussed in class and involves programming and theoretical work. Programming tasks may be combined with applications such as particle methods or simple grid based finite difference solvers. Familiarity with such methods is not required and explanations provided in the homework statements should be sufficient to solve the tasks. Coding exercises may be implemented in `C` or `C++`. Note that some coding exercises will include skeleton codes which are written in `C++`. It is expected that answers for assignments involving written or theoretical work are typeset in a LaTeX document. The teaching staff is determined to return solutions and graded assignments with feedback withing one week. It is _your responsibility_ to check the consistency between your graded work and the assignment solution. You have the option to address possible inconsistencies in office hours or request a regrading for the assignment (see the <a href="./syllabus.html#homework-regrade"> homework grading inconsistencies </a> section below). Homework will be released on the [CS205 class repository](https://code.harvard.edu/CS205/main).

> Some of the homework problems must be solved using a remote compute cluster.
> Please keep in mind that when the cluster is under high load with many queued jobs, your submitted job(s) will not execute right away.  Depending on the cluster load, your job may execute only in a couple of hours (resources are limited).  *Make sure you plan ahead.*

#### <a id="homework-submission"></a><a class="anchor-link" href="#homework-submission">Homework Submission</a>
<!-- TODO: Check gradescope links -->
Homework must be submitted on [Gradescope](https://canvas.harvard.edu/courses/128330/external_tools/101445?display=borderless) before the due date. All submissions must be uploaded in a `zip` archive of the corresponding homework handout directory (completed with your solutions) which
is released through the [CS205 class Git repository](https://code.harvard.edu/CS205/main).  Submissions must only contain source code, possible text files and written reports in `pdf` format
(you should give it an intuitive name, e.g. `hw1_solution.pdf`). All your results and visualizations based on computed data that the problem statement is asking for _must be communicated in the written report_ by means of tables, plots or other forms of display *(attached data files are not considered for grading)*. Object files and other binary data generated by compilers must be cleaned out before submission. Other files that were initially included in the handout directory can be left in place.  *Please do not rename any files in the handout.*  **Example:** The homework 1 handout can be found [here](https://code.harvard.edu/CS205/main/tree/master/homework/hw1). To upload your solution to
[Gradescope](https://canvas.harvard.edu/courses/128330/external_tools/101445?display=borderless),
create a `zip` archive of your `hw1` directory with the following contents:
```text
hw1/
├── code
│   └── p4
│       └── openmp_pi.cpp  <-- skeleton code with your solution
├── hw1.pdf
├── hw1_solution.pdf       <-- your solution write-up (new file)
└── README.md
```
Please do not include any LaTeX source code in your submission and remove any unrelated meta data such as `.DS_Store` files or `__MACOSX__` directories.  *Your submission is your signature.*

The homework due date is indicated on the problem sheet and displayed in the <a href="./schedule_static.html">schedule</a>.  Homework submissions will be graded on:

1. **Correctness:** your code must compile, run and should produce the correct result. We are not debugging issues when grading submissions.
2. **Efficiency:**  programs, *especially parallel programs*, can be implemented in various ways. Homework will be graded based on efficient parallel code. Consider two parallel implementations, both generate the correct result but the second implementation performs unnecessary work or redundant communication. The second implementation will not get full marks.
3. **Presentation:** how you present and interpret your results either in a written report or in your code.  Presentation means structure and readability.  If you present a plot you must have the axes labeled correctly (including correct units).  Difficult sections in code should be commented appropriately such that the teaching staff can understand your thought process.  Presentation of results also means that unnecessary or superfluous files like editor backup files or object files left over from  previous compilation should not be included in the submission. Results and data must be presented in the written report, *the teaching staff will not search for this data in other data files submitted with the homework*. It is expected that assignment solutions are typeset in a LaTeX document and submitted as a PDF file.

#### <a id="homework-late"></a><a class="anchor-link" href="#homework-late">Homework Late Days</a>

You have **three late days** at your disposal that you are free to use for *late submissions*. You can use *at most two consecutive late days* for any homework assignment. _**Deadlines on [Gradescope](https://canvas.harvard.edu/courses/128330/external_tools/101445?display=borderless) are enforced**_

The Gradescope submission window is open 2 days past deadline. It is your responsibility not to overdraft your late day budget. **Late submissions are counted by the minute. If you submit 1 minute after the deadline, it will count as one day. If you have consumed all of your late budget: any submission after the assignment deadline will be considered late and charged with a 20 point late penalty.**

Examples:

* If you submit hw1 one day late, and hw4 two days late, no penalty will be applied.
* If you submit hw2 one day late, hw3 one day late, and hw5 one day late, no penalty will be applied.
* If you submit hw2 one day late, hw3 one day late, and hw5 two days late, 20 points will be deducted from hw5.

If you are experiencing health-related issues, contact the teaching staff as soon as possible. Individual cases can be considered.

> Most assignments in this class are due within two weeks.  It is your responsibility to plan your work ahead and submit on time.
>
>**Please note:** the job scheduler on the compute cluster can become busy if there is a large volume of job submissions (i.e. all students try to submit their jobs 3 hours before deadline).  In such situations, a submitted job may not immediately execute.  _This is normal on shared compute resources, **do not leave your work until the last minute!**_


#### <a id="homework-regrade"></a><a class="anchor-link" href="#homework-regrade">Homework Grading Errors</a>

If you believe there is an error in your assignment grading, you can submit a regrade request through [Gradescope](https://canvas.harvard.edu/courses/128330/external_tools/101445?display=borderless).

> **Note:**
>
> 1. The **entire** assignment will be regraded.  _This may cause your total grade go up or down_.
> 2. An assignment can only be **regraded once**.
> 3. Regrade requests are **due within 2 days after the release of the grades**.

### <a id="project"></a><a class="anchor-link" href="#project">Project</a>

Please see the <a href="./project.html">project</a> section for more details.


### <a id="quizzes"></a><a class="anchor-link" href="#quizzes">Quizzes</a>

There are **4 quizzes** which are graded. Each quiz addresses topics _from the lecture material_. Quizzes are open book/`www` and include multiple choice questions with at most back of the envelope calculations.  Quizzes take between 15 to 30 minutes (10-15 questions) and are hosted on Canvas. You cannot use generative models, such as ChatGPT.

> * **Quiz 1: 02-02-2024**, Lecture 1 to 3
> * **Quiz 2: 02-16-2024**, Lecture 4 to 7
> * **Quiz 3: 03-08-2024**, Lecture 9 to 13
> * **Quiz 4: 04-19-2024**, Lecture 15 to 19
>
> Please see the class <a href="./schedule_static.html">schedule</a> as well.

Each quiz will be available on Canvas from 4:00 PM to 9:59 PM on the days previously indicated. *Once the deadline is reached, the quiz will close whether you are taking it or not.* For example, if you start at 9:55 PM, you will only have four minutes to complete the quiz.

### <a id="labs"></a><a class="anchor-link" href="#labs">Labs</a>

The purpose of the CS205 labs is to provide extended practice on important topics discussed in the lecture which also support homework assignments. Practice is the key to learn and deepen these topics. The labs exists because time constraints do not allow for this extended practice during the lecture. Labs will be offered on different weekdays and lead by the teaching fellows of CS205.

Lab sections will be offered through [this spreadsheet](https://docs.google.com/spreadsheets/d/1w9WryKCfZ--RGjEujGyqUGi36t-x5X79A_v0mTyAI64/edit?usp=sharing) where you should choose your preferred section(s) such that we can perform an optimized sectioning given your input. This section should be maintained throughout the semester.
There will be **6 labs** in total. See the <a href="./schedule_static.html">schedule</a> page for more information on lab content and the <a href="./syllabus.html#attendance-policy">attendance policy</a> section below.

<!-- TODO: Fix wording about the definition of completeness and effort. And how the grading will be done.-->
#### <a id="lab-submission"></a><a class="anchor-link" href="#lab-submission">Lab Submission</a>


Lab exercises must be submitted on [Gradescope](https://canvas.harvard.edu/courses/128330/external_tools/101445?display=borderless) before the due date.
Submissions must be uploaded in a `zip` archive of the corresponding lab directory (completed with your solutions) which is released through the [CS205 classrepository](https://code.harvard.edu/CS205/main).  **Submissions must only contain source code and text files. Object files and other binary data generated by compilers must be cleaned out before submission.**  Other binary files that were initially included in the directory can be left in place.  You are not required to write a LaTeX report for labs.  Answers can be provided in markdown files (see problem statement).  Submissions are similar to homework, see the <a href="./syllabus.html#homework-submission">homework submission</a> section for an example.

The lab due date is indicated on the problem sheet and displayed in the <a href="./schedule_static.html">schedule</a>.  Lab submissions will be graded on:

1. **Attendance:** your attendance will be recorded by the TF who leads the lab. Be respectful to others by not being late.
2. **Completion:** lab submissions should show effort that the student attempted to solve the tasks.  If you experience difficulties in a particular problem and you are not able to complete the task, please indicate the issues you had in your code using comments and we will take that reasoning into account. Just handing in an empty lab skeleton (same as hand-out) does not meet the expected standard and will not award credit for submission.
<!-- TODO: lab attendance is expected. If a holiday happens, you have to attend a different section. We will provide additional sections, and even Oh can do. -->

### <a id="reading-assignments"></a><a class="anchor-link" href="#reading-assignments">Reading Assignments</a>

Some lectures have supportive readings assigned (see the <a href="./schedule_static.html">schedule</a>).  Reading these assignments will help you gain a deeper understanding of the material discussed in class, it will introduce you to new terminology and definitions and it will give you some thoughts and ideas to participate in the class discussion. You are expected to read them but it is not necessary that you thoroughly understand everything. You should typically set aside 1-2 hours for a reading assignment.


### <a id="office-hours"></a><a class="anchor-link" href="#office-hours">Office Hours</a>

The teaching staff holds weekly office hours. Office hour times and locations are listed on the class main page. Office hours provide you with an opportunity to review and discuss course materials as well as provide you with further guidance for your homework.


## <a id="attendance-policy"></a><a class="anchor-link" href="#attendance-policy">Attendance Policy</a>

It is expected that when you decide to take CS205 that you also attend the lectures as well as the labs.  These are core parts of the class and therefore expected to attend.

Labs will be held on weekdays that we determine at the beginning of the class according to a best fit of the students' individual schedules for the term. You are encouraged to attend the labs at the assigned lab day. You can attend a lab on a different day due to an unforeseeable event without reporting to the teaching staff.
<!-- TODO: You can go to a different section. TF will take attendance.-->


## <a id="collaboration-policy"></a><a class="anchor-link" href="#collaboration-policy">Collaboration Policy</a>

You are welcome to discuss the course material and homework with others in order to better understand it, but **the work you turn in must be your own (with exception of the project where collaborative work is permitted)**. *Any work that is not your own, without properly citing the original author(s), is considered plagiarism.* Failure to follow the academic integrity and dishonesty guidelines outlined in the [Harvard Student Handbook](https://handbook.college.harvard.edu/) will have an adverse effect on your final grade. The teaching staff will use tools to compute similarity between submitted work.

## <a id="ai-models"></a><a class="anchor-link" href="#ai-models">Use of AI Models</a>
**Purpose of Policy:** This policy outlines the acceptable use of AI models, including but not limited to ChatGPT, in completing assignments for this course.

**Policy Guidelines:**

1. **Original Work:** Students are expected to complete assignments using their original thoughts and interpretations. AI models can be used to help understand concepts, generate ideas, or learn about different perspectives, but they should not write or complete assignments for students.
2. **Collaboration with AI:** Students may use AI models for brainstorming or generating preliminary ideas, but the final work submitted must be substantially their own. Students should be able to explain their reasoning, logic, and conclusions without relying on the model's output.
3. **Restrictions for Specific Assignments:** There may be specific assignments (e.g. quiz part of the midterms) or parts of the course where the use of AI models is entirely prohibited. These restrictions will be clearly stated in the assignment guidelines.
4. **Ethical Considerations:** Students are encouraged to approach the use of AI with ethical considerations in mind, including issues related to privacy, bias, and authenticity.

**Consequences for Non-Compliance:** Failure to adhere to this policy may result in academic penalties as outlined in the course's academic integrity policy.

**Questions and Clarifications:** If students have questions about the appropriate use of AI models in an assignment, they should consult the course instructor or teaching assistants before proceeding.

Please refer to the [University's policy](https://provost.harvard.edu/guidelines-using-chatgpt-and-other-generative-ai-tools-harvard) for further information.

## <a id="accessibility"></a><a class="anchor-link" href="#accessibility">Accessibility</a>
If you have a documented disability (physical or cognitive) that may impair your ability to complete assignments or otherwise participate in the course and satisfy course criteria, please contact the teaching staff or directly the [Disability Access Office](https://dao.fas.harvard.edu/) to receive an DAO letter that will authorize us to help you with corresponding accommodations.


## <a id="diversity-statement"></a><a class="anchor-link" href="#diversity-statement">Diversity Statement</a>

All participants in this class are expected to foster empathy and respect towards each other.  This includes instructors, teaching staff or students.  The motivation to take this course shall be to experience the joy of learning in an environment that allows for a diversity of thoughts, perspectives and experiences and honors your identity including race, gender, class, sexuality, religion, ability, etc.  Any constructive feedback for improving the class environment is welcome and I encourage you to reach out to the instructor or teaching staff with any concerns you may have. If you prefer to speak with someone outside of the course, you may find helpful resources at the [Harvard Office of Diversity and Inclusion](https://diversity.college.harvard.edu/).
