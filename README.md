# note-taker-interface

![GitHub license](https://img.shields.io/badge/license-undefined-blue.svg)

# PROJECT TITLE 
README GENERATOR
# TABLE OF CONTENTS 

1. [Project Description](#project-description)
2. [Installation Instructions](#installation)
3. [Usage Information](#usage)
4. [License](#license)
5. [Contributor Guidelines](#contributors)
6. [Test Instructions](#tests)
7. [Questions](#questions)

# DESCRIPTION 

This is a command line application running on NODE JS and takes user input and a generate-site to generate a software engineering team profile. The layout of the team profile generator was key including setting up the folder structure containing all the files, modals, test files for each of the employees, manager, engineer and intern.  The initial js files were class based using parent and child classes and constructor functions to establish the necessary input for the site and exporting this to use for the tests, app.js and the generate-site.js files.  The test files used the describe function to describe the suite of the tests looping through a list of expectations in order to pass the constructor values and getName type of methods.  The tests required the Employee.js file for each type of employee. The tests all passed but had high complexity.

 The app.js required the manager, engineer and intern modals, path, fs, and generate-site.js.  Path was used for output.   Input questions were designed here for the each of the employees, Manager, Intern and Engineer for the placement for each team member in the 'dist' output html.  The user is promted to create employees for a team profile each time node app.js is run.  The Inquirer installation allows the prompts to occur, and the write to file function gets the data from the input exported into a generate-site file which generates the html.  Simalarily, this project was akin to the basic framework for the readme generator, well suited as a template for this project. Template string usage was primary to push the html from user input.  Tests were created prior to the code to make sure the code was sound.  

# INSTALLATION 

NODE JS, INQUIRER, FS file system, Generater, PATH, JEST were used for this exercise.

# USAGE 
General usage for building a software engineering team with a manager, engineers and interns
 
# LICENSE 

Open source license

# CONTRIBUTING 

SOLO PROJECT

# TESTS 

Test files were run for each employee constructor and get methods and fully passed.
 
# QUESTIONS 

My challenges for this project was to get the tests to function correctly, mainly to get file paths and get methods to pass.  It is quite a complex project to get all the files to work together, to have tests pass, and a lot of repetitive work with each of the subclasses.

[TEAM PROFILE GENERATOR](https://github.com/efurness/Team-Profile-Generator.git)


[TEAM PROFILE GENERATOR VIDEO (GOOGLE DRIVE)] (https://drive.google.com/file/d/166zm8ETrcYkzgebIc_Bf5CzmoAyvAl0U/view)
 
[Also on Screencasify:](https://drive.google.com/file/d/166zm8ETrcYkzgebIc_Bf5CzmoAyvAl0U/view)

[Screenshot] Team-Profile-Generator/TeamProfile.png


* For additional help or questions about collaboration, please reach out to Ellen.Furness@du.edu.

* Follow me on Github at [efurness](http://github.com/efurness)

