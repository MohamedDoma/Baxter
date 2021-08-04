var langs = {
    ar: {
        who: "نحن مجموعة من الطلاب تتراوح أعمارهم من 12 - 18 سنة يتنافسون في FTC Robotics",
        what: "نقوم بتصميم وبناء وبرمجة الروبوتات للمنافسة في First Tech Challenge",
        design_title: "التصميم",
        design_about: "نستخدم العديد من العمليات لطرح الأفكار وتصميم أجزاء جديدة.",
        building_title: "البناء",
        building_about: "من عجلات الميكانيوم إلى شرائح البثق ، نستخدم العديد من الأجزاء المختلفة لبناء الروبوت.",
        program_title: "البرمجة",
        program_about: "يسمح لنا كتابة الكود في Java باستخدام Android Studio ببرمجة أفضل استقلالية عن بُعد.",
    },

    eng: {
        who: "We are a group of students showing 12-18 years old competing in FTC Robotics",
        what: "We design, build and program robots to compete in the First Tech Challenge",
        design_title: "Design",
        design_about: "We use several processes to brainstorm and design new parts.",
        building_title: "Build",
        building_about: "From mecanum wheels to extrusion slides, we use many different parts to build the robot.",
        program_title: "Program",
        program_about: "Coding in Java using Android Studio allows us to program an optimal autonomous and teleop.",
    }
};

if (window.location.hash){
    if (window.location.hash === "#ar"){
        who.textContent = langs.ar.who;
        what.textContent = langs.ar.what;
        design_title.textContent = langs.ar.design_title;
        design_about.textContent = langs.ar.design_about;
        building_title.textContent = langs.ar.building_title;
        building_about.textContent = langs.ar.building_about;
        program_title.textContent = langs.ar.program_title;
        program_about.textContent = langs.ar.program_about;
    }

    else if (window.location.hash === "#eng"){
        who.textContent = langs.eng.who;
        what.textContent = langs.eng.what;
        design_title.textContent = langs.eng.design_title;
        design_about.textContent = langs.eng.design_about;
        building_title.textContent = langs.eng.building_title;
        building_about.textContent = langs.eng.building_about;
        program_title.textContent = langs.eng.program_title;
        program_about.textContent = langs.eng.program_about;
    }
}

if (window.location.hash){
    if (window.location.hash === "#eng"){
        document.getElementById("who").style.float = 'left';
        document.getElementById("who").style.direction = 'ltr';
        document.getElementById("what").style.float = 'left';
        document.getElementById("what").style.direction = 'ltr';
        document.getElementById("design_title").style.float = 'left';
        document.getElementById("design_title").style.direction = 'ltr';
        document.getElementById("design_about").style.float = 'left';
        document.getElementById("design_about").style.direction = 'ltr';
        document.getElementById("building_title").style.float = 'left';
        document.getElementById("building_title").style.direction = 'ltr';
        document.getElementById("building_about").style.float = 'left';
        document.getElementById("building_about").style.direction = 'ltr';
        document.getElementById("program_title").style.float = 'left';
        document.getElementById("program_title").style.direction = 'ltr';
        document.getElementById("program_about").style.float = 'left';
        document.getElementById("program_about").style.direction = 'ltr';

        var x = window.matchMedia("(max-width: 768px)")
        myFunction(x)
        x.addListener(myFunction)

        function myFunction(x){
            if (x.matches) 
            {
                document.getElementById("design_title").style.marginTop = '-22%';
                document.getElementById("design_about").style.width = '100%';
                document.getElementById("building_title").style.marginTop = '-29%';
                document.getElementById("building_about").style.width = '100%';
                document.getElementById("program_title").style.marginTop = '-28%';
                ocument.getElementById("program_about").style.width = '100%';
            }
            else
            {
                document.getElementById("design_title").style.marginTop = '-42%';
                document.getElementById("design_about").style.width = '70%';
                document.getElementById("building_title").style.marginTop = '-29%';
                document.getElementById("building_about").style.width = '63%';
                document.getElementById("program_title").style.marginTop = '-28%';
                ocument.getElementById("program_about").style.width = '63%';
            }
        }
    }
}