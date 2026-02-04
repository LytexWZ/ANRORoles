// Role grouping
const roleGroups = {
    "Training and Qualification": {
        roles: ["1417626302982258709", "1432190948464525372", "1431691213928398960", "1432192397676122211", "1432192248216424482", "1432192604052783246"],
        category: "departments",
        description: "Training and Qualification department ranks"
    },
    "Logistics and Human Resources": {
        roles: ["1442146096028582010", "1439570647662727179", "1421538343304429772", "1438004289862893659"],
        category: "departments",
        description: "Logistics and Human Resources ranks"
    },
    "Community Engagement": {
        roles: ["1411055172175794236", "1445900003187884124", "1445896609933164737"],
        category: "departments",
        description: "Community Engagement ranks"
    },
    "Internal Affairs": {
        roles: ["1410810226420220026", "1446948686230982918", "1446948550553632959", "1446948169899573542", "1446948353698173012"],
        category: "departments",
        description: "Internal Affairs ranks"
    },
    "ANRO Research & Development": {
        roles: ["1381493578215198790", "1381870520571662390","1393094765117050950", "1393094412220891196", "1380896048385359953"],
        category: "departments",
        description: "Research & Development department ranks"
    },
    "Subdivisons": {
        roles: ["1392480182157316156", "1408903361247449199", "1383329432735056012", "1411493573253267496", "1430734162603675689", "1428853469187674142", "1428853642986782851"],
        category: "departments",
        description: "Subdivisions"
    },
    "ANRO Defense Force": {
        roles: ["1382562284575920128", "1433637433487917158", "1439746495690707054"],
        category: "departments",
        description: "ANRO Defense Force and ANROSOC"
    },
    "Miscellaneous Departments": {
        roles: ["1380272614580424874","1418007750654431272","1442680213577138206"],
        category: "departments",
        description: "Misc 'departments'"
    }
};

