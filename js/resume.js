var resume_data = JSON.parse(window.localStorage.getItem('tempStorage'));
console.log(resume_data);

var firstName = JSON.stringify(resume_data["personalDetails"]["firstName"]);
var lastName = JSON.stringify(resume_data["personalDetails"]["lastName"]);
var fullName = firstName.replace(/\"/g, "") + " " + lastName.replace(/\"/g, "");
document.getElementById('page__title').innerText = fullName;
document.getElementById('fullName').innerText = fullName;

document.getElementById('facebookLink').href = resume_data["socialMedia"]["facebook_link"];
document.getElementById('instagramLink').href = resume_data["socialMedia"]["instagram_link"];
document.getElementById('linkedinLink').href = resume_data["socialMedia"]["linkedin_link"];
document.getElementById('githubLink').href = resume_data["socialMedia"]["github_link"];

document.getElementById('address').innerText = resume_data["contactDetails"]["address"];
document.getElementById('phone').innerText = resume_data["contactDetails"]["phone"];
document.getElementById('email').innerText = resume_data["contactDetails"]["email_id"]

document.getElementById('skill1').innerText = resume_data["professionalAndTechnicalSkills"]["skill1"];
document.getElementById('skill2').innerText = resume_data["professionalAndTechnicalSkills"]["skill2"];
document.getElementById('skill3').innerText = resume_data["professionalAndTechnicalSkills"]["skill3"];
document.getElementById('skill4').innerText = resume_data["professionalAndTechnicalSkills"]["skill4"];
document.getElementById('skill5').innerText = resume_data["professionalAndTechnicalSkills"]["skill5"];

document.getElementById('spokenLanguage1').innerText = resume_data["languages"]["spoken_language1"];
document.getElementById('spokenLanguage2').innerText = resume_data["languages"]["spoken_language2"];

document.getElementById('graduationYear').innerText = resume_data["education"]["graduation"]["graduation_year"];
document.getElementById('graduationCourseName').innerText = resume_data["education"]["graduation"]["graduation_courseName"];
document.getElementById('graduationCollegeName').innerText = resume_data["education"]["graduation"]["graduation_collegeName"];
document.getElementById('graduationScore').innerText = resume_data["education"]["graduation"]["score"];
document.getElementById('intermediateYear').innerText = resume_data["education"]["intermediate"]["intermediate_year"];
document.getElementById('intermediateBoard').innerText = resume_data["education"]["intermediate"]["intermediate_board"];
document.getElementById('intermediateCollegeName').innerText = resume_data["education"]["intermediate"]["intermediate_schoolName"];
document.getElementById('intermediateScore').innerText = resume_data["education"]["intermediate"]["score"];
document.getElementById('hignSchoolYear').innerText = resume_data["education"]["highSchool"]["high_school_year"];
document.getElementById('hignSchoolBoard').innerText = resume_data["education"]["highSchool"]["high_school_board"];
document.getElementById('hignSchoolCollegeName').innerText = resume_data["education"]["highSchool"]["high_school_schoolName"];
document.getElementById('hignSchoolScore').innerText = resume_data["education"]["highSchool"]["score"];