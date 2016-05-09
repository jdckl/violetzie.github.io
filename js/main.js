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
            color: "#0458a6",
            bgcolor: "#ffed00",
            url: "www.alex85moreau.wix.com/alexcreation"
        },
        {
            id: "alicas",
            svg: "alicas.svg",
            name: "ALICA STRIGL",
            bio: "As a visual communication designer I‘m especially interested in conceptional thinking and multi media approaches. I love to delve deeply into various subjects where I can be a curious observer and explorer time and again. My work deals with the merge of psychological backgrounds and design solutions across digital and physical environments.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.alicastrigl.com"
        },
        {
            id: "alina",
            svg: "alina.svg",
            name: "ALINA SHUPIKOVA",
            bio: "Being a graphic designer does not include being a real grown-up. Visuals are a field to play, a tool to explain things and a way to communicate. And what fuels me in my work is the best said in the words of Saul Bass: I want to make something beautiful today, even in nobody cares.",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.alinadsgn.com"
        },
        {
            id: "angeld",
            svg: "AngelD.svg",
            name: "ANGEL DÍAZ",
            bio: "For me, Graphic design is a bridge that helps me to connect my creativity with the outside world. The possibility of expressing my ideas in a graphic way was what motivated me to be a Graphic Designer. My strengths are in visual communication and corporate identity. My creation capabilities extend also to branding, packaging, illustration and advertising.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.angeldiaz.cz"
        },
        {
            id: "annasun",
            svg: "annasun.svg",
            name: "ANNA BELOUSOVA",
            bio: "Design comes when art is not enough. I find it extremely exciting and mesmerizing how a clever message and visual interpretation of that message can play together and blend into strong concepts and statements that are really capable of making a difference and making people think and even act. When it’s done right, it’s brilliant. And fun!",
            color: "#0458a6",
            bgcolor: "#ffed00",
            url: "www.behance.net/annasun"
        },
        {
            id: "annelieseg",
            svg: "anneliseg.svg",
            name: "ANNE-LISE GROLLEAU",
            bio: "This year in BA Graphic Design allowed me to develop my personnal style of illustration. I create drawings in a simple way, thin black lines mixed with collage which enable me to approach themes that interest me, to express my opinion about it and to spark off a reflection to people. I like to produce provocatives and unsettling illustrations which have a visual and thought impact, that's my manner to show to people how I see our society.",
            color: "#0458a6",
            bgcolor: "#ffed00",
            url: "www.annelise-grolleau.com"
        },
        {
            id: "antons",
            svg: "antons.svg",
            name: "ANTON STUPNEV",
            bio: "I’m trying to apply analytical approach to the designs that I do whether it’s UI/UX project or a digital illustration. For example, I discovered that humour requires same treatment as a complex research, and that is analysis and deconstruction of the design object. And it’s not even nearly boring as it sounds.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.footof.tumblr.com"
        },
        {
            id: "daniel",
            svg: "daniel.svg",
            name: "DANIEL ŠALOUN",
            bio: "I try to put everything I have into all my design. My works are inspired by traditional print design, love for typography and experimentation. I'm always keeping an eye for detail. Nowadays, I find myself slowly shifting from print to the digital environment. Even now, after the Prague College studies, I want to keep constantly educating myself.",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.danielsaloun.com"
        },
        {
            id: "dominik",
            svg: "dominik.svg",
            name: "DOMINIK GAVOR",
            bio: "My name is Dominik Gavor. I am a beginning graphic designer from Prague. I appreciate useful design that makes things more legible and attractive. In the BA year I decided to learn more about type design. As the result I designed a website and print materials that should help graphic designers to find suitable typefaces for their projects and understand principles of type design.",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.dggd.cz"
        },
        {
            id: "edward",
            svg: "edward.svg",
            name: "EDWARD FOSTER",
            bio: "I always loved photography as a passion, but this gave me the chance of going further. Create my exhibition, and show my style in world of photography.",
            color: "#8a9224",
            bgcolor: "#0458a6",
            url: "www.edwardfoster.tumblr.com/"
        },
        {
            id: "enab",
            svg: "enab.svg",
            name: "VERENA BROHL",
            bio: "Everyday we are influenced by visual impressions. They have a great influence on our daily life. Signs guid us our way and poster tell us what's going on. To name just a few. As graphic designers we have the possibility to take part of the visual appearance of our surrounding.",
            color: "#f5b4b2",
            bgcolor: "#ffffff",
            url: "www.cargocollective.com/verenabrohl"
        },
        {
            id: "evdokia",
            svg: "Evdokia.svg",
            name: "EVDOKIA ZAMAKHINA",
            bio: "Since childhood I dreamed to do book illustrations. After graduating from fine art liceum, I realized that narrow specialization obviously is not for me. I wanted more freedom in terms of opportunity. Graphic design is exactly an education, which provides a wide range of abilities and develop not only specific skills, but also a worldview. In my work I always liked the idea of combining several visual languages and styles.",
            color: "#f5b4b2",
            bgcolor: "#ffffff",
            url: "www.hi-evdk.tumblr.com"
        },
        {
            id: "gerry",
            svg: "Gerry.svg",
            name: "GERONIMO LABRADORA",
            bio: "With a background in areas of cultural anthropology as well as intercultural + visual communication, falling into the graphic design industry is an unexpected but fitting ending. After having spent time working in environmental design, packaging design, and advertising, my personal development has become an ever-growing adventure, one that can hopefully lead to fully understanding the abstraction and interpretation of reality through art.",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.geronimoport.com"
        },
        {
            id: "giang",
            svg: "giang.svg",
            name: "GIANG DANG",
            bio: "Since I was a child, I loved drawing and read comic book. At that time, I dreamt that I can be an artist oneday, but I have never believe that I can do it. Then after graduated from high school, I go to university and chose business area to study, but I felt myself not enjoy it, so I quit and then asked myself why not to follow my childhood dream. Then I apply to graphic design, and yes, I know this was what I want. After 4 years studied, I saw myself get better and better, I was trained through each assignments, and knew that what I still missed, what should I develop futher and what I learnt after the assigment. My knowledges and thinking also get better and have a conceptual thinking when I started to solve a problem/assignment. Yes, I have never regretted that choice for graphic design!",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.tragiang1412.wix.com/teag"
        },
        {
            id: "huyenn",
            name: "HUYEN NGUYEN",
            svg: "HuyenN.svg",
            bio: "I love drawing, painting and creative activities since I was a child. The passion grow up with me and I chose study Graphic Design at Prague College. I’m strongly interested in illustration and corporate identity, I know to become an effective designer as my dream is, I have to gain practical skills, and here in Prague College, I have chance to practising, learnt a variety of useful skill. Studying here was a perfect choice for me, I learned a lot during 2 years in HND program and now final year in BA. Now I feel more confident to step into the big world of this field.",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.huyen-n.com"
        },
        {
            id: "isis",
            svg: "isis.svg",
            name: "ISABEL SCHÖPFER",
            bio: "One thing that most impress me about the field graphic design is the challenge to visualize certain topics and make them interesting and understandable for everyone. For that purpose it is important for a designer to be open for any kind of fields and themes. That what I am trying to do in my work as a graphic designer.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.cargocollective.com/IsabelSchoepfer"
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
            svg: "janR.svg",
            name: "JAN ROSICKÝ",
            bio: "I am interested in the fusion of design, marketing and psychology. The unifying element of my work is the desire to solve real pressing problems. I am especially interested in advancing user-experience and improving quality of services through design in industries that are not typically known for great design such as healthcare. For me this is very fulfilling and exciting area.",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.inventmedical.com"
        },
        {
            id: "juliere",
            svg: "JulieRe.svg",
            name: "JULIA REINDL",
            bio: "My latest work tries to use design as an platform for discussion about social, cultural and ethical trends in our society. One goal is to inspire and encourage peoples imagination to flow freely - design as means of speculating how things could be. To do so, I combine classic design principles, with the power of new technologies, to create engaging and relevant solutions.",
            color: "#f5b4b2",
            bgcolor: "#ffffff",
            url: "www.juliereindl.com"
        },
        {
            id: "katherinah",
            svg: "katherinah.svg",
            name: "KATERINA HORKÁ",
            bio: "As a child who would spent hours drawing and creating stuff I remember my excitement of discovering Microsoft Paint. Saving approximately 10 pics a day I made my way to Adobe Photoshop. Since that point I was absolutely sure, what I wanna do when I grow up. After 8 years in the field I am still fascinated by the discipline and I still enjoy taking up on new challenges. Growing up in the age of advertisement and progressive technology-development made me an experienced problem solver and no matter what the task ahead is, I believe it’s always good to think like a designer.",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.katerinah.com"
        },
        {
            id: "katet",
            svg: "kateT.svg",
            name: "KATERINA THEROVÁ",
            bio: "All my life I have been looking for something. Something that I didn’t know anything about. It has taken me a few years to finally realize, that creating things is what really makes me happy. That is why I chose to study graphic design to follow my passion and make world a better place.",
            color: "#0458a6",
            bgcolor: "#ffed00",
            url: "www.katether.com"
        },
        {
            id: "Kristyna",
            svg: "Kristyna.svg",
            name: "KRISTÝNA HAJOŠOVÁ",
            bio: "Graphic design is for me picture in communication. The functional element of my epression is the visual communication, it gaves me the unique opportunity to express various aspects of the written information and thus to move limits of entire design forward. Thanks to combination of hand and computer technics, I would like to revive the identity both current, and newly created brands, and to be able in overall scale fully communicating by visual part of the certain thing.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.khajosova.com"
        },
        {
            id: "marcel",
            svg: "marcel.svg",
            name: "MARCEL LACKO",
            bio: "I'm Marcel. Designer with over 8 years of experience, happy husband and pet lover from Bratislava, Slovakia. I live now in Prague, the capital of Czech Republic. From many other daily routines, my passion stays in User Experience, User Interface Design, Creative and Digital Design thinking. Also I love beign a social stalker trying to search and learn everything about creativity, concepts, technology, innovations and famous companies. I also love to talk about big ad campaigns and start-ups, what reflects together in running a small creative digital agency here in Prague, Creative Bakery.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.marcellacko.com"
        },
        {
            id: "marketa",
            svg: "marketa.svg",
            name: "MARKÉTA JÍCHOVÁ",
            bio: "Since childhood, I have been guided by the artistic direction. I love drawing, painting and creative activities. By choosing a school was not complicated, my parents support mein artistic activities since childhood, and I am gratefulfor that. At high school I studied interior design, thenI studied drawing, painting, illustration and productionof original jewelery. And of course Photography because my creative range is wide, so that I decided to study graphic design at Prague College. It was the best choice for me. Graphic Design I can apply all their artistic and creative skills. And it will help me to full ll all my plans for the future.",
            color: "#8a9224",
            bgcolor: "#0458a6",
            url: "www.marketajichova.com"
        },
        {
            id: "morganr",
            svg: "morganr.svg",
            name: "MORGAN RICHARD",
            bio: "My name is Morgan Richard, I’m beginning my career in graphic design. I love the photography, animation, typography and music. Passionate by the universe and life, I am a dreamer and respectful of the environment. My goal for the future : change our behaviour with respect to animals and nature on Earth.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.morganrichard-portfolio.org"
        },
        {
            id: "OlgaV",
            svg: "OlgaV.svg",
            name: "OLGA VALEVICHUS",
            bio: "It took some time till i realise what i really want to do in my life, i have changed 2 universities and finally found something what i love to do and what i could spend my life by doing it. I like the fact that I’m creating something new and that i can put my inner thoughts and my creativity in it. I believe that graphic design influence our daily lives, we face it every- where, advertisements, food packaging,web design. So being graphic designer it’s not only designing new things it’s also may impact others life in a better way.",
            color: "#8a9224",
            bgcolor: "#f5b4b2",
            url: "www.olgava.com"
        },
        {
            id: "ravi",
            svg: "ravi.svg",
            name: "RAVI SATPUTE",
            bio: "I am Ravi Satpute. I was born and raised in Mumbai, India. Ever since I remember I was fascinated by observing people's body language, how they behave and talk. As a teenager I started to draw my first characters and this became my big passion. I did a diploma course in graphic design in India and worked as a graphic designer at a corporate company. At Prague College I got the chance to develop my drawing skills and find my own style as an illustrator.",
            color: "#0458a6",
            bgcolor: "#ffed00",
            url: "www.ravisatpute.com"
        },
        {
            id: "rosta",
            svg: "rosta.svg",
            name: "ROSTISLAV JIRKAL",
            bio: "Since childhood, I have been interested in drawing and painting. After one year of high school with a focus on applied painting I decided to change direction and I began to study graphic design because I saw it as an opportunity to combine drawing and painting with modern technology which I love too. But above all it was an amazing opportunity to express my ideas and feelings more diverse way, but also to combine and learn new visual techniques, and watch how it affects people. After graduating high school I decided to study at Prague College because I wanted to learn more and expand my possibilities for the future. I believe it was the right choice.",
            color: "#ffffff",
            bgcolor: "#0458a6",
            url: "www.jirkaldesign.cz"
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
            prevbutt.css("left", "1em");
            nextbutt.css("right", "1em");
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

    $("#indicator").click(function () {
        $.fn.fullpage.moveSectionDown();
    });

    $("#indicator.pink").click(function () {
        $.fn.fullpage.moveTo(4, 0);
    });

    $('#main').fullpage({
        fixedElements: '#peoplebio',
        css3: true,
        easingcss3: 'ease-out',
        paddingBottom: '20px',
        scrollOverflow: true
    });

    $("#back").click(function () {
      prevbutt.css("left", "-3em");
      nextbutt.css("right", "-3em");
      peoplebio.css("opacity", 0).css("z-index", -99);

        setTimeout(function() {
          $.fn.fullpage.setAllowScrolling(true);
          biocolumn.html("");
          currentIndex = null;
        }, 500);
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

    peoplebio.on( "swipeleft", swipeleftHandler );
    peoplebio.on( "swiperight", swiperightHandler );

    function swipeleftHandler( event ){
      nextbutt.click();
}

    function swiperightHandler( event ){
      prevbutt.click();
}

});
