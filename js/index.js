var resume_details=[];
const detail_form = document.getElementById('resume_details_form');

detail_form.addEventListener('submit',event => {
    event.preventDefault();
    window.alert("form submitted successfully");
    var firstName=document.getElementById('firstName').value;
    var lastName=document.getElementById('lastName').value;
    var email_id=document.getElementById('email_id').value;
    var phone=document.getElementById('phone').value;
    var address=document.getElementById('address').value;
    var facebook_link=document.getElementById('facebook_link').value;
    var instagram_link=document.getElementById('instagram_link').value;
    var linkedin_link=document.getElementById('linkedin_link').value;
    var github_link=document.getElementById('github_link').value;
    var spoken_language1=document.getElementById('spoken_language1').value;
    var spoken_language2=document.getElementById('spoken_language2').value;
    var project1=document.getElementById('project1').value;
    var project2=document.getElementById('project2').value;
    var hobby1 = document.getElementById('hobby1').value;
    var hobby2 = document.getElementById('hobby2').value;
    var hobby3 = document.getElementById('hobby3').value;
    var hobby4 = document.getElementById('hobby4').value;
    var skill1=document.getElementById('skill1').value;
    var skill2=document.getElementById('skill2').value;
    var skill3=document.getElementById('skill3').value;
    var skill4=document.getElementById('skill4').value;
    var skill5=document.getElementById('skill5').value;
    var high_school=document.getElementById('high_school').value;
    var high_school_year=document.getElementById('high_school_year').value;
    var high_school_board=document.getElementById('high_school_board').value;
    var high_school_schoolName=document.getElementById('high_school_schoolName').value;
    var intermediate=document.getElementById('intermediate').value;
    var intermediate_year=document.getElementById('intermediate_year').value;
    var intermediate_board=document.getElementById('intermediate_board').value;
    var intermediate_schoolName=document.getElementById('intermediate_schoolName').value;
    var graduation=document.getElementById('graduation').value;
    var graduation_year=document.getElementById('graduation_year').value;
    var graduation_collegeName=document.getElementById('graduation_collegeName').value; 
    var graduation_courseName=document.getElementById('graduation_courseName').value;
    var experience1=document.getElementById('experience1').value;
    var experience2=document.getElementById('experience2').value;

    resume_details = {
        "personalDetails":{
            firstName:firstName,
            lastName:lastName
        },
        "contactDetails":{
            email_id:email_id,
            phone:phone,
            address:address
        },
        "socialMedia":{
            facebook_link:facebook_link,
            instagram_link:instagram_link,
            linkedin_link:linkedin_link,
            github_link:github_link
        },
        "languages":{
            spoken_language1:spoken_language1,
            spoken_language2:spoken_language2
        },
        "projects":{
            project1:project1,
            project2:project2
        },
        "hobbies":{
            hobby1:hobby1,
            hobby2:hobby2,
            hobby3:hobby3,
            hobby4:hobby4
        },
        "professionalAndTechnicalSkills":{
            skill1:skill1,
            skill2:skill2,
            skill3:skill3,
            skill4:skill4,
            skill5:skill5,
        },
        "education":{
            "highSchool":{
                score:high_school,
                high_school_year:high_school_year,
                high_school_board:high_school_board,
                high_school_schoolName:high_school_schoolName
            },
            "intermediate":{
                score:intermediate,
                intermediate_year:intermediate_year,
                intermediate_board:intermediate_board,
                intermediate_schoolName:intermediate_schoolName
            },
            "graduation":{
                score:graduation,
                graduation_year:graduation_year,
                graduation_collegeName:graduation_collegeName,
                graduation_courseName:graduation_courseName
            }
        },
        "experience":{
            experience1:experience1,
            experience2:experience2
        }
    }
    

    localStorage.setItem('tempStorage',JSON.stringify(resume_details));
    var localResumeDetails=JSON.parse(localStorage.getItem('tempStorage'));
    console.log(localResumeDetails);
    location.replace("resume.html")
});