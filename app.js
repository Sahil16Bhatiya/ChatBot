$(function () {
    var smsg = "Hi";
    $("#form").submit(function () {
      $("#msend").trigger("click");
      return false;
    });
    var k = "";
    var d = new Date();
    var h = d.getHours();
    var t = d.getMinutes();
    t = t - 2;
    10 > h ? h = "0" + h : h = h;
    10 > t ? t = "0" + t : t = t;
    12 > h ? time = h + ":" + t + " am" : time = (h) + ":" + t + " pm";
    $(".status").html("last seen today at " + time);
    var lastmsg = ""; var tick = "<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
    $(".tick").html(tick);

    $(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");
    $("#msend").click(function () {
      eval(String.fromCharCode(102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 111, 110, 118, 101, 114, 116, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 60, 47, 103, 44, 34, 38, 108, 116, 59, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 62, 47, 103, 44, 34, 38, 103, 116, 59, 34, 41, 125));
      var a = "";
      var scroll = ($(".conversation-container").scrollTop()) + 1550;
      var d = new Date();
      var h = d.getHours();
      var t = d.getMinutes();
      10 > h ? h = "0" + h : h = h;
      10 > t ? t = "0" + t : t = t;
      12 > h ? time = h + ":" + t + " am" : time = (h - 12) + ":" + t + " pm";
      var msg = $("#val").val().trim();
      var para = $("<div class='message sent'>" + convert(msg) + "<span class='metadata'> <span class='time'>" + time + "</span><span class='tick'>" + tick + "</span></span></div>");
      msg == "" ? $("#val").focus() : ($("#ap").append(para), $(".status").css("margin-left", "0"),
        $("#form")[0].reset(), setTimeout(function () { $(".status").html("online ") }, 900), setTimeout(function () { $(".status").html("typing... ") }, 1000), lastmsg = msg.toUpperCase().trim(), $(".conversation-container").scrollTop(scroll), send());
    });
    function send() {
      var sr = lastmsg.split(" ");
      var search = "";
      scroll = ($(".conversation-container").scrollTop()) + 155065;
      for (x = 0; x < sr.length; x++) {
        search += sr[x] + "+";

      }
      var a = "";
      var pq = ["Really?", " Okay", "Really? "];
      var p = pq[Math.floor(Math.random() * 3)];
      var d = new Date();
      var h = d.getHours();
      var t = d.getMinutes();
      10 > h ? h = "0" + h : h = h;
      10 > t ? t = "0" + t : t = t;
      12 > h ? time = h + ":" + t + " am" : time = (h - 12) + ":" + t + " pm";
      var hello = ["HELLO", "HI", "HELLO SA", "HEY THERE", "HEY", "HI DUDE", "HI SA", "HELLO Jarvis", "HI Serhat", "HLO", "MRB", "H"];
      var coin = ["FLIP A COIN"];
      var gm = ["GM", "GOOD MORNING", "GOOD MORNING JARVIS", "GOOD MORNING SA", "GOOD M", "G MORNING", "GOOD MORNING BABES"];

      var goo = ["WHAT IS GOOGLE"];
      var bad = ["BAD", "NOT BAD", "USELESS", "NOT WORKING", "NOT GOOD"];
      var ge = ["GOOD EVNG", "GOOD EVENING", "GOOD EVENING Jarvis", "GOOD EVENING DC", "GOOD EVENING BABES"];
      var gn = ["GOON NIGHT", "I'M FEELING SLEEPY"];
      var welcome = ["NICE WORKING", "NICE CODE", "NICE", "WOW", "WOW IT'S WORKING", "GREAT CODE", "AWESOME CODE", "IT'S NICE", "AWESOME CODE BRO", "IT'S GOOD", "OH MY GOD", "OMG", "OHO", "NICE TO MEET YOU", "NICE TO MEET U", "NICE TO SEE YOU", "NICE TO C U", "YOU ARE GREAT", "YOU ARE AWESOME"];
      var s2u = ["I HATE YOU", "I LOVE YOU", "I MISS YOU", "I FUCK YOU"];
      var gaf = ["GOOD AFTERNOON", "GOOD AFTERNOON DC",
        "GOOD AFTERNOON SHAMS"];
      var ly = ["NO YOU ARE LYING", "NO YOU ARE LIAR", "NO", "NO YOU ARE WRONG"];
      var exit = ["EXIT"];
      var jp = ["CAN YOU SPEAK JAPANESE"];
      var like = ["GOOD", "????", "??", "??", "LOL", "ME TOO", "YES", "YEAH", "YUPS", "YUP"];
      var hru = ["HOW R U?", "H R U?", "HOW ARE YOU?", "HRU?", "HRU", "HOW R U", "H R U", "HOW ARE YOU"];
      var good = ["I'M GOOD", "I'M FINE", "I AMFINE", "I AM FINE AND YOU", "I'M FINE AND YOU", "I'M FINE U", "I AM FINE", "I'M FINE AND HOW ARE YOU", "MEE TOO", "FINE", "FINE:)", "FINE :)", "MARVELOUS", "AWESOME", "FINE??", "GREAT"];
      var yes = ["REALLY", ""]
      var wru = ["WHO R U?", "W R U?", "WHO ARE YOU?", "WRU?", "WRU", "WHO R U", "W R U", "WHO ARE YOU", "WHAT IS YOUR NAME", "WHAT'S YOUR NAME", "YOUR NAME?"];
      var wrud = ["WHAT R U DOING?", "WHAT ARE YOU DOING?", "WHAT'S UP", "WHAT'S UP BUDDY", "WHAT ARE YOU DOING"];
      var bye = ["OKAY BYE", "GOOD BYE", "BYE", "GOODBYE", "TATA", "SEE YOU LATER", "SEE YOU AGAIN", "BYE LOVE YOU", "LOVE YOU"];
      var th = ["THANKS", "THANK YOU"];
      var st = ["SHUT UP", "SHUT YOUR MOUTH", "FUCK YOU"];
      var qu = ["WHAT", "WHAT?", "WHICH", "WHICH?", "WHEN", "WHEN?", "REALLY?"];
      var ok = ["HMM", "HMMM", "HMMMM", "OKAY", "OK", "KK", "OKK", "OK?", "OK ?", "YEAH", "OH YEAH"];
      var elon = ["ELON", "ELON MUSK", "MUSK"];
      var sahil = ["SAHIL", "SAHIL BHATIYA", "BSA"];
      var college = ["college", "COLLEGE", "ldce"];
      var merhaba = ["MERHABA", "SELAM", "MERHABALAR", "SELAMUN ALEYKÜM", "SA"];
      var sbh = ["GÜNAYDIN", "GÜNAYDIN NASILSIN", "IYI SABAHLAR"];
      var kotu = ["KÖTÜYÜM", "KÖTÜ DEGILIM"];
      var lord = ["CALL ME MY LORD"];
      var make = ["WHO MADE YOU", "WHO"];
      var death = ["ARE YOU DEATH"];
      var oright = ["FINE", "THATS RIGHT"];
      var command = ["COMMAND", "COMMANDS", "SHOW COMMANDS"];
      var pro = ["PROJECT", "PROJECTS", "projects"];
      var abo = ["about", "about sahil", "ABOUT"];
      var result = ["result","CGPA","Grade","score","cpi"];





      function isInArray(x, y) { return x.indexOf(y) > -1; }
      isInArray(hello, lastmsg) == true ? (smsg = "Hello I am Nancy , an Assitance of Sahil Bhatiya , How are you? ", k = "Hello I am Nancy , an Assitance of Sahil Bhatiya , How are you?  ") :
        isInArray(coin, lastmsg) == true ? (smsg = "its tails??", k = "sure") :
          isInArray(lord, lastmsg) == true ? (smsg = "Hi,MY LORD ??", k = "Hi,MY LORD") :
            isInArray(pro, lastmsg) == true ? (
              smsg = "<a href='pro.html'>Project List </a>"
            ) :
              isInArray(abo, lastmsg) == true ? (
                smsg = "My name is Sahil A Bhatiya, currently pursuing Bachelor of Engineering in Information Technology in L.D.College of Engineering. I am a passionate front-end developerI'm a web enthusiast with a strong passion for crafting responsive websites and web apps. My skills include HTML, CSS, JavaScript, REACT JS, TailwindCSS, Bootstrap, PHP Laravel, Git/GitHub, Figma, Adobe XD, and VS Code. I love turning ideas into reality and creating exceptional digital experiences. Let's build something amazing together! I ave eagerness to learn something new every day and I love to share my knowledge to my fellow students and developers.And I am looking forward to talk with you!", k = smsg) :

                isInArray(result, lastmsg) == true ? (smsg = "Current CGPA = 8.19", k = smsg) :

      isInArray(sbh, lastmsg) == true ? (smsg = "Günyadin?", k = "Merhaba,Nasilsin ?") :
        isInArray(exit, lastmsg) == true ? (smsg = "exit yourself", k = "i am not helping you?") :
          isInArray(oright, lastmsg) == true ? (smsg = "oright", k = smsg) :
            isInArray(kotu, lastmsg) == true ? (smsg = "öyle mi?", k = smsg) :
              isInArray(yes, lastmsg) == true ? (smsg = "Yes", k = smsg) :
                isInArray(wru, lastmsg) == true ? (smsg = "I am Jarvis made by Aaryan", k = smsg) :
                  isInArray(jp, lastmsg) == true ? (smsg = "hai watashi wa nihon go hanase masu", k = smsg) :
                    isInArray(bad, lastmsg) == true ? (smsg = "Thanks for your precious feedback, I'll try to improve that.", k = smsg) :
                      isInArray(wrud, lastmsg) == true ? (k = "Nothing special and you? ", smsg = k + "??") :
                        isInArray(bye, lastmsg) == true ? (smsg = "ok...Bye", k = smsg,
                          setTimeout(function () { $(".status").html("last seen today at " + time) }, 6000),
                          setTimeout(function () { $(".status").css("margin-left", "-50") }, 8000)) :
                          isInArray(th, lastmsg) == true ? (k = "You're Welcome ", smsg = k + "") :
                            isInArray(th, lastmsg) == true ? (k = "You're Welcome ", smsg = k + "") :
                              isInArray(goo, lastmsg) == true ? (k = "Google LLC is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics. ", smsg = k + "") :
                                isInArray(command, lastmsg) == true ? (k = "Just talk with me i am real person you dont need commands", smsg = k + "") :

                                  isInArray(gn, lastmsg) == true ? (smsg = "Good night", k = smsg) :
                                    isInArray(welcome, lastmsg) == true ? (smsg = "Thanks", k = smsg) :
                                      isInArray(s2u, lastmsg) == true ? (smsg = "Same to you", k = smsg) :
                                        isInArray(st, lastmsg) == true ? (smsg = "No, You Shut up", k = smsg) :
                                          isInArray(college, lastmsg) == true ? (smsg = "L. D. COLLEGE OF ENGINEERING, AHMEDABAD  Lalbhai Dalpatbhai College of Engineering, is a state college located in Ahmedabad, Gujarat, India.  <br> <img src='https://scontent.famd1-1.fna.fbcdn.net/v/t39.30808-6/329346444_1471019596756968_5829827356918674517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6Xbz9-IOxK8AX_j10Y5&_nc_ht=scontent.famd1-1.fna&oh=00_AfBfz6gb_5Wzsirhqzl4XAPNqPfqit5A47pM7h6pl7llZA&oe=64E8DA6D' class='pics' /> ", k = smsg) :

                                            isInArray(elon, lastmsg) == true ? (smsg = "Elon Reeve Musk FRS is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation. ", k = smsg) :
                                              isInArray(sahil, lastmsg) == true ? (smsg = " Meet Sahil, a skilled and dedicated web developer with a passion for both front-end and back-end development. With a strong desire to take on projects that push his boundaries and challenge him to learn new skills, Sahil is always up for the task. His ability to understand the needs and requirements of both clients and team members allows him to deliver solutions that not only meet but often exceed expectations .<br> NancyChatBot was created by Sahil Bhatiya  <br> <img src='https://media.licdn.com/dms/image/D4D03AQEW5ZE-LrLJ1Q/profile-displayphoto-shrink_800_800/0/1688050733440?e=2147483647&v=beta&t=tE_L5hIG7B4_GPRC65nkxiP-21UnfGJ64bMbWIexKA4' class='pics' />", k = smsg) :
                                                isInArray(qu, lastmsg) == true ? (k = "I don't know ", smsg = k + "??") :
                                                  isInArray(make, lastmsg) == true ? (k = "Aaryan", k = smsg) :
                                                    isInArray(st, lastmsg) == true ? (smsg = "No, You Shut up", k = smsg) :
                                                      isInArray(ge, lastmsg) == true ? (k = "Good Evening ", smsg = k + "") :
                                                        isInArray(ok, lastmsg) == true ? (smsg = "hmm", k = smsg) :
                                                          isInArray(gaf, lastmsg) == true ? (k = "Good Afternoon", smsg = k + "") :
                                                            isInArray(like, lastmsg) == true ? (smsg = p, k = p) :
                                                              isInArray(good, lastmsg) == true ? (smsg = "Nice to hear it. ??", k = "Nice to hear it. ") :
                                                                isInArray(death, lastmsg) == true ? (smsg = "Yes,I am death", k = smsg) :
                                                                  isInArray(hru, lastmsg) == true ? (smsg = "I'm good, What about you ? ", k = smsg) :
                                                                    lastmsg.substring(0, 6) == "SEARCH" ? (search = lastmsg.slice(7), smsg = "<b align='center'>This are the top results </b><nav class='back'  onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe style = 'z-index:1;overflow-x:scroll; overflow-y:scroll;' scrolling='yes' height='300px' width='100%' src='https://www.bing.com/search?q=" + search + "'></iframe>", k = "This are the, Top results") :
                                                                      (smsg = " there isn't content, there's an indexing issue, or the search engine couldn't understand the query. Any Search use search keyword (example : search google)<br> <img src='https://i.pinimg.com/originals/ea/c2/f0/eac2f0d316e752981f380511ddd3a95f.gif' class='pics' />", k = smsg);
      para = $("<div class='message received'>" + smsg + "<span class='metadata'> <span class='time'>" + time + "</span></span></div>");
      setTimeout(function () {
        $('#ap').append(para); $(".status").html("online");
        $(".conversation-container").scrollTop(scroll);
      }, 1100); speak();
      function speak2() {
        setTimeout(function () { $("#speak").click(); })
      }
      $("#speak").click(function () {
        responsiveVoice.speak(k);
      })
      function speak() {
        responsiveVoice.speak(k);
      }

    }
  });