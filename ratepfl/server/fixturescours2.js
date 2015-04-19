  var getRandomBetween = function(min, max){
      return Math.floor(Math.random().toFixed(4) * (max+1 - min)) + min;
}


if(!Courses.findOne({title:"Analysis IV", year:2})){
	console.log("CREATING COURSES!! for year 2");
	createSecond(2);
}


if(!Courses.findOne({title:"Analysis IV", year:3})){
	createSecond(3);
}


function createSecond (year){
  
  Courses.insert({
    title:"Algebra",
    label:"MATH-310",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Bayer Fluckiger"
  });

  Courses.insert({
    title:"Algorithms",
    label:"CS-250",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Svensson"
  });

  Courses.insert({
    title:"Analysis III",
    label:"MATH-203(c)",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Cibils"
  });

  Courses.insert({
    title:"Analysis IV",
    label:"MATH-207(b)",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Buffoni"
  });

  Courses.insert({
    title:"Artificial intelligence",
    label:"CS-330",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Faltings"
  });

  Courses.insert({
    title:"Circuits and systems I",
    label:"EE-204",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Rachidi-Haeri"
  });

  Courses.insert({
    title:"Circuits and systems II",
    label:"EE-205",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Gastpar"
  });

  Courses.insert({
    title:"Compiler construction",
    label:"CS-320",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Kuncak"
  });

  Courses.insert({
    title:"Computer algebra",
    label:"MATH-316",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Eisenbrand"
  });

  Courses.insert({
    title:"Computer architecture",
    label:"CS-208",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Falsafi"
  });

  Courses.insert({
    title:"Computer networks",
    label:"COM-208",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Argyraki"
  });

  Courses.insert({
    title:"Concurrency",
    label:"CS-206",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Falsafi"
  });

  Courses.insert({
    title:"Discrete optimization",
    label:"MATH-261",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Eisenbrand"
  });

  Courses.insert({
    title:"Electromagnetics I : Transmission lines and waves",
    label:"EE-200",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Mattes"
  });

  Courses.insert({
    title:"Electromagnetics II : field computation",
    label:"EE-201",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Mattes"
  });

  Courses.insert({
    title:"Electronics I",
    label:"EE-202(b)",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Zysman"
  });

  Courses.insert({
    title:"Electronics II",
    label:"EE-203(b)",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Zysman"
  });

  Courses.insert({
    title:"Electronics III",
    label:"EE-381",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Zysman"
  });

  Courses.insert({
    title:"Functional programming",
    label:"CS-210",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Kuncak"
  });

  Courses.insert({
    title:"General physics II",
    label:"PHYS-114",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Dil"
  });

  Courses.insert({
    title:"Graph theory",
    label:"MATH-360",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Kupavskii"
  });

  
  Courses.insert({
    title:"Human resources in project management",
    label:"MGT-365",
    year:year,
    credits:"2",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Monnin"
  });

  Courses.insert({
    title:"Internet analytics",
    label:"COM-308",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Grossglauser"
  });

  Courses.insert({
    title:"Introduction to cell biology and biochemistry for Information Sciences",
    label:"BIO-107",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Zufferey"
  });

  Courses.insert({
    title:"Introduction to computer graphics",
    label:"CS-341",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Pauly"
  });

  Courses.insert({
    title:"Introduction to database systems",
    label:"CS-322",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Valluri"
  });

  Courses.insert({
    title:"Introduction to optimization and operations research",
    label:"MATH-265",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Bierlaire"
  });

  Courses.insert({
    title:"Introduction to the finite elements method",
    label:"MATH-350",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Quarteroni"
  });

  Courses.insert({
    title:"Introduction to visual computing",
    label:"CS-211",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Dillenbourg"
  });

  Courses.insert({
    title:"Linear models",
    label:"MATH-341",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Davison"
  });

  Courses.insert({
    title:"Mathematical logic",
    label:"MATH-381",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Duparc"
  });

  Courses.insert({
    title:"Network security",
    label:"COM-301",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Oechslin"
  });

  Courses.insert({
    title:"Numerical analysis",
    label:"MATH-251(d)",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Picasso"
  });

  Courses.insert({
    title:"Operating systems",
    label:"CS-323",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Zwaenepoel"
  });

  Courses.insert({
    title:"Ordinary differential equations",
    label:"MATH-301",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Krieger"
  });

  Courses.insert({
    title:"Physics IV",
    label:"PHYS-206",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Meister"
  });

  Courses.insert({
    title:"Principles of digital communications",
    label:"COM-302",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Telatar"
  });

  Courses.insert({
    title:"Probabilities and statistics",
    label:"MATH-232",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Davison"
  });

  
  Courses.insert({
    title:"Quantum information processing",
    label:"PHYS-329(a)",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Macris"
  });

  Courses.insert({
    title:"Reactive programming & parallelism",
    label:"CS-212",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Kuncak"
  });

  Courses.insert({
    title:"Real-time systems",
    label:"CS-321",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Decotignie"
  });

  
  Courses.insert({
    title:"Signal processing for communications",
    label:"COM-303",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Prandoni"
  });

  Courses.insert({
    title:"Software engineering",
    label:"CS-305",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Larus"
  });

  Courses.insert({
    title:"Stochastic models in communication",
    label:"COM-300",
    year:year,
    credits:"6",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Grossglauser"
  });

  Courses.insert({
    title:"System oriented programming",
    label:"CS-207",
    year:year,
    credits:"3",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Chappelier"
  });

  Courses.insert({
    title:"Systems-on-Chip architecture",
    label:"CS-209",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Ienne"
  });

  Courses.insert({
    title:"Theoretical computer science",
    label:"CS-352",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Madry"
  });

  Courses.insert({
    title:"Theory of computation",
    label:"CS-251",
    year:year,
    credits:"4",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Vishnoi"
  });

  Courses.insert({
    title:"Time series",
    label:"MATH-342",
    year:year,
    credits:"5",
    section:"Computer Science",
    semester:getRandomBetween(1,2)
    ,teacher:"Davison"
  });
}
  