//Data
const roleDescriptions = {
    // Departments
    // TQUAL
    "1417626302982258709": {
        name: "Training and Qualification Member",
        description: "ANRO personnel tasked with hosting orientations for new ANRO members and certifications for ANRO staff",
        requirements: "Reach MR + Apply to TQUAL",
        points: "N/A",
        category: "departments"
    },
    "1432190948464525372": {
        name: "TQUAL Admin",
        description: "TQUAL member who assists the Section Cheif by leading a TQUAL division",
        requirements: "Appointed by the Section Cheif for TQUAL. (Not up to date!)",
        points: "N/A",
        category: "departments"
    },
    "1431691213928398960": {
        name: "TQUAL Officer",
        description: "TQUAL member handling duties inside of a TQUAL division.",
        requirements: "Appointed by SC of TQUAL or TQUAL Admin. (Not up to date!)",
        points: "N/A",
        category: "departments"
    },
    "1432192397676122211": {
        name: "Senior Instructor",
        description: "High ranking instructor within TQUAL who may host trainings and supervise Probationary Instructors",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "1432192248216424482": {
        name: "Instructor",
        description: "Regular instructor within TQUAL who hosts trainings.",
        requirements: "Finish the probationary phase of being an instructor",
        points: "N/A",
        category: "departments"
    },
    "1432192604052783246": {
        name: "Prob. Instructor",
        description: "Recently joined instructor needing to complete their probationary phase.",
        requirements: "Reach MR + Apply to TQUAL",
        points: "N/A",
        category: "departments"
    },
    // LHR
    "1445891715599826955": { // needs info
        name: "Middle Rank Management",
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "1442146096028582010": {
        name: "Logistics & Documentation Member",
        description: "",
        requirements: "Reach MR + Apply to Logistics & Documentation",
        points: "N/A",
        category: "departments"
    },
    "1438004289862893659": { // might be LHR?
        name: "ANRO Ribbon Maker",
        description: "ANRO ribbon makers, people who create your ribbon racks and distribute them!",
        requirements: "Be LHR, MR+ & request to become a Ribbon Maker.",
        points: "N/A",
        category: "departments"
    },
    "1439570647662727179": { //needs info
        name: "Senior LO",
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "1421538343304429772": { //needs info
        name: "LO",
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },

    // IA
    "1410810226420220026": {
        name: "Internal Affairs",
        description: "The role signifying that you are a member of Internal Affairs, the department which handles dicipline within ANRO.",
        requirements: "Join IA",
        points: "N/A",
        category: "departments"
    },
    "1446948686230982918": {
        name: "IA | Lead Moderator",
        description: "Trusted moderator who reports directly to IA leadership. They are in charge of reviewing punishments, ensuring logs are correct as well as helping to lead the team.",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "1446948550553632959": {
        name: "IA | Senior Moderator",
        description: "Trusted moderators who may take on extra responsibilities given by a Lead Moderator or IA leadership member.",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "1446948169899573542": {
        name: "IA | Moderator",
        description: "A fully fledged IA moderator expected to maintain activity.",
        requirements: "Complete your probationary period.",
        points: "N/A",
        category: "departments"
    },
    "1446948353698173012": {
        name: "IA | Probationary Moderator",
        description: "A moderator who is new to the team.",
        requirements: "Join IA",
        points: "N/A",
        category: "departments"
    },
    // CE
    "1411055172175794236": { //needs info
        name: "Community Engagement",
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "1445900003187884124": { //needs info
        name: "Senior CE",
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    "1445896609933164737": { //needs info
        name: "CE",
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
    // ANRODF/ANROSOC
    "1382562284575920128": {
        name: "ANRODF Service Ribbon",
        description: "Member of the ANRO Defense Force",
        requirements: "Pass an application into ANRODF",
        points: "N/A",
        category: "departments"
    },
    "1433637433487917158": {
        name: "ANROSOC",
        description: "Sub-department of ANRODF, containing extremely skilled first person / third person shooter players.",
        requirements: "Pass an ANROSOC tryout.",
        points: "N/A",
        category: "departments"
    },
    "1439746495690707054": {
        name: "ANROHG",
        description: "someone please tell me what to put here :sob:",
        requirements: "Pass an ANROHG tryout",
        points: "N/A",
        category: "departments"
    ],
    // R&D
    "1381493578215198790": {
        name: "Director of Research & Development",
        description: "Highest authority of the subdepartment ANRO R&D responsible for collecting data from the reactor for the creation of procedures and documentation",
        requirements: "Appointed by TQUAL Assistant Director",
        points: "N/A",
        category: "departments"
    },
    "1381870520571662390": {
        name: "Dep. Director of Research & Development",
        description: "Senior executive who supports and reports to the Director of Research, acting as the second in command of the Research Department",
        requirements: "Appointed by Director of Research",
        points: "N/A",
        category: "departments"
    },
    "1393094765117050950": {
        name: "ANRO R&D - Chief Researcher",
        description: "High rank inside the Research Department, tasked with hosting research sessions for R&D to research during.",
        requirements: "Be MR and request promotion. (Hosting position)",
        points: "N/A",
        category: "departments"
    },
    "1393094412220891196": {
        name: "ANRO R&D - Senior Researcher",
        description: "Middle rank inside the Research Department, tasked with the collection of data from the reactor for the creation of procedures and documentation",
        requirements: "Be active and contribute within the department",
        points: "N/A",
        category: "departments"
    },
    "1380896048385359953": {
        name: "ANRO R&D - Researcher",
        description: "Low rank inside the research department, tasked with the collection of data from the reactor for the creation of procedures and documentation",
        requirements: "Apply to join ANRO R&D in #subdivision-entry",
        points: "N/A",
        category: "departments"
    },
    // Subdepartments
    "1392480182157316156": {
        name: "ANRO Propaganda Official",
        description: "Creators of propaganda materials in the form of artwork, videos, or anything of the sort.",
        requirements: "Apply to join Propaganda in #subdivision-entry",
        points: "N/A",
        category: "departments"
    },
    "1408903361247449199": {
        name: "ANRO Recruitment Official",
        description: "Department which assists with recruiting new members to ANRO. Anyone can still recruit.",
        requirements: "Apply to join ANRORS in #subdivision-entry",
        points: "N/A",
        category: "departments"
    },
    "1383329432735056012": {
        name: "ANRO Development Official",
        description: "Responsible for working on the ANRO multicenter, ANRO's game for orientation.",
        requirements: "Pass an ANRD application and get accepted.",
        points: "N/A",
        category: "departments"
    },
    "1411493573253267496": {
        name: "ANRO Lore Official",
        description: "Department which creates the lore of ANRO and hosts lore events for ANRO.",
        requirements: "Apply and pass specific apps.",
        points: "N/A",
        category: "departments"
    },
    "1430734162603675689": {
        name: "ANRO Minecraft Official",
        description: "Department handling the Minecraft server of ANRO",
        requirements: "Unknown",
        points: "N/A",
        category: "departments"
    },
    "1428853642986782851": {
        name: "Evil dept. Voluntary member",
        description: "Evil operators tasked with destruction of the plant!",
        requirements: "Request for Evil Department in the thread titled 'Enlistment' found in #officer-posting.",
        points: "N/A",
        category: "departments"
    },
    "1428853469187674142": {
        name: "NICE operator",
        description: "You are very kind!",
        requirements: "Request for Nice Operator in the thread titled 'Enlistment' found in #officer-posting.",
        points: "N/A",
        category: "departments"
    },

    // Misc departments
    "1418007750654431272": {
        name: "Plant Maintenance (Bot Developer)",
        description: "Developer for the John Clanker bot",
        requirements: "Unknown",
        points: "N/A",
        category: "departments"
    },
    "1442680213577138206": {
        name: "Community Creator",
        description: "Developer of the ANRO Portal (Role might change in the future)",
        requirements: "Unknown",
        points: "N/A",
        category: "departments"
    },
    // Awards
    "1437929159564464128": {
        name: "Best LR Award",
        description: "Given to the person who is voted Best LR.",
        requirements: "Be voted Best LR on one of man_ofcan's polls.",
        points: "N/A",
        category: "awards"
    },
    "1402765949928472596": {
        name: "Most Memorable Retired HR",
        description: "Honorary title for distinguished retired HR personnel",
        requirements: "Be voted Most Memorable Retired HR",
        points: "N/A",
        category: "awards"
    },
    "1442491669000880232": {
        name: "Best Command Staff Award",
        description: "Recognition for outstanding middle rank performance. The role is meant to say best CS but 0xvan misspelled it as OM.",
        requirements: "Given to whoever is voted best CS.",
        points: "N/A",
        category: "awards"
    },
    "1402368216054894713": {
        name: "Best ANROCOM (HICOM) Member Award",
        description: "Special recognition for outstanding high command service.",
        requirements: "Handpicked",
        points: "N/A",
        category: "awards"
    },
// Ask Jiron :D | NEEDS FIX     
//    "Quantum Sack": { // WIP
//        description: "",
//        requirements: "",
//        points: "N/A",
//        category: "awards"
//    },
    "1397987517747167242": {
        name: "Galaxy Sack",
        description: "An award of higher class then the Diamond Sack, given to people who have made extremely signficant contributions shaping the way ANRO is.",
        requirements: "Outstanding contribution + ANROCOM/HR nomination",
        points: "N/A",
        category: "awards"
    },
    "1382351421168422962": {
        name: "Diamond Sack",
        description: "High honor award given to members of ANRO who've made significant contributions.",
        requirements: "Significant contribution + ANROCOM/HR nomination",
        points: "N/A",
        category: "awards"
    },
    "1422475507618021446": {
        name: "Film Commendation 1st Class",
        description: "Awarded to those who allocated hours of their lives to render assistance to the ANRO training videos",
        requirements: "Contribute by creating the intros, transitions, endings, and thumbnails for the training videos (No longer obtainable)",
        points: "N/A",
        category: "awards"
    },
    "1422475949903052850": {
        name: "Film Commendation 2nd Class",
        description: "Awarded to those who contributed to the ANRO training videos",
        requirements: "Assisted with filming and/or acting for the training videos (No longer obtainable)",
        points: "N/A",
        category: "awards"
    },
    "1432170943907893248": {
        name: "Naramo Massacre",
        description: "Witness the mass murdering of fellow ROs. Rest in peace!",
        requirements: "Awarded for attending a lore event. No longer obtainable",
        points: "N/A",
        category: "awards"
    },
    "1409244251728117781": {
        name: "Victory Against 1NF Ribbon",
        description: "Victory ribbon for members of the raid against 1NF, which ANRO won.",
        requirements: "Attended the raid between ANRO and 1NF as ANRO. No longer obtainable",
        points: "N/A",
        category: "awards"
    },
    "1392214678993895535": {
        name: "The Last Stand",
        description: "Fought till your last breath for the plant",
        requirements: "No longer obtainable",
        points: "N/A",
        category: "awards"
    },
    "1387494166778347531": {
        name: "V2 Naramo Raider",
        description: "Be on the WN team during the V2 Beta test with developers.",
        requirements: "No longer obtainable",
        points: "N/A",
        category: "awards"
    },
    "1427826989758414869": {
        name: "EVIL department",
        description: "The department of EVIL...",
        requirements: "Apply to Evil Department when applications were out. Unobtainable?",
        points: "N/A",
        category: "awards"
    },

    // Special Roles
    "1396877556753502339": {
        name: "ANROCOM",
        description: "ANRO Command, given to the people in charge of running ANRO.",
        requirements: "Handpicked by ANROCOM",
        points: "N/A",
        category: "special"
    },
    /*
    "1383522027251699772": {
        name: "Server Administrator",
        description: "Technical administrator with full server access",
        requirements: "Given by ANROCOM to extremely high-ranking and trusted members of ANRO.",
        points: "N/A",
        category: "special"
    },
    */
    // Ranks
    // HR
    "1376949919100698814": {
        name: "HR - HIGH RANK",
        description: "High Rank members of ANRO. Command Staff+",
        requirements: "Handpicked by ANROCOM, promoted from MR.",
        points: "N/A",
        category: "ranks"
    },
    "1428896601409192006": {
        name: "Chief Nuclear Officer",
        description: "Highest executive position in ANRO. Leader and owner of ANRO.",
        requirements: "Be doop931",
        points: "N/A",
        category: "ranks"
    },
    "1387873851693600889": {
        name: "Director of Operations",
        description: "Second in command of ANRO. Member of ANROCOM, oversees all operations and departments within ANRO",
        requirements: "Handpicked by ANROCOM",
        points: "N/A",
        category: "ranks"
    },
    "1447098190838104114": {
        name: "Deputy Director of Operations",
        description: "Third in command of ANRO, overseeing all operations. Member of ANROCOM.",
        requirements: "Handpicked by ANROCOM",
        points: "N/A",
        category: "ranks"
    },
    "1374792611063140402": {
        name: "Section Chief",
        description: "Role given to the Assistant Directors of ANRO's main departments.",
        requirements: "Be picked by ANROCOM for an Assistant Director position.",
        points: "N/A",
        category: "ranks"
    },
    "1383498463609884834": {
        name: "Command Staff",
        description: "Assisting in administrative work in their respective department.",
        requirements: "Handpicked by ANROCOM when deemed necessary",
        points: "N/A",
        category: "ranks"
    },
    "1433193599599644713": {
        name: "ANROCOM Clerk",
        description: "ANRO Command Staff who assists with all departments. Not offically a member of ANROCOM.",
        requirements: "Appointed by ANROCOM",
        points: "N/A",
        category: ""
    },
    // MR
    "1376949984750206986": {
        name: "MR - MIDDLE RANK",
        description: "Middle management rank with operational responsibilities",
        requirements: "Pass an SU application after reaching SRO.",
        points: "N/A",
        category: "ranks"
    },
    "1373726948311695421": {
        name: "Field Operations Inspector",
        description: "Senior MR rank.",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "1373726950740332606": {
        name: "Control Room Supervisor",
        description: "Middle MR rank.",
        requirements: "",
        points: "N/A",
        category: "ranks"
    },
    "1373445626297323600": {
        name: "Shift Supervisor",
        description: "Supervises shift operations and crew management",
        requirements: "20+ Shifts + Supervisor Application + 175+ Points + passed probationary phase",
        points: "175",
        category: "ranks"
    },
    "1432967050082385982": {
        name: "Junior Shift Supervisor",
        description: "Probationary SU",
        requirements: "Pass an MR application + 20+ Shifts + 175+ Points",
        points: "N/A",
        category: "ranks"
    },
    // LR
    "1376949707053731851": {
        name: "LR - LOW RANK",
        description: "Entry-level operational rank. Contains most of ANRO",
        requirements: "Pass an orientation into ANRO becoming a JRO.",
        points: "N/A",
        category: "ranks"
    },
    "1424201132435177492": {
        name: "Shift Technical Advisor",
        description: "Senior LR position. Requires all main certifications.",
        requirements: "15+ shifts + Supervisor Certification",
        points: "125",
        category: "ranks"
    },
    "1373445628054736937": {
        name: "Senior Reactor Operator",
        description: "Experienced LR position.",
        requirements: "10+ shifts + Emergency & grid cert + 75+ points",
        points: "75",
        category: "ranks"
    },
    "1373445630348886087": {
        name: "Reactor Operator",
        description: "Intermediate LR position, capable of operating the reactor alone.",
        requirements: "Minimum of 25 points + Turbine & Solo Certifications + 2+ Shifts",
        points: "25",
        category: "ranks"
    },
    "1373445631959633992": {
        name: "Junior Reactor Operator",
        description: "Entry-level LR position, with minimal experience.",
        requirements: "Orientation exam completion",
        points: "0",
        category: "ranks"
    },
    "1374142815109386331": {
        name: "New Applicant",
        description: "New member awaiting orientation and training",
        requirements: "Join the ANRO Discord server",
        points: "N/A",
        category: "ranks"
    },
    /*
    // Misc Ranks
    "1373432137289826384": {
        name: "Operations Assistant",
        description: "Bots of ANRO's Discord server.",
        requirements: "Be a Discord bot.",
        points: "N/A",
        category: "ranks"
    },
    "1440786947277590601": {
        name: "Faction Oversight",
        description: "Overseers of ANRO. Given to the Naramo owner(s).",
        requirements: "Unknown",
        points: "N/A",
        category: "ranks"
    },
    "1373432879446491207": {
        name: "Federal Government",
        description: "Role given to high ranking developers and officals who manage Naramo.",
        requirements: "Recieve authorization from Blaley or PupNetx and request for the role in #special-role-request",
        points: "N/A",
        category: "ranks"
    },
    "1441631068951416946": {
        name: "Naramo Moderator",
        description: "NAMS members. Moderation team of Naramo.",
        requirements: "Join NAMS and request for the role in #special-role-request",
        points: "N/A",
        category: "ranks"
    },
    "1375442086358417489": {
        name: "Faction Diplomat",
        description: "High ranking members of other Naramo factions. These people represent their factions within ANRO.",
        requirements: "Be an HR in any other Naramo faction, NFSF, FGDF, ASC, and NES, or be an MR with permission to recieve this role.",
        points: "N/A",
        category: "ranks"
    },
    "1373714234893926500": {
        name: "Noobic Military Police",
        description: "Military Police which assist with moderating Naramo.",
        requirements: "NMP Patrol Officer+ and request for the role",
        points: "N/A",
        category: "ranks"
    },
    // Retirement home!
    "1427385970529009674": {
        name: "Retired ANROCOM",
        description: "Honorary title for retired ANROCOM members",
        requirements: "Former ANROCOM status + honorable service",
        points: "N/A",
        category: "ranks"
    },
    "1399386519256563793": {
        name: "Retired HR",
        description: "Honorary title for retired HR personnel",
        requirements: "Former HR status + currently retired",
        points: "N/A",
        category: "ranks"
    },
    "1416982954285989998": {
        name: "Retired MR",
        description: "Honorary title for retired middle rank personnel",
        requirements: "Former MR status + retirement status",
        points: "N/A",
        category: "ranks"
    },
    */
    // Certifications
    "1411482428777697301": {
        name: "Formation Certified",
        description: "Be able to do wedges and faces",
        requirements: "Pass a Formation Certification hosted by Burger (retired) or Robloxer.",
        points: "N/A",
        category: "certifications"
    },
    "1432097376239095848": {
        name: "Spooky Certified",
        description: "Specialized certification for spooky operations. Operates the SpOoOoOoky grid during Halloween!",
        requirements: "Complete the SpOoOoOoky exam!",
        points: "N/A",
        category: "certifications"
    },
    "1444143319713058876": {
        name: "Jolly Certified",
        description: "Truly a Jolly operator! Joke certification",
        requirements: "Attend a Jolly certification session",
        points: "N/A",
        category: "certifications"
    },
    "1416983996772126841": {
        name: "Supervisor Certified",
        description: "Able to occupy supervisor positions in ANRO and during shifts. Required for promotion to SRO.",
        requirements: "Complete the Supervisor Exam + Cohost all 4 main Certifications and a Shift",
        points: "N/A",
        category: "certifications"
    },
    "1416975306971152445": {
        name: "Supervisor Eligible",
        description: "Able to cohost shifts and take the Supervisor Certification exam when ready.",
        requirements: "Senior Reactor Operator + Solo, Turbine, Emergency, Grid certifications + 125pts + NO punishment roles + 2 weeks of service in ANRO",
        points: "125",
        category: "certifications"
    },
    "1423037547902140629": {
        name: "Grid Certified",
        description: "Certified to operate electrical grid systems",
        requirements: "Pass a Grid Training and Examination.",
        points: "N/A",
        category: "certifications"
    },
    "1447713284517134480": {
        name: "Grid Eligible",
        description: "Your halfway to being Grid Certified! Now, pass a Grid Examination",
        requirements: "Complete a Grid Training",
        points: "N/A",
        category: "certifications"
    },
    "1385818988948492329": {
        name: "Evil Certified",
        description: "You are super EVIL..",
        requirements: "Attend an Evil Certification. These are rarely hosted.",
        points: "N/A",
        category: "certifications"
    },
    "1383568801420939416": {
        name: "Emergency Certified",
        description: "Qualified to handle emergency situations and procedures",
        requirements: "Pass an Emergency Training and Examination",
        points: "N/A",
        category: "certifications"
    },
    "1447713122394832896": {
        name: "Emergency Eligible",
        description: "Your halfway to being Emergency Certified! Now, pass a Emergency Examination",
        requirements: "Complete an Emergency Training",
        points: "N/A",
        category: "certifications"
    },
    "1394021124484104213": {
        name: "Turbine Certified",
        description: "Certified to operate turbine systems",
        requirements: "Sync a turbine successfully during a Turbine Certification session.",
        points: "N/A",
        category: "certifications"
    },
    "1383568721854861383": {
        name: "Solo Certified",
        description: "Qualified for independent solo operations",
        requirements: "Attend a solo cert or open a T3 ticket in #hr-hub and send a video of you doing a solo.",
        points: "N/A",
        category: "certifications"
    },
};
/* Blank format for departments
     "": {
        description: "",
        requirements: "",
        points: "N/A",
        category: "departments"
    },
*/
