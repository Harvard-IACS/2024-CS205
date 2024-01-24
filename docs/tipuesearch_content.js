var tipuesearch = {"pages":[{"title":"C++ Primer","text":"The C++ primer is hosted on this repository . You will need access to the CS205 organization. To get access follow these instructions .","tags":"pages","url":"pages/cpp_primer.html"},{"title":"Project","text":"Project Objective The CS205 project objective is to apply the techniques learned in class on a concrete real application to gain hands-on experience with writing and optimizing parallel code. Your project should be oriented on a compute intensive problem, either from your research area or something you come up with from scratch (given that it fits into the time frame offered by the class). The final report is written in the form of a proposal that can be submitted to a high performance computing center to request compute hours on a supercomputer used for your project application. The teaching staff is in the role of the HPC admission committee and will evaluate and grade your proposal. You will start with a sequential baseline implementation that serves as the reference benchmark. This benchmark will be used as the reference case for the subsequent implementation that must run in parallel (shared memory, distributed memory or both) and is ideally optimized on the node level. The target platform are the computing resources offered by FASRC . A successful project will present a performance analysis with respect to the reference case and presents results for parallel scaling and throughput. Each project group is responsible for planning and fostering the project progress and to meet the project deadlines outlined in the schedule . Project Requirements Your project should involve the following considerations: You should have a sequential baseline code of your application that you can use as a reference when benchmarking and performance analysis. Demonstrate that there is potential for a parallel implementation of your chosen project application. This may include bottleneck identification and a roofline analysis of the sequential baseline code. Parallelize the problem using the techniques discussed in class. It may either be a non-trivial shared memory code, distributed memory or both paradigms. Additional node-level optimizations may be implemented (vectorization, code fusion to improve instruction-level parallelism) Demonstrate performance (roofline analysis) and parallel scaling (weak and strong scaling) capabilities of the parallel and optimized code. Identify possible limitations and further improvements of the parallel/optimized code. Projects that do include more of the listed items above or incorporate a higher level of difficulty will be weighted accordingly. The only strict requirement is that the project code is implemented using either the C , C++ or Fortran programming languages. Project Milestones There are five milestones for your final project. The deadlines for each milestone are shown in the schedule . Team formation High-level project description In-class presentation of project proposal In-class presentation of parallel design Submission of final project deliverables and final project presentation Note: There is enough time to plan ahead for each project milestone. No extensions will be granted for any milestone. Projects submitted after the final due date will not be graded. Team Formation Students are required to form teams and to partition the work among the team members. The final project must be done in teams with 3-4 members each. You are free to form teams and you can use the class forum to find prospective team members. You may also find and discuss project ideas through the forum. In general, we do not anticipate that the grades for each team member will be different. However, we reserve the right to assign different grades to each group member if it becomes apparent that one of them put in a vastly different amount of effort than the others. Deliverables Report your team members and request a team ID from cs205-staff@g.harvard.edu . Your team ID will be team01 if you are team 1 or team10 if you are team 10 and so on. The project code will be hosted in private repositories in the CS205 organization at code.harvard.edu . Once you have received your team ID from item 1, a member of your team creates a private repository in the CS205 organization named after your team ID (e.g. team01 if you are team 1) and adds its team members to the repository (you do not need to add the teaching staff, we will have access already). High-Level Project Description A short pdf summary that describes your project application and briefly explains which parts of the application you plan to parallelize. This milestone is intended as an orientation for the teaching staff such that we can get an idea of your plans and provide feedback in an early stage of the project. The summary should be at most 1 page in text length. Please use graphs or other visuals if they support your discussion. Things you should consider in your report: What forms of parallelism does your project idea offer? Make sure you have an idea what is the computational bottleneck of your problem and aim to parallelize this part. There might be multiple possibilities that you can propose to attack. How do you plan to exploit this parallelism? Will you focus on shared memory models or distributed memory models or maybe a combination of both? Which machine model do you think you will need for your problem (MIMD, SIMD, or both?) To answer the first part of the previous item you should describe the size of the problem you are planning to work on and provide an estimate of how much memory it will require. From lab 1 you know how much memory there is per node on the compute cluster and based on your memory estimate you should argue whether the chosen size of you problem is reasonable for the given amount of resources we have. If your problem requires to run many simulations to generate data or other means, how long do you estimate a single run will take? Will the solution to your problem depend on a high volume of I/O (input/output)? Deliverables Short pdf summary committed to your team repository. File location milestone/2/hl_summary.pdf . In-class Presentation of Project Proposal Your team needs to present a project proposal that covers the following sections: What problem are you trying to solve with your application? Describe the mathematical model and/or the data for your application in detail. Example questions that could be answered: What are the limitations of the model? In what context do you apply the model? Where does the data come from? How is the data transformed? Justify the effort required to parallelize the application. Why do you need a parallel implementation of this application? Provide a draft of how you plan to parallelize the application. What are the work packages you plan to follow? Will you be targeting a shared memory model, distributed memory model or both? Explain the \"why\" here as well. You will have exactly 6 minutes to present your proposal. You have to prepare about 4 slides for your presentation (rule of thumb is 1.5 minutes per slide). Each of your team member should speak once. The 6 minute time limit will be strictly enforced . This presentation is a chance for you to get feedback. We may suggest modifications if necessary. Our main concern is the amount of effort a given project will require; either too much or too little is unacceptable. Deliverables Presentation slides in pdf format committed to your team repository before the presentation. File location milestone/3/presentation.pdf . In-class Presentation of Parallel Design Your team needs to present the design of your parallel application that covers the following sections: You should have a sequential baseline of your application at this point for which you can present results for a simple test case. Results may be presented using visuals such as simple graphs, contour plots, volume renderings or movies for example. Present a profiling of your sequential baseline to identify the bottlenecks and present a simple roofline analysis of the identified compute kernels. Based on your analysis above propose the forms of parallelism you want to exploit in your application and which parallel programming models you will use. (This may deviate from the draft you presented in the previous presentation .) Elaborate on how you plan to implement the parallel code in terms of logic. What is the sequence of computational steps? Where are synchronization points? Comment on the communication overhead you expect and whether you expect load imbalance issues. Propose methods to hide these latencies. You will have exactly 6 minutes to present your proposal. You have to prepare about 4 slides for your presentation (rule of thumb is 1.5 minutes per slide). Each of your team member should speak once. The 6 minute time limit will be strictly enforced . This is an important milestone/presentation. The identification of parallelism and the methods how you exploit it is very essential for a successful parallel application. A poor design choice may not scale at all or may even run slower than the sequential version in the worst case. This presentation is not a proposal but a design document. You should be concrete and specific rather than abstract and general, and include real performance estimates supported by numbers. It is also a chance for you to get feedback from the teaching staff and to come up with ways around roadblocks you encounter. The presentation is important for the teaching staff such that we can ensure that the project is on track and that your proposed work is manageable within the remaining time frame. Deliverables Presentation slides in pdf format committed to your team repository before the presentation. File location milestone/4/presentation.pdf . Final Project Deliverables and Presentation The final project deliverables are: Final report written in the form of a project proposal used to request compute hours in a high performance computing center. The report should be committed in pdf format to the team repository. File location milestone/5/report.pdf . Running code for parallel application (including sequential baseline) with test cases and necessary input data. Committed to the team repository (you are free to choose a directory layout of your code base). Final presentation to the teaching staff. The presentation slides should be committed to the team repository in pdf format before the presentation. File location milestone/5/presentation.pdf . Final Report The final project report is written in the form of a proposal that can be submitted to a high performance computing center to request compute hours for a (research) project on one of their supercomputers. The report must be typeset using LaTeX . A template for a final report with additional instructions is given in this pdf file . The corresponding tex file can be downloaded here . A short LaTeX tutorial can be found here . Note that collaborating with tex files that are tracked in a git repository can be troublesome due to different formatting settings of the individual contributors which will confuse git and result in many merge conflicts. An alternative to work on the collaborative project report could be papeeria.com . Project Code Your final project can be implemented using any of the shared memory models and/or distributed memory models discussed in class. You may use additional parallel programming models if you like. The project must be implemented using either C , C++ or Fortran . Your code must be hosted in the team repository that has been created in the team formation milestone. Include a README file that describes the code and application files, and how your program should be run. You must include detailed instructions on how to compile and run your code. If we cannot run your application from the instructions included with your submission, we will not be able to grade this portion of your project. Your performance results should be reproducible, so you should provide all the information of the system and the environment needed to reproduce your tests. Ideally you include the benchmark scripts you have used in your repository. Special evaluation data sets and test cases should also be available in the repository. An appropriate license should be present for the code. Complex sections in the code should be commented extensively for comprehension and suitable software development techniques should be employed for maintainability of the code base. Final Presentation You will be given a maximum of 12 minutes to present your final project results followed by 3 minutes of discussion time. Please prepare a suitable number of slides (rule of thumb is 1.5 minutes per slide). We will enforce the 12 minute time limit. Your presentation should be a minimum of 10 minutes . Focus the majority of your presentation on your main contributions and the achieved parallel performance of your application (node-level performance with roofline, parallel scaling, I/O performance). These will be topics that follow up on the milestone 4 presentation . In addition, you should briefly elaborate on future work and what insights you gained while working on the project and how they can be useful to you in the future . Project Grading The final project grades are dependent on the following criteria: Difficulty: Some projects are harder than others. For example, a project based off of one of the homework assignments is easier than a completely new application. Adding more of the project requirements results in a more difficult project. For example you may or may not choose to implement vectorized compute kernels in your project. Did you meet your presented goals? An important grading criteria is functionality: A running program that produces correct results will always garner the majority of available points; no credit will be given for non-working programs. A modest solution that works correct will be considered of higher value than a very ambitious solution that randomly runs into segmentation faults. Your report must contain a thorough performance and scaling analysis of your application. The project will be graded on the depth of work undertaken and how results are communicated (report, presentations, documentation in code, clarity): Total Weight In-class presentation of project proposal 10% In-class presentation of parallel design 10% Final project presentation 15% Source code 10% Section 1 and 2 in final report 10% Section 3 in final report 20% Section 4 in final report 20% Section 5 in final report 5% Bonus points may be earned for the correct use and inclusion of advanced features like: Advanced functions of models explained in class (MPI I/O, complex collective communications in MPI, NUMA considerations). Advanced techniques to hide latencies (overlap of communication and computation). Use of I/O libraries not covered in class (HDF5, NetCDF). Programming models not explained thoroughly in class (CUDA for GPU programming, note that we do not have access to GPUs on the academic cluster). Example Projects You are encouraged to suggest work on your own research code. Here are a few other examples: 2D or 3D flow solvers for compressible or incompressible fluids Multigrid solver for the Poisson equation Particle methods for fluid flows Molecular dynamics simulations (N-body problems) Astrophysical simulations (N-body problems) Protein folding Parallel linear algebra (matrix-vector, matrix-matrix products) Machine learning applications Sampling algorithms Data compression algorithms Parallel graph algorithms Parallel data processing Parallel visualization techniques (ray-casting for volume rendering in medical image processing, ray-tracing)","tags":"pages","url":"pages/project.html"},{"title":"Resources","text":"HUIT Open OnDemand User guide General Useful References Linux Productivity Tools (ORNL) Command Line Reference Cheat Sheet Bash scripting Cheat Sheet Learn LaTeX in 30 Minutes Git Reference Git Book (recommended reading) Git Cheat Sheet Git Atlassian Tutorial GCC Optimization Flags HPC Tutorials Introduction to Parallel Computing (LLNL) Designing and Building Parallel Programs (ANL) The Landscape of Parallel Computing Research: A View from Berkeley C/C++ Slides for a C / C++ Primer C Tutorial C++ Reference C++ Tutorial C++ Cheat Sheet OpenMP OpenMP Specification OpenMP Tutorial (LLNL) OpenMP Examples MPI MPI Specification MPI Tutorial (LLNL) MPI Tutorial (ANL) MPI Tutorial (Wes Kendall) Optimization Intel Intrinsics Guide Windows Users Using Linux Subsystem on Windows 10 PuTTY SSH client for Windows Ubuntu Docker Image with OpenMPI You can get an Ubuntu based Docker container with docker pull iacs/cs205_ubuntu The container is hosted here . The Dockerfile and run_cs205_docker.sh launch script can be found in the class repository .","tags":"Resources","url":"pages/resources.html"},{"title":"Schedule","text":"﻿","tags":"pages","url":"pages/schedule.html"},{"title":"Schedule","text":"Due events are indicated in red in the column on the right. All due events with a given date are due on 09:59pm that day . Week Tuesday Thursday Labs Events 1(4) Lecture 1: 2024-01-23 Class introduction/organization Moore's Law Transistor density and power limit Parallel computing Flynn's taxonomy Overview of parallelism treated in class: DLP, ILP, TLP, shared memory and distributed memory Lecture 2: 2024-01-25 Computer architecture von Neumann architecture Memory pyramid Linux process anatomy Introduction to compute cluster: access, job submissions Reading: Leiserson paper Sign-up: Select one of the offered lab session days according to your schedule Note: The \" Reading \" assignments are relevant for the lecture and due on the day of the lecture! Complete the CS 205: C++ Survey (2024-01-23) Lab section preferences submitted on this spreadsheet (2024-01-26) 2(5) Lecture 3: 2024-01-30 Cache memories: why are they there, how they work Cache lines and the 3 C's What is temporal and spatial locality Cache associativity: fully, n n n -way, direct mapped Memory access patterns (differences row-major / column-major) Lecture 4: 2024-02-01 Shared memory introduction Examples of concurrency and concurrent memory access Why is shared memory programming hard: what is a race condition and why/how does it happen Lab 1: Accessing cluster, SLURM, Linux, compiler and C++ tutorials. Quiz 1 (2024-02-02) HW1 release (2024-01-30)","tags":"pages","url":"pages/schedule_static.html"},{"title":"Syllabus","text":"Course Objective CS205 provides an introduction to parallel programming techniques and programming models for applications in science, engineering as well as data science. The class starts with an overview of parallel \"machines\" based on Flynn's taxonomy and then progresses closer to the computer hardware where various forms of parallelism are identified and discussed through different programming models and techniques. The class focuses on shared memory and distributed memory programming paradigms which are the most useful paradigms when developing software that is targeted for high performance computing (HPC) platforms. CS205 is further concerned about the scaling and performance analysis of parallel code. Both of these analyses are important when writing proposals for compute hours in HPC centers such as the Argonne or Oak Ridge National Labs. The class will discuss methods for performance analysis on the node level and methods for parallel scaling analysis on both node and cluster levels. Learning Objective After completing this class, the student is capable of identifying various forms of parallelism in algorithms and exploit them with appropriate techniques. The student will know about methods to analyze the performance and scaling of parallel programs and knows how to further optimize software such that it can be deployed on large scale HPC architectures. Prerequisites The course assumes that the student is comfortable with reading and writing code in the C , C++ or Fortran programming languages. Homework, lab and examples in class will be presented using C++ . Only simple C++ language features will be utilized for this class. If your proficiency is in C , you should be getting along without trouble. Lecture material for a C / C++ primer class can be found here . Familiarity with Linux command line tools, ssh , git and tools to edit source code is assumed. Prerequisite classes include CS50, CS61, CS107, CS161 or AC207. This class is not suited for first-year students. CS205 will not teach basics of programming. Textbooks The class does not follow a specific textbook. The following textbooks are suitable for additional reference: \"Introduction to High Performance Scientific Computing\" , V. Eijkhout, free pdf 3rd edition 2020 \"Parallel Programming for Science and Engineering\" , V. Eijkhout, free pdf 2nd edition 2020 \"An Introduction to Parallel Programming\" , P. Pacheco, Morgan Kaufmann 2011 \"Introduction to High Performance Computing for Scientists and Engineers\" , G. Hager and G. Wellein, CRC Press 2011 \"Computer Organization and Design\" , D. Patterson and J. Hennessy, Morgan Kaufmann 2018 (RISC-V edition) \"Computer Architecture\" , J. Hennessy and D. Patterson, Morgan Kaufmann 2019 \"Programming Massively Parallel Processors\" , D. Kirk and W. Hwu, Morgan Kaufmann 2017 Course Format The course contains six main components: Lectures: Deliver the main content of the class. Attendance is required. Readings: Accommodate lecture material. The reading assignments are discussed in class. Quizzes: Graded asynchronous quizzes. Labs: Lab sessions offer practice on topics addressed in class and help support homework assignments. Attendance is mandatory. Homeworks: Homework assignments deepen the lecture material and include coding exercises (skeleton codes are provided in C++ ). Exercises may be of theoretical or practical nature, including applications such as simulations based on particle methods or stencil methods on structured grids. Projects: The class is accompanied by a project (teams of 3-4 students) to practice the methods learned in class on a real application. Topics are proposed by the teams and may involve research problems of individual team members. Homework There are 5 homeworks where each contributes equally to the final grade. The homework is focused on the topics discussed in class and involves programming and theoretical work. Programming tasks may be combined with applications such as particle methods or simple grid based finite difference solvers. Familiarity with such methods is not required and explanations provided in the homework statements should be sufficient to solve the tasks. Coding exercises may be implemented in C or C++ . Note that some coding exercises will include skeleton codes which are written in C++ . It is expected that answers for assignments involving written or theoretical work are typeset in a LaTeX document. The teaching staff is determined to return solutions and graded assignments with feedback withing one week. It is your responsibility to check the consistency between your graded work and the assignment solution. You have the option to address possible inconsistencies in office hours or request a regrading for the assignment (see the homework grading inconsistencies section below). Homework will be released on the CS205 class repository . Some of the homework problems must be solved using a remote compute cluster. Please keep in mind that when the cluster is under high load with many queued jobs, your submitted job(s) will not execute right away. Depending on the cluster load, your job may execute only in a couple of hours (resources are limited). Make sure you plan ahead. Homework Submission Homework must be submitted on Gradescope before the due date. All submissions must be uploaded in a zip archive of the corresponding homework handout directory (completed with your solutions) which is released through the CS205 class Git repository . Submissions must only contain source code, possible text files and written reports in pdf format (you should give it an intuitive name, e.g. hw1_solution.pdf ). All your results and visualizations based on computed data that the problem statement is asking for must be communicated in the written report by means of tables, plots or other forms of display (attached data files are not considered for grading) . Object files and other binary data generated by compilers must be cleaned out before submission. Other files that were initially included in the handout directory can be left in place. Please do not rename any files in the handout. Example: The homework 1 handout can be found here . To upload your solution to Gradescope , create a zip archive of your hw1 directory with the following contents: hw1/ ├── code │ └── p4 │ └── openmp_pi.cpp <-- skeleton code with your solution ├── hw1.pdf ├── hw1_solution.pdf <-- your solution write-up (new file) └── README.md Please do not include any LaTeX source code in your submission and remove any unrelated meta data such as .DS_Store files or __MACOSX__ directories. Your submission is your signature. The homework due date is indicated on the problem sheet and displayed in the schedule . Homework submissions will be graded on: Correctness: your code must compile, run and should produce the correct result. We are not debugging issues when grading submissions. Efficiency: programs, especially parallel programs , can be implemented in various ways. Homework will be graded based on efficient parallel code. Consider two parallel implementations, both generate the correct result but the second implementation performs unnecessary work or redundant communication. The second implementation will not get full marks. Presentation: how you present and interpret your results either in a written report or in your code. Presentation means structure and readability. If you present a plot you must have the axes labeled correctly (including correct units). Difficult sections in code should be commented appropriately such that the teaching staff can understand your thought process. Presentation of results also means that unnecessary or superfluous files like editor backup files or object files left over from previous compilation should not be included in the submission. Results and data must be presented in the written report, the teaching staff will not search for this data in other data files submitted with the homework . It is expected that assignment solutions are typeset in a LaTeX document and submitted as a PDF file. Homework Late Days You have three late days at your disposal that you are free to use for late submissions . You can use at most two consecutive late days for any homework assignment. Deadlines on Gradescope are enforced The Gradescope submission window is open 2 days past deadline. It is your responsibility not to overdraft your late day budget. Late submissions are counted by the minute. If you submit 1 minute after the deadline, it will count as one day. If you have consumed all of your late budget: any submission after the assignment deadline will be considered late and charged with a 20 point late penalty. Examples: If you submit hw1 one day late, and hw4 two days late, no penalty will be applied. If you submit hw2 one day late, hw3 one day late, and hw5 one day late, no penalty will be applied. If you submit hw2 one day late, hw3 one day late, and hw5 two days late, 20 points will be deducted from hw5. If you are experiencing health-related issues, contact the teaching staff as soon as possible. Individual cases can be considered. Most assignments in this class are due within two weeks. It is your responsibility to plan your work ahead and submit on time. Please note: the job scheduler on the compute cluster can become busy if there is a large volume of job submissions (i.e. all students try to submit their jobs 3 hours before deadline). In such situations, a submitted job may not immediately execute. This is normal on shared compute resources, do not leave your work until the last minute! Homework Grading Errors If you believe there is an error in your assignment grading, you can submit a regrade request through Gradescope . Note: The entire assignment will be regraded. This may cause your total grade go up or down . An assignment can only be regraded once . Regrade requests are due within 2 days after the release of the grades . Project Please see the project section for more details. Quizzes There are 4 quizzes which are graded. Each quiz addresses topics from the lecture material . Quizzes are open book/ www and include multiple choice questions with at most back of the envelope calculations. Quizzes take between 15 to 30 minutes (10-15 questions) and are hosted on Canvas. You cannot use generative models, such as ChatGPT. Quiz 1: 02-02-2024 , Lecture 1 to 3 Quiz 2: TBD , Lecture 4 to 7 Quiz 3: TBD , Lecture 9 to 13 Quiz 4: TBD , Lecture 15 to 19 Please see the class schedule as well. Each quiz will be available on Canvas from 4:00 PM to 9:59 PM on the days previously indicated. Once the deadline is reached, the quiz will close whether you are taking it or not. For example, if you start at 9:55 PM, you will only have four minutes to complete the quiz. Labs The purpose of the CS205 labs is to provide extended practice on important topics discussed in the lecture which also support homework assignments. Practice is the key to learn and deepen these topics. The labs exists because time constraints do not allow for this extended practice during the lecture. Labs will be offered on different weekdays and lead by the teaching fellows of CS205. Lab sections will be offered through this spreadsheet where you should choose your preferred section(s) such that we can perform an optimized sectioning given your input. This section should be maintained throughout the semester. There will be 6 labs in total. See the schedule page for more information on lab content and the attendance policy section below. Lab Submission Lab exercises must be submitted on Gradescope before the due date. Submissions must be uploaded in a zip archive of the corresponding lab directory (completed with your solutions) which is released through the CS205 classrepository . Submissions must only contain source code and text files. Object files and other binary data generated by compilers must be cleaned out before submission. Other binary files that were initially included in the directory can be left in place. You are not required to write a LaTeX report for labs. Answers can be provided in markdown files (see problem statement). Submissions are similar to homework, see the homework submission section for an example. The lab due date is indicated on the problem sheet and displayed in the schedule . Lab submissions will be graded on: Attendance: your attendance will be recorded by the TF who leads the lab. Be respectful to others by not being late. Completion: lab submissions should show effort that the student attempted to solve the tasks. If you experience difficulties in a particular problem and you are not able to complete the task, please indicate the issues you had in your code using comments and we will take that reasoning into account. Just handing in an empty lab skeleton (same as hand-out) does not meet the expected standard and will not award credit for submission. Reading Assignments Some lectures have supportive readings assigned (see the schedule ). Reading these assignments will help you gain a deeper understanding of the material discussed in class, it will introduce you to new terminology and definitions and it will give you some thoughts and ideas to participate in the class discussion. You are expected to read them but it is not necessary that you thoroughly understand everything. You should typically set aside 1-2 hours for a reading assignment. Office Hours The teaching staff holds weekly office hours. Office hour times and locations are listed on the class main page. Office hours provide you with an opportunity to review and discuss course materials as well as provide you with further guidance for your homework. Attendance Policy It is expected that when you decide to take CS205 that you also attend the lectures as well as the labs. These are core parts of the class and therefore expected to attend. Labs will be held on weekdays that we determine at the beginning of the class according to a best fit of the students' individual schedules for the term. You are encouraged to attend the labs at the assigned lab day. You can attend a lab on a different day due to an unforeseeable event without reporting to the teaching staff. Collaboration Policy You are welcome to discuss the course material and homework with others in order to better understand it, but the work you turn in must be your own (with exception of the project where collaborative work is permitted) . Any work that is not your own, without properly citing the original author(s), is considered plagiarism. Failure to follow the academic integrity and dishonesty guidelines outlined in the Harvard Student Handbook will have an adverse effect on your final grade. The teaching staff will use tools to compute similarity between submitted work. Use of AI Models Purpose of Policy: This policy outlines the acceptable use of AI models, including but not limited to ChatGPT, in completing assignments for this course. Policy Guidelines: Original Work: Students are expected to complete assignments using their original thoughts and interpretations. AI models can be used to help understand concepts, generate ideas, or learn about different perspectives, but they should not write or complete assignments for students. Collaboration with AI: Students may use AI models for brainstorming or generating preliminary ideas, but the final work submitted must be substantially their own. Students should be able to explain their reasoning, logic, and conclusions without relying on the model's output. Restrictions for Specific Assignments: There may be specific assignments (e.g. quiz part of the midterms) or parts of the course where the use of AI models is entirely prohibited. These restrictions will be clearly stated in the assignment guidelines. Ethical Considerations: Students are encouraged to approach the use of AI with ethical considerations in mind, including issues related to privacy, bias, and authenticity. Consequences for Non-Compliance: Failure to adhere to this policy may result in academic penalties as outlined in the course's academic integrity policy. Questions and Clarifications: If students have questions about the appropriate use of AI models in an assignment, they should consult the course instructor or teaching assistants before proceeding. Please refer to the University's policy for further information. Accessibility If you have a documented disability (physical or cognitive) that may impair your ability to complete assignments or otherwise participate in the course and satisfy course criteria, please contact the teaching staff or directly the Disability Access Office to receive an DAO letter that will authorize us to help you with corresponding accommodations. Diversity Statement All participants in this class are expected to foster empathy and respect towards each other. This includes instructors, teaching staff or students. The motivation to take this course shall be to experience the joy of learning in an environment that allows for a diversity of thoughts, perspectives and experiences and honors your identity including race, gender, class, sexuality, religion, ability, etc. Any constructive feedback for improving the class environment is welcome and I encourage you to reach out to the instructor or teaching staff with any concerns you may have. If you prefer to speak with someone outside of the course, you may find helpful resources at the Harvard Office of Diversity and Inclusion .","tags":"pages","url":"pages/syllabus.html"},{"title":"High Performance Computing for Science and Engineering","text":"With manufacturing processes reaching the limits in terms of transistor density on today's computing architectures, efficient utilization of computing resources must exploit parallel execution to maintain scaling. The use of computers in academia, industry and society is a fundamental tool for solving (scientific) problems while the \"think parallel\" mindset of code developers is still lagging behind. The aim of CS205 is to introduce the student to the fundamentals of parallel programming and its relationship on computer architectures. Various forms of parallelism are discussed and exploited through different programming models with focus on shared and distributed memory programming. The class syllabus can be found by following this link. Teaching Staff Instructors Boris Kozinsky ( bkoz@g.harvard.edu ) Office: Pierce Hall 030 Office Hours: Ignacio Becker Troncoso ( iebecker@g.harvard.edu ) Office: SEC 1.312-05 Office Hours: Teaching Fellows Fellow Email Office Hours Lab Section Yixian Gan ygan@g.harvard.edu TBD TBD Tanner Marsh tam997@g.harvard.edu TBD TBD Vlad Cainamisir vcainamisir@college.harvard.edu TBD TBD Hongyi Sun hongyi_sun@fas.harvard.edu TBD TBD Aadit Saluja aaditsaluja@college.harvard.edu TBD TBD Sree Harsha Tanneru sreeharshatanneru@g.harvard.edu TBD TBD Matthew Shum mshum@college.harvard.edu TBD TBD SEC is the Science and Engineering Complex in Allston and MD is the MaxwellDworkin building in Cambridge. Office Hours: TBD Labs: Lab times signup sheet. Lecture Hours All lectures are of 75 minutes duration. Time is given in Eastern Standard Time (Boston). Lecture attendance is expected : Time Room Tuesday 2:15 PM - 3:30 PM SEC 1.321 Thursday 2:15 PM - 3:30 PM SEC 1.321 Important Information Canvas: Is used for posting grades and other class sensitive content: https://canvas.harvard.edu/courses/128330 Gradescope: Is used for homework and lab submissions: https://canvas.harvard.edu/courses/128330/external_tools/101445?display=borderless Class Git repository: The handouts in CS205 are provided through the main repository hosted in the CS205 organization at https://code.harvard.edu/CS205/main_2024 . You can clone this repository once you have joined the CS205 organization git clone git@code.harvard.edu:CS205/main_2024.git You can request membership in the CS205 organization by filling out this form (using your .harvard.edu email). You must include your NetID , which is also your https://code.harvard.edu username (something similar to abc123 ). Make sure you log in to https://code.harvard.edu/ before submitting your NetID. Class Discussion We will use the Ed Discussion forum on our Canvas page as our main communication platform. Questions regarding homework, labs or lecture material must be posted on this forum and you are encouraged to reply to questions if you know the answer or you can share a useful contribution. A Slack channel will also be provided. It can be accessed on the Slack option on the left menu of Canvas.","tags":"pages","url":"pages/high-performance-computing-for-science-and-engineering/"},{"title":"Lecture 0","text":"Lecture 0","tags":"Lectures","url":"lectures/lecture0/"}]}