var langs = {
    ar: {
        about: "فريق باكستر, هو فريق ليبي مجتمعي وهو أحد فرق منظمة لايبوتيكس.والمسجل في منظمة 'فيرست' العالمية تحت رقم 1849تأسس في اليوم السابع والعشرون من سبتمبر عام 2020.يتكون الفريق من مجموعة من الشباب أعمارهم بين 12 - 18 يغلب عليهم الحماس والشغف, محبين للعلم والعمل.",
    },

    eng: {
        about: "Baxter team, is a Libyan community team, one of the teams of the Libotics organization. The registered in the international organization “First” under the number 1849, it was established on the twenty-seventh day of September 2020. The team consists of a group of young people between the ages of 12-18 who are dominated by enthusiasm and passion, loving science and work.",
    }
};

if (window.location.hash){
    if (window.location.hash === "#ar"){
        about.textContent = langs.ar.about;
    }

    else if (window.location.hash === "#eng"){
        about.textContent = langs.eng.about;
    }
}

if (window.location.hash){
    if (window.location.hash === "#eng"){
        document.getElementById("about").style.float = 'left';
        document.getElementById("about").style.direction = 'ltr';
    }
}