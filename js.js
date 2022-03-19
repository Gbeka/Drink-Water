const glass1 = document.getElementById("little-glass-1");
const glass2 = document.getElementById("little-glass-2");
const glass3 = document.getElementById("little-glass-3");
const glass4 = document.getElementById("little-glass-4");
const glass5 = document.getElementById("little-glass-5");
const glass6 = document.getElementById("little-glass-6");
const glass7 = document.getElementById("little-glass-7");
const glass8 = document.getElementById("little-glass-8");

const remained = document.getElementById("remained");
const percent = document.getElementById("percent");

remained.classList.add("nullL")





glass1.addEventListener("click", function () {

 remained.classList.remove("hide-text");

    glass1.classList.toggle("active");
    percent.classList.toggle("active-1");
    percent.classList.toggle("active-1-bg");
    remained.classList.toggle("active-remained")

    glass2.classList.remove("active")
    glass3.classList.remove("active")
    glass4.classList.remove("active")
    glass5.classList.remove("active")
    glass6.classList.remove("active")
    glass7.classList.remove("active")
    glass8.classList.remove("active")

    percent.classList.remove("active-2");
    percent.classList.remove("active-2-bg");
    remained.classList.remove("active-remained2")


    percent.classList.remove("active-3");
    percent.classList.remove("active-3-bg");
    remained.classList.remove("active-remained3")

    percent.classList.remove("active-4");
    percent.classList.remove("active-4-bg");
    remained.classList.remove("active-remained4")


    percent.classList.remove("active-5");
    percent.classList.remove("active-5-bg");
    remained.classList.remove("active-remained5")


    percent.classList.remove("active-6");
    percent.classList.remove("active-6-bg");
    remained.classList.remove("active-remained6")


    percent.classList.remove("active-7");
    percent.classList.remove("active-7-bg");
    remained.classList.remove("active-remained7")


    percent.classList.remove("active-8");
    percent.classList.remove("active-8-bg");
    remained.classList.remove("active-remained8")


    if(glass1.classList.contains("active")){
        remained.classList.remove("nullL")
    }
    else {
        remained.classList.add("nullL")
    }
      

});




glass2.addEventListener("click", function () {

    if (glass1.classList.contains("active")) {

        glass2.classList.toggle("active");
        percent.classList.toggle("active-2");
        percent.classList.toggle("active-2-bg");
        remained.classList.toggle("active-remained2")

        glass1.classList.add("active");
        glass3.classList.remove("active")
        glass4.classList.remove("active")
        glass5.classList.remove("active")
        glass6.classList.remove("active")
        glass7.classList.remove("active")
        glass8.classList.remove("active")

        remained.classList.remove("hide-text");

        percent.classList.remove("active-3");
        percent.classList.remove("active-3-bg");
        remained.classList.remove("active-remained3")

        percent.classList.remove("active-4");
        percent.classList.remove("active-4-bg");
        remained.classList.remove("active-remained4")


        percent.classList.remove("active-5");
        percent.classList.remove("active-5-bg");
        remained.classList.remove("active-remained5")


        percent.classList.remove("active-6");
        percent.classList.remove("active-6-bg");
        remained.classList.remove("active-remained6")


        percent.classList.remove("active-7");
        percent.classList.remove("active-7-bg");
        remained.classList.remove("active-remained7")


        percent.classList.remove("active-8");
        percent.classList.remove("active-8-bg");
        remained.classList.remove("active-remained8")
    }

});




glass3.addEventListener("click", function () {
    if (glass1.classList.contains("active") && glass2.classList.contains("active")) {


        glass3.classList.toggle("active");
        percent.classList.toggle("active-3");
        percent.classList.toggle("active-3-bg");
        remained.classList.toggle("active-remained3")

        remained.classList.remove("hide-text");

        // glass1.classList.toggle("active");
        // glass2.classList.toggle("active");



        glass4.classList.remove("active")
        glass5.classList.remove("active")
        glass6.classList.remove("active")
        glass7.classList.remove("active")
        glass8.classList.remove("active")

        percent.classList.remove("active-4");
        percent.classList.remove("active-4-bg");
        remained.classList.remove("active-remained4")


        percent.classList.remove("active-5");
        percent.classList.remove("active-5-bg");
        remained.classList.remove("active-remained5")


        percent.classList.remove("active-6");
        percent.classList.remove("active-6-bg");
        remained.classList.remove("active-remained6")


        percent.classList.remove("active-7");
        percent.classList.remove("active-7-bg");
        remained.classList.remove("active-remained7")


        percent.classList.remove("active-8");
        percent.classList.remove("active-8-bg");
        remained.classList.remove("active-remained8")
    }


});





