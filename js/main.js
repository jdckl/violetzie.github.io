$(document).ready(function () {
    var svghover = $("#svgbg");
    var svgmain = $("#svgmain");
    var selectedPerson = 0;
    var currentIndex = null;
    var biocolumn = $("#biocolumn");
    var peoplebio = $("#peoplebio");
    var nextbutt = $("#next");
    var prevbutt = $("#prev");
    var peopleMap = {};

    var firstbg = ["#ffed00", "#0458a6", "#f5b4b2", "#8a9224"];
    var random = firstbg[Math.floor(firstbg.length * Math.random())];

    $("#first").css("background", random);

    var people = [
        {
            id: "alexm",
            svg: "alexm.svg",
            name: "ALEX MOREAU",
            bio: "Basically more on paper than screen, this year I decided to focus on digital painting, it’s a way to digitalize my draws. I like to imagine and create characters and use research process as an element of illustration to show how it was developped. So the goal here was to imagine a beginning of an artbook settings, the first draws of possible characters and possible universe, here a bot universe inspired by Sci-Fi movies or Video-games.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: ""
        },
        {
            id: "alicas",
            svg: "alicas.svg",
            bio: "lorem"
        },
        {
            id: "alina",
            svg: "alina.svg",
            bio: "lorem"
        },
        {
            id: "angeld",
            svg: "AngelD.svg",
            bio: "lorem"
        },
        {
            id: "annasun",
            svg: "annasun.svg",
            bio: "lorem"
        },
        {
            id: "annelieseg",
            svg: "anneliseg.svg",
            bio: "lorem"
        },
        {
            id: "antons",
            svg: "antons.svg",
            bio: "lorem"
        },
        {
            id: "daniel",
            svg: "daniel.svg",
            bio: "lorem"
        },
        {
            id: "dominik",
            svg: "dominik.svg",
            bio: "lorem"
        },
        {
            id: "edward",
            svg: "edward.svg",
            bio: "lorem"
        },
        {
            id: "enab",
            svg: "enab.svg",
            bio: "lorem"
        },
        {
            id: "evdokia",
            svg: "Evdokia.svg",
            bio: "lorem"
        },
        {
            id: "gerry",
            svg: "Gerry.svg",
            bio: "lorem"
        },
        {
            id: "giang",
            svg: "giang.svg",
            bio: "lorem"
        },
        {
            id: "huyenn",
            name: "Huyen Nguyen",
            svg: "HuyenN.svg",
            bio: "",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.h.cz"
        },
        {
            id: "isis",
            svg: "isis.svg",
            bio: "lorem"
        },
        {
            id: "jand",
            svg: "JanD.svg",
            name: "JAN DOČEKAL",
            bio: "Ever since I got my first computer I have been interested in using it for graphic design, while also being intrigued by coding. I have continued to develop in both areas and today my biggest strength is being adaptive and versatile when it comes to graphic design, I believe I can succesfuly connect these two areas when expressing my ideas and solving problems.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.jandocekal.cz"
        },
        {
            id: "janr",
            svg: "JanR.svg",
            name: "JAN ROSICKÝ",
            bio: "I am interested in the fusion of design, marketing and psychology. The unifying element of my work is the desire to solve real pressing problems. I am especially interested in advancing user-experience and improving quality of services through design in industries that are not typically known for great design such as healthcare. For me this is very fulfilling and exciting area.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.inventmedical.com"
        },
        {
            id: "juliere",
            svg: "JulieRe.svg",
            bio: "lorem"
        },
        {
            id: "katherinah",
            svg: "katherinah.svg",
            bio: "lorem"
        },
        {
            id: "katet",
            svg: "kateT.svg",
            bio: "lorem"
        },
        {
            id: "Kristyna",
            svg: "Kristyna.svg",
            bio: "lorem"
        },
        {
            id: "marcel",
            svg: "marcel.svg",
            bio: "lorem"
        },
        {
            id: "marketa",
            svg: "marketa.svg",
            bio: "lorem"
        },
        {
            id: "morganr",
            svg: "morganr.svg",
            bio: "lorem"
        },
        {
            id: "OlgaV",
            svg: "OlgaV.svg",
            bio: "lorem"
        },
        {
            id: "ravi",
            svg: "ravi.svg",
            bio: "lorem"
        },
        {
            id: "rosta",
            svg: "rosta.svg",
            bio: "lorem"
        },
        {
            id: "sasha",
            svg: "sasha.svg",
            name: "ALEXANDRA MANUYLOVA",
            bio: "Since childhood I was always interested in art, more into comics but also academic painters. That made a good base for my skills as illustrator. Through illustrations I can tell the story without words - make an emotional impact on viuwer. Im glad I had an opportunity to finalize my skills and find my own style during Prague College study.",
            color: "#0458a6",
            bgcolor: "#ffed00",
            url: "www.shuramora.com"
        },
        {
            id: "Spoony",
            svg: "Spoony.svg",
            name: "HIEU VU MINH",
            bio: "The most interesting aspect of design for me is problem solving. I am interested in UI/UX design which is big area in growth and it tries to solve everyday problems which we have in navigation in digital environment. On the other hand i have this self fulfillment in shooting photographs. This fusion of technical thinking and creative thinking helps me to create great designs.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.vmhieu.com"
        },
        {
            id: "yuan",
            svg: "yuan.svg",
            name: "YOANN MATHIEUX",
            bio: "Inspired by graphic arts since childhood I always liked being able to bring forth any image of our brains, the way of graphic desgin was very logical. My main goal in my work is to express intelligently my mind state on a fundamental theme or more lightweight because for me an artist is not trying to be really understood but simply to express his way of seeing things.",
            color: "#ffffff",
            bgcolor: "#ffed00",
            url: "www.yoannmathieuxpro.wix.com/yoann-mathieux"
        }
    ];

    for (var i = 0; i < people.length; i++) {
        peopleMap[people[i].id] = i;
    }

    function findId(theid) {

        biocolumn.html("");

        currentIndex = peopleMap[theid];

        selectedPerson = people[currentIndex];

        console.log(currentIndex, theid, peopleMap, people);

        var svgbg = selectedPerson.svg;
        var bio = selectedPerson.bio;
        var bgcolor = selectedPerson.bgcolor;
        var fillcolor = selectedPerson.color;
        var url = selectedPerson.url;
        var name = selectedPerson.name;

        var structure = '';
        structure += '<h2 class="bioname">' + name + '</h2>';
        structure += '<p class="biotext">' + bio + '</p>';
        structure += '<a href="http://' + url + '/" class="biourl" target="_blank">' + url + '</a>';
        biocolumn.html(structure);

        if (peoplebio.css('opacity') == '0') {
            peoplebio.css("opacity", 1).css("z-index", 99);
            $.fn.fullpage.setAllowScrolling(false);
        }

        prevbutt.css("background", fillcolor);
        nextbutt.css("background", fillcolor);
        peoplebio.css("background", bgcolor);
        svgmain.attr("data", "svg/" + svgbg + "");

        svgmain.on("load", function () {
            var svgDoc = svgmain.contents();
            var svgfill = $(svgDoc).find("svg");
            $(svgfill).attr("fill", fillcolor).attr("stroke", fillcolor);
            svgmain.off("load");
        });
    }

    function findSVG(theid) {
        for (var i = 0; i < people.length; i++) {
            if (people[i].id == theid) {
                var svgbg = (people[i].svg);
                svghover.attr('data', 'svg/' + svgbg + '');
                var fillcolor = (people[i].color);

                svghover.on("load", function () {
                    var svgDoc = svghover.contents();
                    var svgfill = $(svgDoc).find("svg");
                    $(svgfill).attr("fill", fillcolor).attr("stroke", fillcolor);
                    svghover.off("load");
                });
            }
        }
    }

    nextbutt.click(function () {
        if (currentIndex < people.length - 1) {
            currentIndex = currentIndex + 1;
            findId(people[currentIndex].id);
        }
    });

    prevbutt.click(function () {
        if (currentIndex > 0) {
            currentIndex = currentIndex - 1;
            findId(people[currentIndex].id);
        }
    });

    $("#scrolldown").click(function () {
        $.fn.fullpage.moveSectionDown();
    });

    $("#scrollup").click(function () {
        $.fn.fullpage.moveTo(1, 0);
    });

    $('#main').fullpage({
        fixedElements: '#peoplebio',
        css3: true,
        easingcss3: 'ease-out',
    });

    $("#back").click(function () {
        peoplebio.css("opacity", 0).css("z-index", -99);
        $.fn.fullpage.setAllowScrolling(true);
        biocolumn.html("");
        currentIndex = null;
    });

    $(".personlink").click(function () {
        findId(this.id);
    });

    $(".personlink").hover(
        function () {
            findSVG(this.id);
            $("#hoversvg").stop().fadeIn();
        }, function () {
            $("#hoversvg").stop().fadeOut();
        }
    );

});
