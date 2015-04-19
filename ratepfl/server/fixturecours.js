var getRandomBetween = function(min, max){
      return Math.floor(Math.random().toFixed(4) * (max+1 - min)) + min;
}




if(!Courses.findOne({title: "Real-time networks"})){


Courses.insert({
    title:"Real-time networks",
    label:"COM-413",
    section:"Computer Science",
    teacher:"Decotignie",
    examen:"Oral",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Real-time networks",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/real-time-networks-COM-413?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });



  Courses.insert({
    title:"Digital education & learning analytics",
    label:"CS-411",
    section:"Computer Science",
    teacher:"Dillenbourg",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Digital education & learning analytics",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/digital-education-learning-analytics-CS-411?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Distributed information systems",
    label:"CS-423",
    section:"Computer Science",
    teacher:"Aberer",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Distributed information systems",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/distributed-information-systems-CS-423?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced cryptography",
    label:"COM-501",
    section:"Computer Science",
    teacher:"Vaudenay",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced cryptography",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-cryptography-COM-501?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced analysis II",
    label:"MATH-401",
    section:"MA",
    teacher:"Ruppen",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced analysis II",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-analysis-ii-MATH-401?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Synthesis, analysis and verification",
    label:"CS-550",
    section:"Computer Science",
    teacher:"Kuncak",
    examen:"Pendant le semestre",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Synthesis, analysis and verification",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/synthesis-analysis-and-verification-CS-550-1?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Mathematical foundations of signal processing",
    label:"COM-514",
    section:"Computer Science",
    teacher:"Bejar Haro",
    examen:"Ecrit",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Mathematical foundations of signal processing",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/mathematical-foundations-of-signal-processing-COM-514-1?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Pattern classification and machine learning",
    label:"CS-433",
    section:"Computer Science",
    teacher:"Khan",
    examen:"Ecrit",
    credits:7,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Pattern classification and machine learning",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/pattern-classification-and-machine-learning-CS-433?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Big Data",
    label:"CS-422",
    section:"Computer Science",
    teacher:"Koch",
    examen:"Pendant le semestre",
    credits:7,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Big Data",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/big-data-CS-422-1?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Biomedical signal processing",
    label:"EE-512",
    section:"EL",
    teacher:"Vesin",
    examen:"Ecrit",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Biomedical signal processing",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/biomedical-signal-processing-EE-512?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Intelligent Agents",
    label:"CS-430",
    section:"Computer Science",
    teacher:"Faltings",
    examen:"Pendant le semestre",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Intelligent Agents",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/intelligent-agents-CS-430-1?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Virtual reality",
    label:"CS-444",
    section:"Computer Science",
    teacher:"Boulic",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Virtual reality",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/virtual-reality-CS-444?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Model-based system design",
    label:"CS-478",
    section:"Computer Science",
    teacher:"Sifakis",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Model-based system design",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/model-based-system-design-CS-478?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Statistical signal and data processing through applications",
    label:"COM-500",
    section:"Computer Science",
    teacher:"Ridolfi",
    examen:"Ecrit",
    credits:5,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Statistical signal and data processing through applications",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/statistical-signal-and-data-processing-through-applications-COM-500?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Embedded systems",
    label:"CS-473",
    section:"Computer Science",
    teacher:"Beuchat",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Embedded systems",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/embedded-systems-CS-473?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Digital 3D Geometry Processing",
    label:"CS-446",
    section:"Computer Science",
    teacher:"Pauly",
    examen:"Oral",
    credits:5,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Digital 3D Geometry Processing",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/digital-3d-geometry-processing-CS-446?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Distributed intelligent systems",
    label:"ENG-466",
    section:"SIE",
    teacher:"Martinoli",
    examen:"Ecrit",
    credits:5,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Distributed intelligent systems",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/distributed-intelligent-systems-ENG-466?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Biological modeling of neural networks",
    label:"BIO-465",
    section:"Computer Science",
    teacher:"Gerstner",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Biological modeling of neural networks",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/biological-modeling-of-neural-networks-BIO-465?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Distributed algorithms",
    label:"CS-451",
    section:"Computer Science",
    teacher:"Guerraoui",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Distributed algorithms",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/distributed-algorithms-CS-451?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Topics in theoretical computer science",
    label:"CS-455",
    section:"Computer Science",
    teacher:"Svensson",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Topics in theoretical computer science",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/topics-in-theoretical-computer-science-CS-455?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Real-time embedded systems",
    label:"CS-476",
    section:"Computer Science",
    teacher:"Beuchat",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Real-time embedded systems",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/real-time-embedded-systems-CS-476?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Statistical neurosciences",
    label:"COM-421",
    section:"Computer Science",
    teacher:"Unknown",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Statistical neurosciences",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/statistical-neurosciences-COM-421?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Random walks",
    label:"COM-516",
    section:"Computer Science",
    teacher:"Lévêque",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Random walks",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/random-walks-COM-516?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced analysis I",
    label:"MATH-400",
    section:"MA",
    teacher:"Ruppen",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced analysis I",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-analysis-i-MATH-400?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Personal interaction studio",
    label:"CS-489",
    section:"Computer Science",
    teacher:"null",
    examen:"Pendant le semestre",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Personal interaction studio",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/personal-interaction-studio-CS-489?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Image processing I",
    label:"MICRO-511",
    section:"MT",
    teacher:"Unser",
    examen:"Ecrit",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Image processing I",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/image-processing-i-MICRO-511?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Satellite communications  systems and networks",
    label:"COM-414",
    section:"Computer Science",
    teacher:"Farserotu",
    examen:"Ecrit",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Satellite communications  systems and networks",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/satellite-communications-systems-and-networks-COM-414?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Cryptography and security",
    label:"COM-401",
    section:"Computer Science",
    teacher:"Vaudenay",
    examen:"Ecrit",
    credits:7,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Cryptography and security",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/cryptography-and-security-COM-401?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Sensors in medical instrumentation",
    label:"EE-511",
    section:"EL",
    teacher:"Aminian",
    examen:"Ecrit",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Sensors in medical instrumentation",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/sensors-in-medical-instrumentation-EE-511?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Audio signal processing and virtual acoustics",
    label:"COM-415",
    section:"Computer Science",
    teacher:"Faller",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Audio signal processing and virtual acoustics",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/audio-signal-processing-and-virtual-acoustics-COM-415?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Performance evaluation",
    label:"COM-503",
    section:"Computer Science",
    teacher:"Le Boudec",
    examen:"Oral",
    credits:7,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Performance evaluation",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/performance-evaluation-COM-503?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Design technologies for integrated systems",
    label:"CS-472",
    section:"Computer Science",
    teacher:"De Micheli",
    examen:"Pendant le semestre",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Design technologies for integrated systems",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/design-technologies-for-integrated-systems-CS-472?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Concurrent algorithms",
    label:"CS-453",
    section:"Computer Science",
    teacher:"Guerraoui",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Concurrent algorithms",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/concurrent-algorithms-CS-453?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Student seminar : Security protocols and applications",
    label:"COM-506",
    section:"Computer Science",
    teacher:"Oechslin",
    examen:"Ecrit",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Student seminar : Security protocols and applications",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/student-seminar-security-protocols-and-applications-COM-506?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Gödel and recursivity",
    label:"MATH-483",
    section:"MA",
    teacher:"Duparc",
    examen:"Ecrit",
    credits:5,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Gödel and recursivity",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/godel-and-recursivity-MATH-483?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Microelectronics for systems on chips",
    label:"CS-474",
    section:"Computer Science",
    teacher:"Beuchat",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Microelectronics for systems on chips",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/microelectronics-for-systems-on-chips-CS-474?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Computer vision",
    label:"CS-442",
    section:"Computer Science",
    teacher:"Fua",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Computer vision",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/computer-vision-CS-442?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Image communication",
    label:"EE-551",
    section:"EL",
    teacher:"Frossard",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Image communication",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/image-communication-EE-551?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Image and video processing",
    label:"EE-550",
    section:"EL",
    teacher:"Ebrahimi",
    examen:"Oral",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Image and video processing",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/image-and-video-processing-EE-550?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Optional project in communication systems",
    label:"COM-507",
    section:"Computer Science",
    teacher:"null",
    examen:"Pendant le semestre",
    credits:8,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Optional project in communication systems",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/optional-project-in-communication-systems-COM-507?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced computer architecture",
    label:"CS-470",
    section:"Computer Science",
    teacher:"Ienne",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced computer architecture",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-computer-architecture-CS-470?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Color reproduction",
    label:"CS-441",
    section:"Computer Science",
    teacher:"Hersch",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Color reproduction",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/color-reproduction-CS-441?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Set theory",
    label:"MATH-318",
    section:"MA",
    teacher:"null",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Set theory",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/set-theory-MATH-318?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Information theory and coding",
    label:"COM-404",
    section:"Computer Science",
    teacher:"Telatar",
    examen:"Ecrit",
    credits:7,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Information theory and coding",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/information-theory-and-coding-COM-404-1?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Enterprise and service-oriented architecture",
    label:"CS-491",
    section:"Computer Science",
    teacher:"Wegmann",
    examen:"Oral",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Enterprise and service-oriented architecture",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/enterprise-and-service-oriented-architecture-CS-491?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Introduction to natural language processing",
    label:"CS-431",
    section:"Computer Science",
    teacher:"Chappelier",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Introduction to natural language processing",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/introduction-to-natural-language-processing-CS-431?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced multiprocessor architecture",
    label:"CS-471",
    section:"Computer Science",
    teacher:"null",
    examen:"Pendant le semestre",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced multiprocessor architecture",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-multiprocessor-architecture-CS-471?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Networks out of control",
    label:"COM-512",
    section:"Computer Science",
    teacher:"null",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Networks out of control",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/networks-out-of-control-COM-512?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Mobile networks",
    label:"COM-405",
    section:"Computer Science",
    teacher:"Hubaux",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Mobile networks",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/mobile-networks-COM-405?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Principles of computer systems",
    label:"CS-522",
    section:"Computer Science",
    teacher:"Argyraki",
    examen:"Pendant le semestre",
    credits:7,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Principles of computer systems",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/principles-of-computer-systems-CS-522-1?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"TCP/IP networking",
    label:"COM-407",
    section:"Computer Science",
    teacher:"Le Boudec",
    examen:"Ecrit",
    credits:5,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"TCP/IP networking",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/tcp-ip-networking-COM-407?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced probability",
    label:"COM-417",
    section:"Computer Science",
    teacher:"Lévêque",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced probability",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-probability-COM-417?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Automatic speech processing",
    label:"EE-554",
    section:"EL",
    teacher:"Bourlard",
    examen:"Ecrit",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Automatic speech processing",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/automatic-speech-processing-EE-554?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Technology ventures in IC",
    label:"CS-410",
    section:"Computer Science",
    teacher:"Bugnion",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Technology ventures in IC",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/technology-ventures-in-ic-CS-410?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Cellular biology and biochemistry for engineers",
    label:"BIO-105",
    section:"SV",
    teacher:"Hirling",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Cellular biology and biochemistry for engineers",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/cellular-biology-and-biochemistry-for-engineers-BIO-105?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"IT security engineering",
    label:"COM-418",
    section:"Computer Science",
    teacher:"Janson",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"IT security engineering",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/it-security-engineering-COM-418?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Discrete computational geometry",
    label:"CS-412",
    section:"Computer Science",
    teacher:"Moret",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Discrete computational geometry",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/discrete-computational-geometry-CS-412?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Unsupervised and reinforcement learning in neural networks",
    label:"CS-434",
    section:"Computer Science",
    teacher:"Gewaltig",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Unsupervised and reinforcement learning in neural networks",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/unsupervised-and-reinforcement-learning-in-neural-networks-CS-434?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Dynamical system theory for engineers",
    label:"COM-502",
    section:"Computer Science",
    teacher:"Thiran",
    examen:"Ecrit",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Dynamical system theory for engineers",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/dynamical-system-theory-for-engineers-COM-502?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Media security",
    label:"EE-552",
    section:"EL",
    teacher:"Ebrahimi",
    examen:"Ecrit",
    credits:6,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Media security",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/media-security-EE-552?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Microwaves",
    label:"EE-445",
    section:"EL",
    teacher:"Skrivervik Favre",
    examen:"Pendant le semestre",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Microwaves",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/microwaves-EE-445?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Software-defined radio : A hands-on course",
    label:"COM-511",
    section:"Computer Science",
    teacher:"Rimoldi",
    examen:"Pendant le semestre",
    credits:5,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Software-defined radio : A hands-on course",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/software-defined-radio-a-hands-on-course-COM-511?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Human computer interaction",
    label:"CS-486",
    section:"Computer Science",
    teacher:"null",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Human computer interaction",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/human-computer-interaction-CS-486?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Industrial automation",
    label:"CS-487",
    section:"Computer Science",
    teacher:"Pignolet-Oswald",
    examen:"Oral",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Industrial automation",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/industrial-automation-CS-487?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Social media",
    label:"EE-593",
    section:"EL",
    teacher:"Gillet",
    examen:"Pendant le semestre",
    credits:2,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Social media",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/social-media-EE-593?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Business plan for IT services",
    label:"CS-490",
    section:"Computer Science",
    teacher:"Wegmann",
    examen:"Oral",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Business plan for IT services",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/business-plan-for-it-services-CS-490?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Convex optimization and applications",
    label:"CS-454",
    section:"Computer Science",
    teacher:"Lebret",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Convex optimization and applications",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/convex-optimization-and-applications-CS-454?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced algorithms",
    label:"CS-450",
    section:"Computer Science",
    teacher:"Moret",
    examen:"Pendant le semestre",
    credits:7,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced algorithms",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-algorithms-CS-450?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced digital communications",
    label:"COM-510",
    section:"Computer Science",
    teacher:"Gastpar",
    examen:"Ecrit",
    credits:7,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced digital communications",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-digital-communications-COM-510?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Biometrics",
    label:"EE-513",
    section:"EL",
    teacher:"Drygajlo",
    examen:"Oral",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Biometrics",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/biometrics-EE-513?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Advanced computer graphics",
    label:"CS-440",
    section:"Computer Science",
    teacher:"Pauly",
    examen:"Pendant le semestre",
    credits:4,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Advanced computer graphics",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/advanced-computer-graphics-CS-440?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Computational molecular biology",
    label:"CS-551",
    section:"Computer Science",
    teacher:"null",
    examen:"Pendant le semestre",
    credits:5,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Computational molecular biology",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/computational-molecular-biology-CS-551?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"Image processing II",
    label:"MICRO-512",
    section:"MT",
    teacher:"Unser",
    examen:"Ecrit",
    credits:3,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"Image processing II",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/image-processing-ii-MICRO-512?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });

  Courses.insert({
    title:"IT security engineering TP",
    label:"COM-418(tp)",
    section:"Computer Science",
    teacher:"Janson",
    examen:"Pendant le semestre",
    credits:2,
    year:4,
    semester:getRandomBetween(1,2),
    linktoepfl:"IT security engineering TP",
    linktoepflhref:"http://edu.epfl.ch/coursebook/fr/it-security-engineering-tp-COM-418-TP?cb_cycle=bama_cyclemaster&cb_section=sc_epfl"
  });



}