glass4.addEventListener("click", function () {

    if (glass1.classList.contains("active") && glass2.classList.contains("active") && glass3.classList.contains("active")) {

        glass4.classList.toggle("active");
        percent.classList.toggle("active-4");
        percent.classList.toggle("active-4-bg");
        remained.classList.toggle("active-remained4")

        remained.classList.remove("hide-text");

        glass5.classList.remove("active")
        glass6.classList.remove("active")
        glass7.classList.remove("active")
        glass8.classList.remove("active")


        percent.classList.remove("active-5");
        percent.classList.remove("active-5-bg");
        remained.classList.remove("active-remained5")


        percent.classList.remove("active-6");
        percent.classList.remove("active-6-bg");
        remained.classList.remove("active-remained6")


        percent.classList.remove("active-7");
        percent.classList.remove("active-7-bg");
        remained.classList.remove("active-remained7")


        percent.classList.remove("active-8");
        percent.classList.remove("active-8-bg");
        remained.classList.remove("active-remained8")
    }
});

glass5.addEventListener("click", function () {

    if (glass1.classList.contains("active") && glass2.classList.contains("active") && glass3.classList.contains("active") && glass4.classList.contains("active")) {

        glass5.classList.toggle("active");
        percent.classList.toggle("active-5");
        percent.classList.toggle("active-5-bg");
        remained.classList.toggle("active-remained5")

        remained.classList.remove("hide-text");

        glass6.classList.remove("active")
        glass7.classList.remove("active")
        glass8.classList.remove("active")

        percent.classList.remove("active-6");
        percent.classList.remove("active-6-bg");
        remained.classList.remove("active-remained6")


        percent.classList.remove("active-7");
        percent.classList.remove("active-7-bg");
        remained.classList.remove("active-remained7")


        percent.classList.remove("active-8");
        percent.classList.remove("active-8-bg");
        remained.classList.remove("active-remained8")
    }

});

glass6.addEventListener("click", function () {

    if (glass1.classList.contains("active") && glass2.classList.contains("active") && glass3.classList.contains("active") && glass4.classList.contains("active") && glass5.classList.contains("active")) {

        glass6.classList.toggle("active");
        percent.classList.toggle("active-6");
        percent.classList.toggle("active-6-bg");
        remained.classList.toggle("active-remained6")

        remained.classList.remove("hide-text");

        glass7.classList.remove("active")
        glass8.classList.remove("active")

        percent.classList.remove("active-7");
        percent.classList.remove("active-7-bg");
        remained.classList.remove("active-remained7")


        percent.classList.remove("active-8");
        percent.classList.remove("active-8-bg");
        remained.classList.remove("active-remained8")
    }
});

glass7.addEventListener("click", function () {

    if (glass1.classList.contains("active") && glass2.classList.contains("active") && glass3.classList.contains("active") && glass4.classList.contains("active") && glass5.classList.contains("active") && glass6.classList.contains("active")) {

        remained.classList.remove("hide-text");

        glass7.classList.toggle("active");
        percent.classList.toggle("active-7");
        percent.classList.toggle("active-7-bg");
        remained.classList.toggle("active-remained7")


        glass8.classList.remove("active")

        percent.classList.remove("active-8");
        percent.classList.remove("active-8-bg");
        remained.classList.remove("active-remained8")
    }
});

glass8.addEventListener("click", function () {

    if (glass1.classList.contains("active") && glass2.classList.contains("active") && glass3.classList.contains("active") && glass4.classList.contains("active") && glass5.classList.contains("active") && glass6.classList.contains("active") && glass7.classList.contains("active")) {


        glass8.classList.toggle("active");
        percent.classList.toggle("active-8");
        remained.classList.toggle("active-remained8")
        remained.classList.toggle("hide-text")

    }
});




